import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import type { Request, Response } from 'express';
import {
  requireAdminAuth,
  recordAudit,
  getAuditLogs,
  type AuthenticatedRequest,
} from './server/auth.ts';
import { serverStore } from './server/store.ts';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.set('trust proxy', true);

  // Initialize server store
  serverStore.init();

  // Security headers & block direct access to hidden files / .data
  app.use((req, res, next) => {
    if (
      req.path.startsWith('/.data') ||
      req.path.includes('/.git') ||
      req.path.startsWith('/.env')
    ) {
      res.status(403).json({ error: 'Acesso proibido.' });
      return;
    }
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  app.use(express.json({ limit: '20mb' }));

  // ======================== PUBLIC CATALOG ROUTE ========================

  app.get('/api/catalog', (_req: Request, res: Response) => {
    res.setHeader('Cache-Control', 'no-store');
    res.json(serverStore.getSnapshot());
  });

  // ======================== PROTECTED ADMIN ROUTES ========================

  app.use('/api/admin', requireAdminAuth);

  app.get('/api/admin/overview', (req: AuthenticatedRequest, res: Response) => {
    res.setHeader('Cache-Control', 'no-store');
    res.json({
      username: req.adminUser?.email || 'Administrador',
      stats: serverStore.getStats(),
      auditLogs: getAuditLogs(40),
    });
  });

  app.post('/api/admin/products', (req: AuthenticatedRequest, res: Response) => {
    const body = req.body || {};
    if (!body.nome || typeof body.nome !== 'string') {
      res.status(400).json({ error: 'Nome do medicamento é obrigatório.' });
      return;
    }
    const saved = serverStore.saveProduto(body);
    recordAudit(
      'product_save',
      req.adminUser?.email || 'admin',
      `Cadastro/atualização do medicamento "${saved.nome}" (${saved.id}).`
    );
    res.json({ produto: saved, snapshot: serverStore.getSnapshot() });
  });

  app.put('/api/admin/products/:id', (req: AuthenticatedRequest, res: Response) => {
    const id = req.params.id;
    const body = { ...(req.body || {}), id };
    const saved = serverStore.saveProduto(body);
    recordAudit(
      'product_update',
      req.adminUser?.email || 'admin',
      `Edição do medicamento "${saved.nome}" (${saved.id}).`
    );
    res.json({ produto: saved, snapshot: serverStore.getSnapshot() });
  });

  app.delete('/api/admin/products/:id', (req: AuthenticatedRequest, res: Response) => {
    const id = req.params.id;
    const deleted = serverStore.deleteProduto(id);
    if (!deleted) {
      res.status(404).json({ error: 'Medicamento não encontrado.' });
      return;
    }
    recordAudit(
      'product_delete',
      req.adminUser?.email || 'admin',
      `Exclusão do medicamento ID ${id}.`
    );
    res.json({ ok: true, snapshot: serverStore.getSnapshot() });
  });

  app.put('/api/admin/products/:id/shelves', (req: AuthenticatedRequest, res: Response) => {
    const id = req.params.id;
    const prateleiras = Array.isArray(req.body?.prateleiras) ? req.body.prateleiras : [];
    const prod = serverStore.setProdutoPrateleiras(id, prateleiras);
    if (!prod) {
      res.status(404).json({ error: 'Medicamento não encontrado.' });
      return;
    }
    recordAudit(
      'shelves_set',
      req.adminUser?.email || 'admin',
      `Prateleiras de "${prod.nome}" definidas como [${prateleiras.join(', ') || 'nenhuma'}].`
    );
    res.json({ produto: prod, snapshot: serverStore.getSnapshot() });
  });

  app.post('/api/admin/products/:id/shelves', (req: AuthenticatedRequest, res: Response) => {
    const id = req.params.id;
    const shelfId = String(req.body?.prateleiraId || '').trim();
    if (!shelfId) {
      res.status(400).json({ error: 'Informe a prateleira.' });
      return;
    }
    const prod = serverStore.addProdutoPrateleira(id, shelfId);
    if (!prod) {
      res.status(404).json({ error: 'Medicamento não encontrado.' });
      return;
    }
    recordAudit(
      'shelf_add',
      req.adminUser?.email || 'admin',
      `Prateleira ${shelfId.toUpperCase()} associada a "${prod.nome}".`
    );
    res.json({ produto: prod, snapshot: serverStore.getSnapshot() });
  });

  app.delete(
    '/api/admin/products/:id/shelves/:shelfId',
    (req: AuthenticatedRequest, res: Response) => {
      const { id, shelfId } = req.params;
      const prod = serverStore.removeProdutoPrateleira(id, shelfId);
      if (!prod) {
        res.status(404).json({ error: 'Medicamento não encontrado.' });
        return;
      }
      recordAudit(
        'shelf_remove',
        req.adminUser?.email || 'admin',
        `Prateleira ${shelfId.toUpperCase()} removida de "${prod.nome}".`
      );
      res.json({ produto: prod, snapshot: serverStore.getSnapshot() });
    }
  );

  app.put('/api/admin/rows/:letra/photo', (req: AuthenticatedRequest, res: Response) => {
    const letra = req.params.letra;
    const fotoUrl = String(req.body?.fotoUrl || '').trim();
    if (!fotoUrl) {
      res.status(400).json({ error: 'URL ou imagem da foto é obrigatória.' });
      return;
    }
    const updated = serverStore.updateFileiraFoto(letra, fotoUrl);
    if (!updated) {
      res.status(404).json({ error: 'Fileira não encontrada.' });
      return;
    }
    recordAudit(
      'row_photo_update',
      req.adminUser?.email || 'admin',
      `Foto da Fileira ${updated.letra} atualizada.`
    );
    res.json({ fileira: updated, snapshot: serverStore.getSnapshot() });
  });

  app.put('/api/admin/shelves/:id/coordinates', (req: AuthenticatedRequest, res: Response) => {
    const id = req.params.id;
    const { x, y, largura, altura } = req.body || {};
    const updated = serverStore.updatePrateleiraCoordinates(id, {
      x: Number(x),
      y: Number(y),
      largura: Number(largura),
      altura: Number(altura),
    });
    if (!updated) {
      res.status(404).json({ error: 'Prateleira não encontrada.' });
      return;
    }
    recordAudit(
      'shelf_coords_update',
      req.adminUser?.email || 'admin',
      `Coordenadas da prateleira ${updated.id} atualizadas.`
    );
    res.json({ prateleira: updated, snapshot: serverStore.getSnapshot() });
  });

  app.post('/api/admin/import', (req: AuthenticatedRequest, res: Response) => {
    const base64 = String(req.body?.fileBase64 || '').trim();
    if (!base64) {
      res.status(400).json({ error: 'Arquivo da planilha não enviado.' });
      return;
    }
    try {
      const result = serverStore.importWorkbookBase64(base64);
      recordAudit(
        'catalog_import',
        req.adminUser?.email || 'admin',
        `Planilha importada: ${result.inseridos} novos, ${result.atualizados} atualizados, ${result.localizacoesImportadas} localizações.`
      );
      res.json({ ...result, snapshot: serverStore.getSnapshot() });
    } catch (err) {
      res.status(400).json({
        error: err instanceof Error ? err.message : 'Formato de planilha inválido.',
      });
    }
  });

  app.get('/api/admin/export', (req: AuthenticatedRequest, res: Response) => {
    const buffer = serverStore.exportWorkbookBuffer();
    const filename = `catalogo_ultramed_atualizado_${new Date().toISOString().slice(0, 10)}.xlsx`;
    recordAudit(
      'catalog_export',
      req.adminUser?.email || 'admin',
      `Exportação da planilha administrativa (${filename}).`
    );
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Cache-Control', 'no-store');
    res.send(buffer);
  });

  app.post('/api/admin/medications/complement', (req: AuthenticatedRequest, res: Response) => {
    const resumo = serverStore.complementarCatalogoSeguro();
    recordAudit(
      'catalog_complement',
      req.adminUser?.email || 'admin',
      `Análise e complementação não destrutiva executada (${resumo.totalAnalisados} analisados: ${resumo.verificados} verificados, ${resumo.incompletos} incompletos, ${resumo.necessitaRevisao} revisão, ${resumo.pendentes} pendentes).`
    );
    res.json({ ok: true, resumo, snapshot: serverStore.getSnapshot() });
  });

  app.post('/api/admin/reset', (req: AuthenticatedRequest, res: Response) => {
    serverStore.resetToSeed();
    recordAudit(
      'catalog_reset',
      req.adminUser?.email || 'admin',
      'Banco de dados restaurado para a base padrão da Ultramed.'
    );
    res.json({ ok: true, snapshot: serverStore.getSnapshot() });
  });

  // Never serve SPA HTML for unknown /api/* routes
  app.use('/api', (_req: Request, res: Response) => {
    res.status(404).json({ error: 'Rota da API não encontrada.' });
  });

  // ======================== FRONTEND SERVING ========================

  const distDir = path.join(process.cwd(), 'dist');
  const isDev = process.env.DEV_MODE === '1' || process.env.NODE_ENV === 'development';

  if (isDev || !fs.existsSync(path.join(distDir, 'index.html'))) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false, ws: false },
      appType: 'spa',
    });
    app.get('/@vite/client', async (_req: Request, res: Response, next) => {
      try {
        const transformed = await vite.transformRequest('/@vite/client');
        if (transformed?.code) {
          const safeCode = transformed.code
            .replace(
              'transport.connect(createHMRHandler(handleMessage));',
              '/* HMR WebSocket disabled */'
            )
            .replace(
              /else\s+throw\s+new\s+SendBeforeConnectError\([^)]*\);/,
              'else return;'
            );
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
          res.setHeader('Cache-Control', 'no-store');
          res.send(safeCode);
          return;
        }
      } catch {
        // Fall through to standard Vite middleware
      }
      next();
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Assistente Ultramed server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // These routes carry user/entity-specific data behind a dynamic
  // parameter, so they're rendered on-demand per request instead of
  // being prerendered at build time (prerendering a parameterized route
  // requires a getPrerenderParams() function to enumerate every possible
  // param value, which doesn't make sense here).
  {
    path: 'edit-supplier/:supplierId',
    renderMode: RenderMode.Server
  },
  {
    path: 'edit-product/:productId',
    renderMode: RenderMode.Server
  },
  {
    path: 'transaction-details/:transactionId',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

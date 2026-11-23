import { RenderMode } from '@angular/ssr';
export const serverRoutes = [
    {
        path: 'produto/:codigo',
        renderMode: RenderMode.Client
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];

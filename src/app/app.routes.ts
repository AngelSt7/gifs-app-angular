import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import("./features/gifs/pages/dashboard-page/dashboard-page.component"),
        children: [
            {
                path: 'trending',
                loadComponent: () => import("./features/gifs/pages/trending-page/trending-page.component")
            },
            {
                path: 'search',
                loadComponent: () => import("./features/gifs/pages/search-page/search-page.component")
            },
            {
                path: 'history/:query',
                loadComponent: () => import("./features/gifs/pages/history-page/history-page.component")
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

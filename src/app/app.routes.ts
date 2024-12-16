import { provideRouter, Routes, withHashLocation } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadComponent: () =>
      import('./layout/main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'biography',
        loadComponent: () =>
          import('./pages/biography/biography.component').then(
            (m) => m.BiographyComponent
          ),
      },
      {
        path: 'plot-analysis',
        loadComponent: () =>
          import('./pages/plot-analysis/plot-analysis.component').then(
            (m) => m.PlotAnalysisComponent
          ),
      },
      {
        path: 'episode_1',
        loadComponent: () =>
          import('./pages/episode-1/episode-1.component').then(
            (m) => m.Episode1Component
          ),
      },
      {
        path: 'episode_2',
        loadComponent: () =>
          import('./pages/episode-2/episode-2.component').then(
            (m) => m.Episode2Component
          ),
      },
      {
        path: 'episode_3',
        loadComponent: () =>
          import('./pages/episode-3/episode-3.component').then(
            (m) => m.Episode3Component
          ),
      },
      {
        path: 'episode_4',
        loadComponent: () =>
          import('./pages/episode-4/episode-4.component').then(
            (m) => m.Episode4Component
          ),
      },
      {
        path: 'episode_5',
        loadComponent: () =>
          import('./pages/episode-5/episode-5.component').then(
            (m) => m.Episode5Component
          ),
      },
      {
        path: 'episode_6',
        loadComponent: () =>
          import('./pages/episode-6/episode-6.component').then(
            (m) => m.Episode6Component
          ),
      },
      {
        path: 'episode_7',
        loadComponent: () =>
          import('./pages/episode-7/episode-7.component').then(
            (m) => m.Episode7Component
          ),
      },
      {
        path: 'episode_8',
        loadComponent: () =>
          import('./pages/episode-8/episode-8.component').then(
            (m) => m.Episode8Component
          ),
      },
      {
        path: 'episode_9',
        loadComponent: () =>
          import('./pages/episode-9/episode-9.component').then(
            (m) => m.Episode9Component
          ),
      },
      {
        path: 'episode_10',
        loadComponent: () =>
          import('./pages/episode-10/episode-10.component').then(
            (m) => m.Episode10Component
          ),
      },
      {
        path: 'episode_11',
        loadComponent: () =>
          import('./pages/episode-11/episode-11.component').then(
            (m) => m.Episode11Component
          ),
      },
      {
        path: 'episode_12',
        loadComponent: () =>
          import('./pages/episode-12/episode-12.component').then(
            (m) => m.Episode12Component
          ),
      },
      {
        path: 'episode_13',
        loadComponent: () =>
          import('./pages/episode-13/episode-13.component').then(
            (m) => m.Episode13Component
          ),
      },
      {
        path: 'episode_14',
        loadComponent: () =>
          import('./pages/episode-14/episode-14.component').then(
            (m) => m.Episode14Component
          ),
      },
      {
        path: 'episode_15',
        loadComponent: () =>
          import('./pages/episode-15/episode-15.component').then(
            (m) => m.Episode15Component
          ),
      },
      {
        path: 'episode_16',
        loadComponent: () =>
          import('./pages/episode-16/episode-16.component').then(
            (m) => m.Episode16Component
          ),
      },
      {
        path: 'episode_17',
        loadComponent: () =>
          import('./pages/episode-17/episode-17.component').then(
            (m) => m.Episode17Component
          ),
      },
      {
        path: 'episode_18',
        loadComponent: () =>
          import('./pages/episode-18/episode-18.component').then(
            (m) => m.Episode18Component
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

export const appRouterProviders = provideRouter(routes, withHashLocation());

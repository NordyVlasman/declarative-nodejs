import { AppRouter } from '@liftr/core';
import { applicationModule } from '@routes/application/application.module';
import { LiftrModule } from './liftr.module';

export const routes: AppRouter[] = [

  {
    path: '/application',
    module: applicationModule,
    middleware: [],
  },  {
    path: '/',
    module: LiftrModule,
    middleware: [],
  },
];


import { Module, ModuleComponent } from '@liftr/core';
import { applicationRoute } from './application.routes';

export const applicationModule: ModuleComponent = Module([
    {
        route: applicationRoute,
        middleware: [],
    },
])

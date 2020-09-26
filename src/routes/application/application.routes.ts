
import { Route } from '@liftr/core';
import { applicationController } from '@controllers/application/application.controller';

export const applicationRoute = Route.get('/', applicationController);

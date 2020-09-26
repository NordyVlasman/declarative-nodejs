
import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response, NextFunction } from 'express';
import { applicationController } from './application.controller';


describe('src/controllers/application/application.controller.ts', () => {
    let sandbox: sinon.SinonSandbox;
    let req: Partial<Request> = {};
    let responseStub: Partial<Response>;
    let next: Partial<NextFunction>;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        responseStub = {
            send: sandbox.stub(),
        }
    });

    it('should send a message' , () => {
        applicationController(req as Request, responseStub as Response, next as NextFunction);
        expect(responseStub.send).to.be.calledWith('Lift off!');
    });
});

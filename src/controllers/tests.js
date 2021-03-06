import KoaRouter from 'koa-router';
import {EventModel} from '../models';

export default (app, router) => {
	const testsRouter = new KoaRouter();

	testsRouter
		.get('/', ctx => ctx.body = 'Tests router');
	;

	__LOGGER__.info('Append routes for test controller');
	router.use('/tests', testsRouter.routes());
};
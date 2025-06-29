import { Router } from "express";
import offerRoutes from'./offerRoutes.js';
import userRotes from './userRoutes.js';
import { use } from "react";
import reviewRouter from './reviewRoutes.js';

const router = new Router();
router.use('/', offerRoutes);
router.use('/', userRotes);
router.use('/comments', reviewRouter);
//export {router};
export default router;
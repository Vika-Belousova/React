import { Router } from "express";
import offerRoutes from'./offerRoutes.js';
import userRotes from './userRoutes.js';
import { use } from "react";

const router = new Router();
router.use('/', offerRoutes);
router.use('/', userRotes);
//export {router};
export default router;
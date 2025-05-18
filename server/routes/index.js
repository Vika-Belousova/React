import { Router } from "express";
import offerRoutes from'./offerRoutes.js';
const router = new Router();
router.use('/', offerRoutes);
export {router};
export default router;
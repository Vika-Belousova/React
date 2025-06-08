import { Router } from 'express';
import reviewController from '../controllers/reviewController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = new Router();

router.post('/:offerId', authenticateToken, reviewController.addReview);
router.get('/:offerId', reviewController.getreviewByOfferId);

export default router;
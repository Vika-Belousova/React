import ApiError from "../error/ApiError.js";
import { User } from '../models/user.js';
import { Review} from '../models/review.js';
import { adaptReviewToClient } from '../adapters/reviewAdapter.js';
const addReview = async (req, res, next) =>{
  try{
    const {comment, rating} = req.body;
    const offerId = req.params.offerId;
    const userId = req.user.id;
    if(!comment || !rating || !offerId){
      return next(ApiError.badRequest('Не хватает данных для комментария'));
    }
    const review = await Review.create({
      text: comment,
      rating,
      authorId:userId,
      OfferId: offerId
    });
    res.status(201).json(review);
  }catch(error){
    console.error(error);
    next(ApiError.badRequest('Ошибка при добавлении комментария'));
  }
};
const getreviewByOfferId = async (req, res, next)=>{
  try{
    const reviews = await Review.findAll({
      where: {OfferId: req.params.offerId},
      include: {model: User, as: 'author'},
      order: [['publishDate', 'DESC']]
    });
    const adapterReviews = reviews.map(adaptReviewToClient);
    res.json(adapterReviews);
  }catch(error){
    console.error(error);
    next(ApiError.internal('Ошибка при получении комментария'));
  }
};
export default { getreviewByOfferId, addReview };

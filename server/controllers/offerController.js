import {Offer} from '../models/offer.js'
async function getAllOffers(req, res, next) {
  try{
    const offers = await Offer.findAll(); 
    res.send(offers);
  }catch(error){
    console.log('Не получилось получить список предложений: ', error)
  }
}
export {getAllOffers};
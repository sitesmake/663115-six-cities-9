import FavoriteOfferCard from '../../components/favorite-offer-card/favorite-offer-card';
import {Offer} from '../../types/offer';

type FavoriteOffersProps = {
  offers: Offer[],
}

function FavoriteOffers({offers}: FavoriteOffersProps): JSX.Element{
  return (
    <>
      {offers.map((offer: Offer) => <FavoriteOfferCard {...offer} key={offer.id} />)}
    </>
  );
}

export default FavoriteOffers;

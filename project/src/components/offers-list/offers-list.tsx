import PropertyCard from '../../components/property-card/property-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[],
}

function OffersList({offers}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <PropertyCard {...offer} key={offer.id} />)}
    </div>
  );
}

export default OffersList;

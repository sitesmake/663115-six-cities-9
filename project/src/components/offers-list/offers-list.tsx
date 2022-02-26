import PropertyCard from '../../components/property-card/property-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[],
  setActiveOffer: (id:number)=>void,
}

function OffersList({offers, setActiveOffer}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <PropertyCard offer={offer} key={offer.id} setActiveOffer={setActiveOffer} />)}
    </div>
  );
}

export default OffersList;

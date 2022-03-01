import {Offer} from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    type: 'Apartment',
    price: 120,
    title: 'Beautiful & luxurious apartment at great location',
    rating: 4,
    premium: true,
    img: 'img/apartment-01.jpg',
  },
  {
    id: 2,
    type: 'Private room',
    price: 80,
    title: 'Wood and stone place',
    rating: 4,
    premium: false,
    img: 'img/room.jpg',
  },
  {
    id: 3,
    type: 'Apartment',
    price: 132,
    title: 'Canal View Prinsengracht',
    rating: 4,
    premium: false,
    img: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    type: 'Apartment',
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    rating: 5,
    premium: false,
    img: 'img/apartment-03.jpg',
  },
];

/*

This file is to store sample card data to develop and test UI/UX functionality before connecting the backend.

*/

import { Profile, FavoriteRestaurant } from "../Types and Interfaces/types";

const sampleCards:Profile[] = [
    {
      image: {
        uri: "https://thumbs.dreamstime.com/b/outside-mcdonalds-store-38411658.jpg",
      },
      name: "McDonald's",
      rating: 4.6,
      price: 2,
    },
    {
      image: {
        uri: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chick-fil-A.jpg"
      },
      name: "Chick-Fil-A",
      rating: 4.5,
      price: 3,
    },
    {
      image: {
        uri: "https://cdn.winsightmedia.com/platform/files/public/10-chipotle-shutterstock_1623841108.jpg?VersionId=.AKWeeduOA4PgvBsUF6UkYirieLAN6qj"
      },
      name: "Chipotle",
      rating: 3.0,
      price: 1
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/458595019/photo/starbucks-coffee.jpg?s=612x612&w=0&k=20&c=V6vpsy-WUvdxop_RUSoLbEcKQPg_4vwoihb6itXhua8="
      },
      name: "Starbucks",
      rating: 3.4,
      price: 4
    }
];


export const sampleFavorites:FavoriteRestaurant[] = [
  {
    image: {uri:'https://thumbs.dreamstime.com/b/outside-mcdonalds-store-38411658.jpg'},
    name: "McDonald's",
    rating: 4.6,
  },
]

export default sampleCards

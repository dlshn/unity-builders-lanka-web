import img88 from "../assest/package_images/88.jpg";
import img92 from "../assest/package_images/92.jpg";
import img117 from "../assest/package_images/117.jpg";

const packageData = [
  {
    title: "Two Story House",
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1 },
      second: { Bedroom: null, Bathroom: null },
      sqrfts: 1400,
    },
    extraDetails: "Living/Dining/Kitchen for ground floor and TV lobby and Balcony for first floor",
    price: "88",
    image: img88,
    moreImages: [img88, img92, img117, img117],
  },
  {
    title: "Two Story House",
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1 },
      second: { Bedroom: null, Bathroom: null },
      sqrfts: 1450,
    },
    extraDetails: "Living/Dining/Kitchen and Single Car Porch for ground floor, TV lobby and Balcony for first floor",
    price: "92",
    image: img92,
    moreImages: [img92, img117, img88, img117],
  },
  {
    title: "Two Story House",
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1 },
      second: { Bedroom: null, Bathroom: null },
      sqrfts: 1650,
    },
    extraDetails: "Living/Dining/Kitchen and Single Car Porch for ground floor, TV lobby and Balcony for first floor",
    price: "117",
    image: img117,
    moreImages: [img117, img92, img88, img117],
  },
  {
    title: "Two Story House",
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1 },
      second: { Bedroom: null, Bathroom: null },
      sqrfts: 1850,
    },
    extraDetails: "Living/Dining/Kitchen and Single Car Porch for ground floor, TV lobby, Balcony, and Roof terrace for first floor",
    price: "129",
    image: img117,
    moreImages: [img117, img117, img117, img117],
  },
  {
    title: "Two Story House",
    description: "4 Bedroom and 3 Bathroom",
    details: {
      ground: { Bedroom: 2, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 2 },
      second: { Bedroom: 1, Bathroom: null },
      sqrfts: 3200,
    },
    extraDetails: "Living/Dining/Kitchen and Double Car Porch for ground floor, TV lobby, Balcony, and Roof terrace for first floor, Open area for second floor",
    price: "242",
    image: img92,
    moreImages: [img92, img92, img92, img92],
  },
];

  
  export default packageData;
  
import img88_1 from "../assest/package_images/88/1.jpg";
import img88_2 from "../assest/package_images/88/2.jpg";
import img88_3 from "../assest/package_images/88/3.jpg";
import img88_4 from "../assest/package_images/88/4.jpg";

import img96_1 from "../assest/package_images/96/1.jpg";
import img96_2 from "../assest/package_images/96/2.jpg";
import img96_3 from "../assest/package_images/96/3.jpg";
import img96_4 from "../assest/package_images/96/4.jpg";

import img98_1 from "../assest/package_images/98/1.jpg";
import img98_2 from "../assest/package_images/98/2.jpg";
import img98_3 from "../assest/package_images/98/3.jpg";
import img98_4 from "../assest/package_images/98/4.jpg";

import img126_1 from "../assest/package_images/126/1.jpg";
import img126_2 from "../assest/package_images/126/2.jpg";
import img126_3 from "../assest/package_images/126/3.jpg";
import img126_4 from "../assest/package_images/126/4.jpg";

const packageData = [
  {
    title: "Two Story House",  // should update
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1},
      second: {Bedroom: null, Bathroom: null},
      totalArea: 1350
    },
    extraDetails:"Living Are and Kitchen for ground floor and Open Veranda/TV lobby and Balcony for first floor",
    price: "88",
    image: img88_1,
    moreImages: [img88_1,img88_2, img88_3, img88_4]
  },
  {
    title: "Two Story House",
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1},
      second: {Bedroom: null, Bathroom: null},
      totalArea: 1400
    },
    extraDetails:"Living/Dining/Kitchen for ground floor and TV lobby and Balcony for first floor",
    price: "96",
    image: img96_1,
    moreImages: [img96_1,img96_2, img96_3, img96_4]
  },
  {
    title: "Two Story House",
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1},
      second: {Bedroom: null, Bathroom: null},
      totalArea: 1450
    },
    extraDetails:"Living/Dining/Kitchen/Single Car Porch for ground floor and TV lobby and Balcony for first floor",
    price: "98",
    image: img98_1,
    moreImages: [img98_1,img98_2, img98_3, img98_4]
  },
  {
    title: "Two Story House",
    description: "3 Bedroom and 2 Bathroom",
    details: {
      ground: { Bedroom: 1, Bathroom: 1 },
      first: { Bedroom: 2, Bathroom: 1},
      second: {Bedroom: null, Bathroom: null},
      totalArea: 1650
    },
    extraDetails:"Living/Dining/Kitchen/Single Car Porch for ground floor and TV lobby and Balcony for first floor",
    price: "126",
    image: img126_1,
    moreImages: [img126_1,img126_2, img126_3, img126_4]
  },
  
  // {
  //   title: "Two Story House",
  //   description: "3 Bedroom and 2 Bathroom",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 2, Bathroom: 1, TVLobby: true, Balcony: true },
  //     totalArea: 1450,
  //   },
  //   price: "92 Lacks",
  //   image: img92,
  //   moreImages: [img92, img117, img88],
  // },
  // {
  //   title: "Two Story House",
  //   description: "3 Bedroom and 2 Bathroom",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 2, Bathroom: 1, TVLobby: true, Balcony: true },
  //     totalArea: 1650,
  //   },
  //   price: "117 Lacks",
  //   image: img117,
  //   moreImages: [img117, img92, img88],
  // },
  // {
  //   title: "Two Story House",
  //   description: "3 Bedroom and 2 Bathroom",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 2, Bathroom: 1, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     totalArea: 1850,
  //   },
  //   price: "129 Lacks",
  //   image: img129,
  //   moreImages: [img129, img117, img117],
  // },
  // {
  //   title: "Two Story House",
  //   description: "3 Bedroom and 2 Bathroom",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 2, Bathroom: 1, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     totalArea: 1900,
  //   },
  //   price: "132 Lacks",
  //   image: img132,
  //   moreImages: [img132, img117, img117],
  // },
  // {
  //   title: "Two Story House",
  //   description: "1 Bedroom and 1 Bathroom on Ground Floor, 3 Bedrooms and 1 Bathroom on First Floor",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 3, Bathroom: 1, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     totalArea: 2025,
  //   },
  //   price: "148 Lacks",
  //   image: img148,
  //   moreImages: [img148, img188, img192_1],
  // },
  // {
  //   title: "Two Story House",
  //   description: "1 Bedroom and 1 Bathroom on Ground Floor, 3 Bedrooms and 2 Bathrooms on First Floor",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 3, Bathroom: 2, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     totalArea: 1700,
  //   },
  //   price: "188 Lacks",
  //   image: img188,
  //   moreImages: [img188, img192_1, img198],
  // },
  // {
  //   title: "Two Story House",
  //   description: "2 Bedrooms and 1 Bathroom on Ground Floor, 2 Bedrooms and 2 Bathrooms on First Floor",
  //   details: {
  //     ground: { Bedroom: 2, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 2, Bathroom: 2, TVLobby: true, Balcony: true },
  //     totalArea: 2700,
  //   },
  //   price: "192 Lacks",
  //   image: img192_1,
  //   moreImages: [img192_1, img188, img148],
  // },
  // {
  //   title: "Two Story House",
  //   description: "1 Bedroom and 1 Bathroom on Ground Floor, 3 Bedrooms and 2 Bathrooms on First Floor",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Double" },
  //     first: { Bedroom: 3, Bathroom: 2, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     totalArea: 2600,
  //   },
  //   price: "192 Lacks",
  //   image: img192_2,
  //   moreImages: [img192_2, img188, img148],
  // },
  // {
  //   title: "Two Story House",
  //   description: "1 Bedroom and 1 Bathroom on Ground Floor, 3 Bedrooms and 2 Bathrooms on First Floor",
  //   details: {
  //     ground: { Bedroom: 1, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Double" },
  //     first: { Bedroom: 3, Bathroom: 2, TVLobby: true, Balcony: true },
  //     totalArea: 2600,
  //   },
  //   price: "198 Lacks",
  //   image: img198,
  //   moreImages: [img198, img192_1, img148],
  // },
  // {
  //   title: "Two Story House",
  //   description: "2 Bedrooms and 1 Bathroom on Ground Floor, 3 Bedrooms and 2 Bathrooms on First Floor",
  //   details: {
  //     ground: { Bedroom: 2, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 3, Bathroom: 2, TVLobby: true, Balcony: true },
  //     totalArea: 2800,
  //   },
  //   price: "212 Lacks",
  //   image: img212,
  //   moreImages: [img212, img228, img236],
  // },
  // {
  //   title: "Two Story House",
  //   description: "2 Bedrooms and 1 Bathroom on Ground Floor, 2 Bedrooms and 2 Bathrooms on First Floor",
  //   details: {
  //     ground: { Bedroom: 2, Bathroom: 1, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 2, Bathroom: 2, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     totalArea: 3000,
  //   },
  //   price: "228 Lacks",
  //   image: img228,
  //   moreImages: [img228, img236, img242],
  // },
  // {
  //   title: "Two Story House",
  //   description: "2 Bedrooms and 2 Bathrooms on Ground Floor, 2 Bedrooms and 2 Bathrooms on First Floor, 1 Bedroom on Second Floor",
  //   details: {
  //     ground: { Bedroom: 2, Bathroom: 2, Living: true, Dining: true, Kitchen: true, CarPorch: "Single" },
  //     first: { Bedroom: 2, Bathroom: 2, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     second: { Bedroom: 1 },
  //     totalArea: 3200,
  //   },
  //   price: "236 Lacks",
  //   image: img236,
  //   moreImages: [img236, img242, img228],
  // },
  // {
  //   title: "Two Story House",
  //   description: "2 Bedrooms and 2 Bathrooms on Ground Floor, 2 Bedrooms and 2 Bathrooms on First Floor, 1 Bedroom on Second Floor",
  //   details: {
  //     ground: { Bedroom: 2, Bathroom: 2, Living: true, Dining: true, Kitchen: true, CarPorch: "Double" },
  //     first: { Bedroom: 2, Bathroom: 2, TVLobby: true, Balcony: true, RoofTerrace: true },
  //     second: { Bedroom: 1, OpenArea: true },
  //     totalArea: 3200,
  //   },
  //   price: "242 Lacks",
  //   image: img242,
  //   moreImages: [img242, img236, img228],
  // }

  
];

export default packageData;

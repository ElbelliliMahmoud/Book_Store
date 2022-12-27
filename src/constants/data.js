import images from './images'



const containers = [
  {
    index: 0,
    imgUrl: images.shipping,
    title: "free shipping",
    description: "order over $100",
  },
  {
    index: 1,
    imgUrl: images.payment,
    title: "secure payment",
    description: "100 secure payment",
  },
  {
    index: 2,
    imgUrl: images.retour,
    title: "easy returns",
    description: "10 days returns",
  },
  {
    index: 3,
    imgUrl: images.support,
    title: "24/7 support",
    description: "call us anytime",
  },
];



const reviews = [
  {
    imgUrl: images.pic1,
    name: "Judi M.",
    description: "The store is very nice with a huge inventory of books etc to choose from.",
    date: "September 15, 2022",
    rating: 4.5,
  },
    {
    imgUrl: images.pic2,
    name: "Lee W.",
    description: "Wonderful wonderful store.",
    date: "September 4, 2022",
    rating: 5,
  },
    {
    imgUrl: images.pic3,
    name: "Adrian K.",
    description: "Great place for ur spiritual journey, shopping, and workshops. Tim and his staff are friendly, inviting and I always look forward to going there.",
    date: "August 5, 2022",
    rating: 4.7,
  },
    {
    imgUrl: images.pic4,
    name: "Sarah P.",
    description: "My favorite place to go!! Good energy and helpful staff.",
    date: "July 15, 2022",
    rating: 4.5,
  },
  {
    imgUrl: images.pic5,
    name: "Londa L.",
    description: "Nice store and the people that assisted me were very kind. I would definitely recommend.",
    date: "July 15, 2022",
    rating: 4.5,
  },
  {
    imgUrl: images.pic6,
    name: "Crystal A.",
    description: " Wonderful shop!",
    date: "July 05, 2022",
    rating: 5,
  },
];

export default { books, containers, cards, reviews};
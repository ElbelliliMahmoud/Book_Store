import images from './images'

const books = [
  {
    index: 0,
    imgUrl: images.book1,
  },
  {
    index: 1,
    imgUrl: images.book2,
  },
  {
    index: 2,
    imgUrl: images.book3,
  },
  {
    index: 3,
    imgUrl: images.book4,
  },
  {
    index: 4,
    imgUrl: images.book5,
  },
  {
    index: 5,
    imgUrl: images.book6,
  },
  {
    index: 6,
    imgUrl: images.book7,
  },
  {
    index: 7,
    imgUrl: images.book8,
  },
  {
    index: 8,
    imgUrl: images.book9,
  },
  {
    index: 9,
    imgUrl: images.book10,
  },
];

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

const cards = [
  {
    index: 0,
    imgUrl: images.book1,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 3.5,
  },
  {
    index: 1,
    imgUrl: images.book2,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 4.5,
  },
  {
    index: 2,
    imgUrl: images.book3,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 4,
  },
  {
    index: 3,
    imgUrl: images.book4,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 5,
  },
  {
    index: 4,
    imgUrl: images.book5,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 3.5,
  },
  {
    index: 5,
    imgUrl: images.book6,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 3.5,
  },
  {
    index: 6,
    imgUrl: images.book7,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 3.5,
  },
  {
    index: 7,
    imgUrl: images.book8,
    title: "featured books",
    new_price: "$15.99",
    old_price: "$20.99",
    rating: 3.5,
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
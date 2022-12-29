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

const blocks = [
  {
    index: 0,
    title: "Does Bookly ship to Canada or internationally?",
    info: "Bookly only ships to the US, but we do have Bookshop UK and Bookshop Spain available for those regions. We hope to help support bookstores all over the world in the future.",
  },
  {
    index: 1,
    title: "What do I do if I've received a damaged, incorrect, or otherwise defective order?",
    info: "If you have received damaged, defective, or incorrectly shipped merchandise please contact customer service ",
  },
  {
    index: 2,
    title: "Will Bookly sell audiobooks and or ebooks?",
    info: "We sell audiobooks via an affiliate partnership with Libro.fm. You can see the links on the product page of titles that are carried by them. We are working on an indie-friendly ebook solution.",
  },
  {
    index: 3,
    title: "Do affiliates have to disclose this websites, newsletters or social media posts?",
    info: "Yes. Whenever a link is used on your website that results in a commission, you must disclose this information to site visitors, according to FTC rules. We suggest adding something like: Disclosure: I am an affiliate of Bookly where your purchases support local bookstores. I will earn a commission if you click through and make a purchase.",
  },
];

export default { containers, reviews,  blocks };
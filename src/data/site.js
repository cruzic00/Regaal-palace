export const brand = {
  name: 'Regaal Palace',
  possessive: 'Regaal Palace’s',
  tagline: 'Feel the Regal Touch',
  parent: 'A unit of Chaudhari Hotels & Hospitality',
}

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const contact = {
  phone: '+980 (1234) 567 220',
  phoneShort: '+980 123 4567 890',
  email: 'example@yahoo.com',
  addressLines: ['102/B New Elephant Rd', 'Dhaka - 1212'],
}

export const nav = [
  {
    label: 'Home',
    to: '/',
    
  },
  { label: 'About', to: '/about' },
  {
    label: 'Rooms',
    to: '/rooms',
    children: [
      { label: 'All Rooms', to: '/rooms' },
      { label: 'Business Class', to: '/rooms/double-suite-rooms' },
      { label: 'Executive Class', to: '/rooms/delux-family-rooms' },
      { label: 'Family Rooms', to: '/rooms/presidential-villa' },
    ],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export const slides = [
  {
    headline: 'Elegant stays. Effortless experiences.',
    subline: 'Where Business Meets Comfort.',
    image: '/images/banner-1.jpeg',
  },
  {
    headline: 'Designed for business, perfected for comfort.',
    subline: 'Your Corporate Address in Jalgaon.',
    image: '/images/banner-2.jpeg',
  },
  {
    headline: 'Stay Smart. Meet Better. Experience Regaal.',
    subline: 'The preferred choice for today’s business traveller.',
    image: '/images/banner-3.jpeg',
  },
  {
    headline: 'Business Hospitality, Redefined.',
    subline: 'Premium comfort. Professional service. Memorable stays.',
    image: '/images/banner-4.jpeg',
  },
]

export const rooms = [
  {
    slug: 'double-suite-rooms',
    name: 'Business Class',
    category: 'Premium room',
    price: 560,
    size: '1500 SQ.FT/Rooms',
    beds: '2 King Bed',
    guests: '3 Adults, 1 Child',
    image: '/images/business-class.jpeg',
    blurb:
      'A softly lit corner suite with a private balcony, deep soaking tub and a view that runs all the way to the water line.',
  },
  {
    slug: 'delux-family-rooms',
    name: 'Executive Class',
    category: 'Luxury room',
    price: 560,
    size: '1500 SQ.FT/Rooms',
    beds: '2 King Bed',
    guests: '4 Adults, 2 Children',
    image: '/images/executive-class.jpeg',
    blurb:
      'Two connected chambers built for families who travel together but still want a door between them at night.',
  },
  {
    slug: 'suprior-bed-rooms',
    name: 'Family Rooms',
    category: 'Deluxe Room',
    price: 560,
    size: '1500 SQ.FT/Rooms',
    beds: '2 King Bed',
    guests: '2 Adults',
    image: '/images/family-rooms.jpeg',
    blurb:
      'Warm oak, linen drapes and a writing desk facing the garden — our quietest rooms, tucked into the east wing.',
  },
  
  
]

export const amenities = [
  'Room Services',
  'Wi-Fi Internet',
  'Smart Key',
  'Breakfast',
  'Restaurant',
  'Room Service',
]

export const facilities = [
  
  {
    no: '01',
    tag: 'Foods',
    title: 'The Restaurant Center',
    image: '/images/resturent1.jpeg',
  },
  {
    no: '02',
    tag: 'Experience',
    title: 'Rooftop Family Restaurant  ',
    image: '/images/skyroof.jpeg',
  },
  {
    no: '03',
    tag: 'Experience',
    title: 'Corporate Meetings  ',
    image: '/images/meeting.jpeg',
  },
  {
    no: '04',
    tag: 'Experience',
    title: 'Weddings ',
    image: '/images/weddings.jpeg',
  },
]

export const facilityBlurb =
  'Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone'

export const offers = [
  { discount: '25% off', name: 'Premium room', image: '/images/business-class.jpeg',  },
  { discount: '24% off', name: 'Luxury room', image: '/images/executive-class.jpeg', },
  { discount: '26% off', name: 'Deluxe Room', image: '/images/family-rooms.jpeg',  },
  
]

export const testimonials = [
  {
    quote:
      'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
    name: 'Marina Trange',
    role: 'Manger',
    avatar: img('1494790108377-be9c29b29330', 200),
  },
  {
    quote:
      'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
    name: 'John D. Alexon',
    role: 'Manger',
    avatar: img('1500648767791-00dcc994a43e', 200),
  },
  {
    quote:
      'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
    name: 'Brandon Mack',
    role: 'Manger',
    avatar: img('1507003211169-0a1dd7228f2d', 200),
  },
]

export const posts = [
  {
    date: 'August 10, 2023',
    category: 'Interior',
    title: 'Luxury Hotel for Traveling Spot USA, California',
    image: img('1445019980597-93fa8acb246c', 900),
  },
  {
    date: 'August 10, 2023',
    category: 'Interior',
    title: 'Luxury Hotel for Traveling Spot USA, California',
    image: img('1551218808-94e220e084d2', 900),
  },
  {
    date: 'August 10, 2023',
    category: 'Interior',
    title: 'Luxury Hotel for Traveling Spot USA, California',
    image: img('1517248135467-4c7edcad34c4', 900),
  },
]

export const gallery = [
  img('1566073771259-6a8506099945', 400),
  img('1571896349842-33c89424de2d', 400),
  img('1582719478250-c89cae4dc85b', 400),
  img('1534438327276-14e5300c3a48', 400),
  img('1590490360182-c33d57733427', 400),
  img('1414235077428-338989a2e8c0', 400),
]

export const usefulLinks = [
  'About Hotel',
  'Rooms & Suites',
  'Reservations',
  'News & Blogs',
  'Contact Us',
]

export const manager = {
  name: 'John D. Alexon',
  role: 'Manger',
  avatar: img('1500648767791-00dcc994a43e', 200),
  quote:
    'Model. Appropriately create interactive infrastructures after main Holisticly facilitate stand-alone inframe of the world',
  body: 'Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after main Holisticly facilitate stand-alone inframe',
  image: '/images/back1.jpeg',
}

export const lead =
  'Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling'

// Placeholder staff — swap names, roles and photos for the real team. Drop
// portraits in public/images/ (no # or spaces in the filename) and point
// `photo` at them, e.g. '/images/gm.jpeg'.
export const team = [
  {
    name: 'Rajesh Chaudhari',
    role: 'General Manager',
    photo: img('1560250097-0b93528c311a', 600),
  },
  {
    name: 'Priya Sharma',
    role: 'Front Office Manager',
    photo: img('1573497019940-1c28c88b4f3e', 600),
  },
  {
    name: 'Amit Verma',
    role: 'Executive Chef',
    photo: img('1583864697784-a0efc8379f70', 600),
  },
  {
    name: 'Sneha Patil',
    role: 'Guest Relations Manager',
    photo: img('1580489944761-15a19d654956', 600),
  },
]

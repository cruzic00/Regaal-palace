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
    children: [
      { label: 'Home 01', to: '/' },
      { label: 'Home 02', to: '/' },
    ],
  },
  { label: 'About', to: '/about' },
  {
    label: 'Rooms',
    to: '/rooms',
    children: [
      { label: 'All Rooms', to: '/rooms' },
      { label: 'Double Suite Rooms', to: '/rooms/double-suite-rooms' },
      { label: 'Delux Family Rooms', to: '/rooms/delux-family-rooms' },
      { label: 'Presidential Villa', to: '/rooms/presidential-villa' },
    ],
  },
  {
    label: 'Blog',
    to: '/blog',
    children: [
      { label: 'Blog Grid', to: '/blog' },
      { label: 'Blog Details', to: '/blog' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const slides = [
  {
    place: 'IN CALIFORNIA',
    image: img('1566073771259-6a8506099945'),
  },
  {
    place: 'IN KASHMIR',
    image: img('1540541338287-41700207dee6'),
  },
  {
    place: 'IN COLOSSEUM',
    image: img('1584132967334-10e028bd69f7'),
  },
  {
    place: 'IN SRILANKA',
    image: img('1582719478250-c89cae4dc85b'),
  },
]

export const rooms = [
  {
    slug: 'double-suite-rooms',
    name: 'Double Suite Rooms',
    price: 560,
    size: '1500 SQ.FT/Rooms',
    beds: '2 King Bed',
    guests: '3 Adults, 1 Child',
    image: img('1590490360182-c33d57733427'),
    blurb:
      'A softly lit corner suite with a private balcony, deep soaking tub and a view that runs all the way to the water line.',
  },
  {
    slug: 'delux-family-rooms',
    name: 'Delux Family Rooms',
    price: 560,
    size: '1500 SQ.FT/Rooms',
    beds: '2 King Bed',
    guests: '4 Adults, 2 Children',
    image: img('1611892440504-42a792e24d32'),
    blurb:
      'Two connected chambers built for families who travel together but still want a door between them at night.',
  },
  {
    slug: 'suprior-bed-rooms',
    name: 'Suprior Bed Rooms',
    price: 560,
    size: '1500 SQ.FT/Rooms',
    beds: '2 King Bed',
    guests: '2 Adults',
    image: img('1618773928121-c32242e63f39'),
    blurb:
      'Warm oak, linen drapes and a writing desk facing the garden — our quietest rooms, tucked into the east wing.',
  },
  {
    slug: 'junior-suite-room',
    name: 'Junior Suite Room',
    price: 480,
    size: '1200 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '2 Adults',
    image: img('1631049307264-da0ec9d70304'),
    blurb:
      'Compact luxury for the short stay — everything you need, nothing you do not, finished to the same standard.',
  },
  {
    slug: 'presidential-villa',
    name: 'Presidential Villa',
    price: 1240,
    size: '2600 SQ.FT/Rooms',
    beds: '2 King Bed',
    guests: '6 Adults',
    image: img('1596394516093-501ba68a0ba6'),
    blurb:
      'Private pool, dedicated butler and a terrace that catches both the sunrise and the last of the evening light.',
  },
  {
    slug: 'garden-terrace-room',
    name: 'Garden Terrace Room',
    price: 620,
    size: '1400 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '2 Adults, 1 Child',
    image: img('1571896349842-33c89424de2d'),
    blurb:
      'Ground floor, opening straight onto the walled garden — step out of bed and into the frangipani.',
  },
]

export const amenities = [
  'Room Services',
  'Wi-Fi Internet',
  'Smart Key',
  'Breakfast',
  'Swimming Pool',
  'Room Service',
]

export const facilities = [
  {
    no: '01',
    tag: 'Fitness',
    title: 'Gym Training Grounds',
    image: img('1534438327276-14e5300c3a48'),
  },
  {
    no: '02',
    tag: 'Fitness',
    title: 'Indoor Swimming Pool',
    image: img('1578683010236-d716f9a3f461'),
  },
  {
    no: '03',
    tag: 'Foods',
    title: 'The Restaurant Center',
    image: img('1414235077428-338989a2e8c0'),
  },
  {
    no: '04',
    tag: 'Experience',
    title: 'Rooftop Sunset Lounge',
    image: img('1445019980597-93fa8acb246c'),
  },
]

export const facilityBlurb =
  'Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone'

export const offers = [
  { discount: '25% off', name: 'Delux Family Rooms', image: img('1611892440504-42a792e24d32', 900) },
  { discount: '24% off', name: 'Double Suite Rooms', image: img('1590490360182-c33d57733427', 900) },
  { discount: '26% off', name: 'Suprior Bed Room', image: img('1618773928121-c32242e63f39', 900) },
  { discount: '22% off', name: 'Junior Suite Room', image: img('1631049307264-da0ec9d70304', 900) },
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
  image: img('1445019980597-93fa8acb246c'),
}

export const lead =
  'Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling'

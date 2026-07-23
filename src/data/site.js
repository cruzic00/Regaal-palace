export const brand = {
  name: 'Regaal Palace',
  possessive: 'Regaal Palace’s',
  tagline: 'Feel the Regal Touch',
  parent: 'A unit of Chaudhari Hotels & Hospitality',
}

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const contact = {
  phone: '0256 2222424',
  phoneShort: '+980 123 4567 890',
  email: ' info@regaalpalace.com',
  addressLines: ['Plot No 324/2 Sugan Heights Teresvar Navin Bus Stand Javal, Jilha Peth, Jalgaon, Maharashtra 425001'],
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
    price: 2499,
    size: '284 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '3 Adults, 1 Child',
    image: '/images/business-class.jpeg',
    blurb:
      'A softly lit corner suite with a private balcony, deep soaking tub and a view that runs all the way to the water line.',
  },
  {
    slug: 'delux-family-rooms',
    name: 'Executive Class',
    category: 'Luxury room',
    price: 2799,
    size: '336 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '4 Adults, 2 Children',
    image: '/images/executive-class.jpeg',
    blurb:
      'Two connected chambers built for families who travel together but still want a door between them at night.',
  },
  {
    slug: 'suprior-bed-rooms',
    name: 'Family Rooms',
    category: 'Deluxe Room',
    price: 3099,
    size: '350 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '2 Adults',
    image: '/images/family-rooms.jpeg',
    blurb:
      'Warm oak, linen drapes and a writing desk facing the garden — our quietest rooms, tucked into the east wing.',
  },
  
  
]

export const amenities = [
  'Room Services',
  'Wi-Fi Internet',
  'GYM',
  'Breakfast',
  'Restaurant',
  'Room Service',
]

export const facilities = [
  
  {
    no: '01',
    tag: 'Food',
    title: 'The Restaurant Center',
    image: '/images/resturent1.jpeg',
  },
  {
    no: '02',
    tag: 'Experience',
    title: 'Rooftop Family Restaurant  ',
    image: '/images/skyroof.jpeg',
    focus: '50% 70%',
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
  'Savour an exquisite culinary experience at Regaal Palace, featuring delectable cuisine, elegant dining, and impeccable service.'

export const offers = [
  { discount: '25% off', name: 'Premium room', image: '/images/business-class.jpeg',  },
  { discount: '24% off', name: 'Luxury room', image: '/images/executive-class.jpeg', },
  { discount: '26% off', name: 'Deluxe Room', image: '/images/family-rooms.jpeg',  },
  
]

export const testimonials = [
  {
    quote:
      'I must say it was a great experience. The hotel is centrally located, making it convenient for exploring the city. The staff was incredibly helpful, and I was particularly impressed by the cooperation of the hotel manager, Mr. Dipak Mandal Ji. The property itself is well-maintained and provides a comfortable and pleasant stay. I would highly recommend this hotel to anyone visiting Jalgaon.',
    name: 'Vaibhav Khande',
    role: '',
    avatar: "/images/comment3.jpg",
  },
  {
    quote:
      'New Regal Palace is a very good hotel in Jalgaon. Room service is excellent. Food is also tasty. The staff behavior is friendly and they are quick in their service. Highly recommended.',
    name: 'SHIVAPRASAD REWALE',
    role: '',
    avatar: '/images/comment2.jpg',
  },
  {
    quote:
      'Best hotel for corporate visits, near to main bus stand of jalgaon. large size beds and rooms. Rooftop restaurant and best for family dining as well as with friends',
    name: 'Deepak Mittal',
    role: '',
    avatar:'/images/comment1.jpg' ,
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
  '/images/banner-1.jpeg',
  '/images/business-class.jpeg',
  '/images/skyroof.jpeg',
  '/images/meeting.jpeg',
  '/images/executive-class.jpeg',
  '/images/resturent1.jpeg',
  '/images/family-rooms.jpeg',
  '/images/weddings.jpeg',
  '/images/room-1.jpeg',
]

export const usefulLinks = [
  'About Hotel',
  'Rooms & Suites',
  'Reservations',
  'News & Blogs',
  'Contact Us',
]

export const departmentEmails = [
  { label: 'Room Booking', email: 'reservations@regaalpalace.com' },
  { label: 'Banquet / Events', email: 'events@regaalpalace.com' },
  { label: 'Corporate Bookings / Sales', email: 'sales@regaalpalace.com' },
  { label: 'Careers', email: 'hr@regaalpalace.com' },
  { label: 'Complaints / Feedback', email: 'complaints@regaalpalace.com' },
]

export const manager = {
  name: 'Arindam Roy Chowdhury',
  role: 'Group General Manager',
  avatar: '/images/manager1.jpeg',
  quote:
    '“Regaal Palace Jalgaon delivers an elevated hospitality experience, blending refined comfort, impeccable service, and contemporary amenities for both corporate and leisure travellers.”',
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

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
      { label: 'Business Suite', to: '/rooms/double-suite-rooms' },
      { label: 'Executive Suite', to: '/rooms/delux-family-rooms' },
      { label: 'Premium Family Executive Room', to: '/rooms/suprior-bed-rooms' },
      { label: 'Premium Executive Suite Room', to: '/rooms/presidential-villa' },
    ],
  },
  { label: 'Corporate Stays', to: '/corporate-stays' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export const slides = [
  {
    headline: 'Your Business Address in Jalgaon.',
    subline: 'Comfortable stays, thoughtful hospitality and business-friendly convenience at The Regaal.',
    image: '/images/banner-1.jpeg',
  },
  {
    headline: 'Your Business Address in Jalgaon.',
    subline: 'Comfortable stays, thoughtful hospitality and business-friendly convenience at The Regaal.',
    image: '/images/banner-2.jpeg',
  },
  {
    headline: 'Your Business Address in Jalgaon.',
    subline: 'Comfortable stays, thoughtful hospitality and business-friendly convenience at The Regaal.',
    image: '/images/banner-3.jpeg',
  },
  {
    headline: 'Your Business Address in Jalgaon.',
    subline: 'Comfortable stays, thoughtful hospitality and business-friendly convenience at The Regaal.',
    image: '/images/banner-4.jpeg',
  },
]

export const rooms = [
  {
    slug: 'double-suite-rooms',
    name: 'Business Suite',
    category: '',
    price: 3200,
    size: '280 SQ.FT/Rooms',
    beds: '2 Single Beds',
    guests: '3 Adults, 1 Child',
    image: '/images/business-class2.jpeg',
    blurb:
      'A softly lit corner suite with a private balcony, deep soaking tub and a view that runs all the way to the water line.',
    details:
      'The room measures 280 sq. ft. (25 sq. mt.) and features 2 Single Beds, City View, and 1 Bathroom. Room amenities include Laundry Service, Air Conditioning, Housekeeping, Wi-Fi, and Bathroom. Room features include a Telephone, Charging Points, Closet, Chair, and Centre Table. Beds and blankets include a Blanket. Media and entertainment facilities include a TV. Bathroom amenities include Towels, Geyser/Water Heater, Western Toilet Seat, Hot & Cold Water, and Toiletries. Other facilities include a Fan.',
  },
  {
    slug: 'delux-family-rooms',
    name: 'Executive Suite',
    category: '',
    price: 3500,
    size: '320 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '3 Adults, 1 Children',
    image: '/images/executive-class.jpeg',
    blurb:
      'A spacious executive suite offering contemporary design, working desk area, and luxury amenities for business travelers.',
    details:
      'The room measures 320 sq. ft. (31 sq. mt.) and features 1 King Bed, City View, and 1 Bathroom. Room amenities include Mineral Water, Laundry Service, Air Conditioning, Housekeeping, Wi-Fi, Bathroom, Room Service, and Smoking Room. Room features include a Telephone. Beds and blankets include a Blanket. Media and entertainment facilities include a TV. Bathroom amenities include a Dental Kit, Towels, Geyser/Water Heater, Toiletries, Western Toilet Seat, and Hot & Cold Water. Other facilities include a Newspaper.',
  },
  {
    slug: 'suprior-bed-rooms',
    name: 'Premium Family Executive Room',
    category: '',
    price: 4000,
    size: '320 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '4 Adults, 1 Child',
    image: '/images/family-rooms.jpeg',
    blurb:
      'Designed for family comfort with ample living space, cozy king bed, and modern entertainment setup.',
    details:
      'The room measures 320 sq. ft. (33 sq. mt.) and features 1 King Bed, City View, and 1 Bathroom. Room amenities include Mineral Water, Laundry Service, Air Conditioning, Housekeeping, and Wi-Fi. Room features include a Telephone and Sofa. Beds and blankets include a Blanket. Media and entertainment facilities include a TV. Bathroom amenities include a Dental Kit, Towels, Geyser/Water Heater, Toiletries, and Hot & Cold Water. Other facilities include a Newspaper.',
  },
  {
    slug: 'presidential-villa',
    name: 'Premium Executive Suite Room ',
    category: '',
    price: 4500,
    size: '320 SQ.FT/Rooms',
    beds: '1 Super King Bed',
    guests: '4 Adults, 2 Children',
    image: '/images/room-1.jpeg',
    blurb:
      'An expansive, luxurious suite featuring premium furnishing, city skyline view, private dining area, and dedicated butler service.',
    details:
      'The room measures 320 sq. ft. (45 sq. mt.) and features 1 Super King Bed, City View, and 1 Luxury Bathroom. Room amenities include Mineral Water, Laundry Service, Air Conditioning, Housekeeping, High-Speed Wi-Fi, Bathroom, Room Service, and Mini Bar.',
  },
  ]

export const amenities = [
  'Room Services',
  'Wi-Fi Internet',
  'Laundry Service',
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
    blurb:
      'Dine under the open sky at Regaal Palace’s rooftop family restaurant, offering delicious cuisine and a vibrant ambience for memorable evenings.',
  },
  {
    no: '03',
    tag: 'Experience',
    title: 'Corporate Meetings  ',
    image: '/images/meeting.jpeg',
    blurb:'Our corporate meeting hall offers a professional, well-equipped setting for productive meetings, conferences, and business events.',
  },
  {
    no: '04',
    tag: 'Experience',
    title: 'Weddings ',
    image: '/images/weddings.jpeg',
    blurb:"Celebrate your special day in our elegant wedding banquets, offering a beautiful setting, exquisite hospitality, and unforgettable memories.",
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
  { label: 'About Hotel', to: '/about' },
  { label: 'Rooms & Suites', to: '/rooms' },
  { label: 'Reservations', to: '/rooms' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
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
    name: 'Tushar Chaudhari',
    role: 'Managing Director',
    focus: 'Business strategy',
    photo: '/images/tushar.jpeg',
  },
  {
    name: 'Nandu Chaudhari',
    role: 'Managing Director',
    focus: 'Growth and Expansion',
    photo: '/images/nandhu.jpeg',
  },
  {
    name: 'Sunil Chaudhari',
    role: 'Operations head',
    focus: 'day to day operations, inventory management',
    photo: '/images/sunil .jpeg',
  },
  {
    name: 'Vinod Chaudhari',
    role: 'Managing Director',
     focus: 'Business strategy',
    photo: '/images/vinod.jpeg',
  },
  {
    name: 'Arindam Roy Chowdhury',
    role: 'Corporate General Manager',
    focus: 'Operations & Business Development',
    photo: '/images/arindam.jpeg',
  },
  {
    name: 'Dipak Mandal',
    role: 'Head of Sales',
    photo: '/images/dipak.jpeg',
  },
  
]

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
    size: '264 SQ.FT/Rooms',
    beds: '2 Single Beds',
    guests: '3 Adults, 1 Child',
    image: '/images/business-class2.jpeg',
    blurb:
      'A softly lit corner suite with a private balcony, deep soaking tub and a view that runs all the way to the water line.',
    details:
      'The room measures 264 sq. ft. (25 sq. mt.) and features 2 Single Beds, City View, and 1 Bathroom. Room amenities include Laundry Service, Air Conditioning, Housekeeping, Wi-Fi, and Bathroom. Room features include a Telephone, Charging Points, Closet, Chair, and Centre Table. Beds and blankets include a Blanket. Media and entertainment facilities include a TV. Bathroom amenities include Towels, Geyser/Water Heater, Western Toilet Seat, Hot & Cold Water, and Toiletries. Other facilities include a Fan.',
  },
  {
    slug: 'delux-family-rooms',
    name: 'Executive Class',
    category: 'Luxury room',
    price: 2799,
    size: '336 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '3 Adults, 1 Children',
    image: '/images/executive-class.jpeg',
    blurb:
      '',
    details:
      'The room measures 336 sq. ft. (31 sq. mt.) and features 1 King Bed, City View, and 1 Bathroom. Room amenities include Mineral Water, Laundry Service, Air Conditioning, Housekeeping, Wi-Fi, Bathroom, Room Service, and Smoking Room. Room features include a Telephone. Beds and blankets include a Blanket. Media and entertainment facilities include a TV. Bathroom amenities include a Dental Kit, Towels, Geyser/Water Heater, Toiletries, Western Toilet Seat, and Hot & Cold Water. Other facilities include a Newspaper.',
  },
  {
    slug: 'suprior-bed-rooms',
    name: 'Family Rooms',
    category: 'Deluxe Room',
    price: 3099,
    size: '350 SQ.FT/Rooms',
    beds: '1 King Bed',
    guests: '4 Adults, 1 Child',
    image: '/images/family-rooms.jpeg',
    blurb:
      '',
      details:
        'The room measures *350 sq. ft. (33 sq. mt.)* and features *1 King Bed, City View, and 1 Bathroom. Room amenities include **Mineral Water, Laundry Service, Air Conditioning, Housekeeping, and Wi-Fi. Room features include a **Telephone and Sofa. Beds and blankets include a **Blanket. Media and entertainment facilities include a **TV. Bathroom amenities include a **Dental Kit, Towels, Geyser/Water Heater, Toiletries, and Hot & Cold Water. Other facilities include a **Newspaper*.'
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
    photo: '/images/unkownicon.jpg',
  },
  {
    name: 'Jayesh Chaudhari',
    role: 'Managing Director',
    photo: '/images/unkownicon.jpg',
  },
  {
    name: 'Nandu Chaudhari',
    role: 'Managing Director',
    focus: 'Growth and Expansion',
    photo: '/images/nandhu.jpeg',
  },
  {
    name: 'Sunil Chaudhari',
    role: 'Head of Operations',
    photo: '/images/unkownicon.jpg',
  },
  {
    name: 'Vinod Chaudhari',
    role: 'Managing Director',
     focus: 'Business strategy',
    photo: '/images/vinod.jpeg',
  },
  {
    name: 'Arindam Roy Chowdhury',
    role: 'Group General Manager',
    photo: '/images/unkownicon.jpg',
  },
  {
    name: 'Dipak Mandal',
    role: 'Head of Sales',
    photo: '/images/unkownicon.jpg',
  },
  
]

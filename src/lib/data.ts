import { Plane, Bus, Train, Hotel, Globe, MapPin, Luggage, Shield, CreditCard, HeadphonesIcon, Palmtree, Mountain, Heart, Users, Compass, Umbrella } from "lucide-react";

export const services = [
  { id: 1, title: "Tours & Travels", description: "Curated domestic and international tour packages tailored to your preferences and budget.", icon: MapPin },
  { id: 2, title: "Air Ticket Booking", description: "Best deals on domestic and international flights with all major airlines worldwide.", icon: Plane },
  { id: 3, title: "Bus Booking", description: "Comfortable bus travel across all major routes with premium operators and best fares.", icon: Bus },
  { id: 4, title: "Train Booking", description: "Hassle-free train ticket reservations for all classes and routes across India.", icon: Train },
  { id: 5, title: "Visa Services", description: "Expert visa assistance for all countries with high approval rates and quick processing.", icon: Globe },
  { id: 6, title: "Hotel Booking", description: "Handpicked hotels from budget to luxury at the best guaranteed rates worldwide.", icon: Hotel },
  { id: 7, title: "Holiday Packages", description: "All-inclusive holiday packages for families, couples, and groups with complete itineraries.", icon: Luggage },
  { id: 8, title: "Travel Insurance", description: "Comprehensive travel insurance for worry-free journeys worldwide with instant coverage.", icon: Shield },
  { id: 9, title: "Forex Services", description: "Competitive foreign exchange rates and travel cards for your international trips.", icon: CreditCard },
  { id: 10, title: "24/7 Support", description: "Round-the-clock customer support throughout your travel journey, before, during and after.", icon: HeadphonesIcon },
];

export const experiences = [
  { id: 1, title: "Beach Getaways", icon: Palmtree, description: "Sun, sand and sea" },
  { id: 2, title: "Mountain Retreats", icon: Mountain, description: "Escape to the hills" },
  { id: 3, title: "Romantic Escapes", icon: Heart, description: "Honeymoon specials" },
  { id: 4, title: "Family Vacations", icon: Users, description: "Fun for all ages" },
  { id: 5, title: "Adventure Tours", icon: Compass, description: "Thrill seekers" },
  { id: 6, title: "Cultural Experiences", icon: Umbrella, description: "Heritage & culture" },
];

export const topDestinations = [
  { id: 1, name: "Kashmir", image: "kashmir", tagline: "Paradise on Earth" },
  { id: 2, name: "Kerala", image: "kerala", tagline: "God's Own Country" },
  { id: 3, name: "Goa", image: "goa", tagline: "Beach Paradise" },
  { id: 4, name: "Dubai", image: "dubai", tagline: "City of Gold" },
  { id: 5, name: "Bali", image: "bali", tagline: "Island of Gods" },
  { id: 6, name: "Maldives", image: "maldives", tagline: "Tropical Bliss" },
  { id: 7, name: "Singapore", image: "singapore", tagline: "Lion City" },
  { id: 8, name: "Thailand", image: "thailand", tagline: "Land of Smiles" },
  { id: 9, name: "Switzerland", image: "switzerland", tagline: "Alpine Wonderland" },
  { id: 10, name: "Greece", image: "greece", tagline: "Aegean Beauty" },
  { id: 11, name: "Paris", image: "paris", tagline: "City of Love" },
  { id: 12, name: "India", image: "india", tagline: "Incredible India" },
];

export const domesticPackages = [
  { id: 1, title: "Heavenly Kashmir", destination: "Srinagar, Gulmarg, Pahalgam", duration: "6 Days / 5 Nights", price: "₹18,999", image: "kashmir", highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Pahalgam Valley"] },
  { id: 2, title: "God's Own Country", destination: "Munnar, Thekkady, Alleppey", duration: "5 Days / 4 Nights", price: "₹14,999", image: "kerala", highlights: ["Tea Plantations", "Houseboat Stay", "Spice Garden"] },
  { id: 3, title: "Golden Triangle Tour", destination: "Delhi, Agra, Jaipur", duration: "5 Days / 4 Nights", price: "₹12,999", image: "india", highlights: ["Taj Mahal", "Amber Fort", "Red Fort"] },
  { id: 4, title: "Goa Beach Holiday", destination: "North Goa, South Goa", duration: "4 Days / 3 Nights", price: "₹9,999", image: "goa", highlights: ["Beach Parties", "Water Sports", "Old Goa Churches"] },
];

export const internationalPackages = [
  { id: 5, title: "Dubai Luxury Tour", destination: "Dubai, Abu Dhabi", duration: "5 Days / 4 Nights", price: "₹55,999", image: "dubai", highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"] },
  { id: 6, title: "Bali Paradise", destination: "Ubud, Seminyak, Nusa Dua", duration: "6 Days / 5 Nights", price: "₹45,999", image: "bali", highlights: ["Rice Terraces", "Temple Tours", "Beach Clubs"] },
  { id: 7, title: "Maldives Honeymoon", destination: "Malé, Resort Island", duration: "5 Days / 4 Nights", price: "₹75,999", image: "maldives", highlights: ["Overwater Villa", "Snorkeling", "Sunset Cruise"] },
  { id: 8, title: "Singapore Delight", destination: "Singapore, Sentosa", duration: "5 Days / 4 Nights", price: "₹49,999", image: "singapore", highlights: ["Marina Bay", "Universal Studios", "Gardens by the Bay"] },
  { id: 9, title: "Thailand Explorer", destination: "Bangkok, Pattaya, Phuket", duration: "7 Days / 6 Nights", price: "₹35,999", image: "thailand", highlights: ["Grand Palace", "Phi Phi Islands", "Floating Market"] },
  { id: 10, title: "Santorini Escape", destination: "Athens, Santorini, Mykonos", duration: "8 Days / 7 Nights", price: "₹1,29,999", image: "greece", highlights: ["Blue Domes", "Wine Tasting", "Island Hopping"] },
  { id: 11, title: "Swiss Alps Adventure", destination: "Zurich, Interlaken, Lucerne", duration: "7 Days / 6 Nights", price: "₹1,49,999", image: "switzerland", highlights: ["Jungfraujoch", "Lake Lucerne", "Swiss Trains"] },
  { id: 12, title: "Romantic Paris", destination: "Paris, Versailles", duration: "5 Days / 4 Nights", price: "₹89,999", image: "paris", highlights: ["Eiffel Tower", "Louvre Museum", "Seine Cruise"] },
];

export const testimonials = [
  { id: 1, name: "Rahul Sharma", location: "Mumbai", text: "Sandis Tours made our Bali trip absolutely magical. Every detail was perfectly planned — from the airport pickup to the hotel, everything was seamless. Highly recommended for hassle-free travel!", rating: 5 },
  { id: 2, name: "Priya Patel", location: "Delhi", text: "The visa assistance was incredible. Got my Schengen visa approved in just 10 days. The team guided me through every document and kept me updated throughout. Amazing service!", rating: 5 },
  { id: 3, name: "Amit & Neha", location: "Bangalore", text: "Our honeymoon in Maldives was a dream come true. The overwater villa they booked was stunning and the surprise arrangements were so thoughtful. Thank you Sandis Tours!", rating: 5 },
  { id: 4, name: "Sunita Verma", location: "Pune", text: "Best travel agency I've ever worked with. Booked our family trip to Kerala and everything was perfect. The houseboat experience was unforgettable. Professional, responsive, and great value!", rating: 5 },
  { id: 5, name: "Vikram Joshi", location: "Hyderabad", text: "Planned our corporate retreat through Sandis Tours. The team handled 50+ people flawlessly. Hotels, transport, activities — everything was top-notch. Will definitely use them again!", rating: 5 },
  { id: 6, name: "Meera Reddy", location: "Chennai", text: "The Switzerland trip they organized was beyond expectations. Every train, every hotel, every excursion was perfectly timed. It felt like a luxury experience at a very reasonable price.", rating: 5 },
];

export const whyChooseUs = [
  { title: "10+ Years Experience", description: "Trusted by 10,000+ happy travellers across India with expertise in 50+ destinations worldwide." },
  { title: "Best Price Guarantee", description: "We match or beat any comparable travel package price. Get the best value for your money." },
  { title: "24/7 Customer Support", description: "Round-the-clock assistance before, during, and after your trip. We're always just a call away." },
  { title: "Handpicked Hotels", description: "Only the finest accommodations curated for your comfort, from budget-friendly to luxury stays." },
  { title: "Expert Visa Assistance", description: "95%+ success rate with personalized visa guidance for all countries including Schengen, USA, UK." },
  { title: "Customized Itineraries", description: "Every trip tailored to your preferences, pace, and budget. No cookie-cutter packages." },
];

export const heroSlides = [
  {
    title: "Create Memories That Last Forever",
    subtitle: "Let us help make every vacation experience unforgettable",
    cta: "Plan Your Holiday",
    image: "hero-bg",
  },
  {
    title: "Building Bonds & Family Memories",
    subtitle: "Curated, customized holiday plans designed for your family",
    cta: "Family Packages",
    image: "hero-slide-3",
  },
];

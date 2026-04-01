import { Plane, Bus, Train, Hotel, Globe, MapPin, Luggage, Shield, CreditCard, HeadphonesIcon, Palmtree, Mountain, Heart, Users, Compass, Umbrella } from "lucide-react";

export type TravelPackage = {
  id: number;
  slug: string;
  type: "domestic" | "international";
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  overview: string;
  itinerary: { day: string; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  stay: string;
  transfers: string;
  bestTime: string;
  idealFor: string[];
  notes: string[];
};

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

export const domesticPackages: TravelPackage[] = [
  {
    id: 1,
    slug: "heavenly-kashmir",
    type: "domestic",
    title: "Heavenly Kashmir",
    destination: "Srinagar, Gulmarg, Pahalgam",
    duration: "6 Days / 5 Nights",
    price: "₹18,999",
    image: "kashmir",
    highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Pahalgam Valley"],
    overview: "Explore the postcard-perfect valleys of Kashmir with tranquil lakes, alpine meadows, and charming local bazaars. This classic circuit blends nature, culture, and comfort with a relaxed pace.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Srinagar", description: "Airport pickup, check-in at houseboat or hotel, evening shikara ride on Dal Lake." },
      { day: "Day 2", title: "Srinagar Local", description: "Visit Mughal Gardens, Shankaracharya Temple, and explore the old city markets." },
      { day: "Day 3", title: "Gulmarg Excursion", description: "Full day in Gulmarg with optional Gondola ride and snow activities (seasonal)." },
      { day: "Day 4", title: "Pahalgam Transfer", description: "Drive to Pahalgam, scenic stops en route, leisure walk by Lidder River." },
      { day: "Day 5", title: "Pahalgam Sightseeing", description: "Visit Aru Valley and Betaab Valley, evening at leisure." },
      { day: "Day 6", title: "Departure", description: "Transfer to Srinagar airport with fond memories." },
    ],
    inclusions: ["Daily breakfast", "Private AC transfers", "Houseboat or hotel stay", "Local sightseeing as per itinerary", "All tolls and parking"],
    exclusions: ["Air/Train fare", "Gondola tickets", "Personal expenses", "Meals not mentioned", "Travel insurance"],
    stay: "3-star hotels or traditional houseboat stay with breakfast.",
    transfers: "Private AC vehicle for all transfers and sightseeing.",
    bestTime: "March to October for green valleys, December to February for snow.",
    idealFor: ["Families", "Couples", "Nature lovers"],
    notes: ["Gondola tickets are subject to availability.", "Itinerary can be customized for more snow activities."]
  },
  {
    id: 2,
    slug: "gods-own-country",
    type: "domestic",
    title: "God's Own Country",
    destination: "Munnar, Thekkady, Alleppey",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    image: "kerala",
    highlights: ["Tea Plantations", "Houseboat Stay", "Spice Garden"],
    overview: "A signature Kerala journey across misty hills, wildlife-rich forests, and serene backwaters. Perfect for a slow, scenic escape with authentic local flavors.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Munnar", description: "Drive through tea estates, check-in, evening at leisure." },
      { day: "Day 2", title: "Munnar Sightseeing", description: "Visit Tea Museum, Mattupetty Dam, and Echo Point." },
      { day: "Day 3", title: "Munnar to Thekkady", description: "Transfer to Thekkady, spice plantation tour, optional cultural show." },
      { day: "Day 4", title: "Alleppey Houseboat", description: "Drive to Alleppey, check-in to houseboat, cruise the backwaters." },
      { day: "Day 5", title: "Departure", description: "Checkout and transfer to airport/railway station." },
    ],
    inclusions: ["Daily breakfast", "One night houseboat with meals", "Private transfers", "Sightseeing as per itinerary"],
    exclusions: ["Air/Train fare", "Boating tickets", "Personal expenses", "Meals not mentioned"],
    stay: "3-star hotels in Munnar and Thekkady, houseboat stay in Alleppey.",
    transfers: "Private AC vehicle for intercity travel and sightseeing.",
    bestTime: "September to March for pleasant weather.",
    idealFor: ["Families", "Couples", "Wellness seekers"],
    notes: ["Houseboat category upgrades available on request."]
  },
  {
    id: 3,
    slug: "golden-triangle-tour",
    type: "domestic",
    title: "Golden Triangle Tour",
    destination: "Delhi, Agra, Jaipur",
    duration: "5 Days / 4 Nights",
    price: "₹12,999",
    image: "india",
    highlights: ["Taj Mahal", "Amber Fort", "Red Fort"],
    overview: "Experience India's iconic heritage circuit covering Delhi, Agra, and Jaipur with grand forts, palaces, and bustling bazaars.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Delhi", description: "Airport pickup, city highlights and local markets." },
      { day: "Day 2", title: "Delhi to Agra", description: "Drive to Agra, visit Taj Mahal and Agra Fort." },
      { day: "Day 3", title: "Agra to Jaipur", description: "En route stop at Fatehpur Sikri, continue to Jaipur." },
      { day: "Day 4", title: "Jaipur Sightseeing", description: "Amber Fort, City Palace, Hawa Mahal and local bazaars." },
      { day: "Day 5", title: "Departure", description: "Checkout and onward transfer." },
    ],
    inclusions: ["Daily breakfast", "Private AC transfers", "Monument visits as per itinerary", "Hotel stay"],
    exclusions: ["Air/Train fare", "Entrance fees", "Personal expenses", "Meals not mentioned"],
    stay: "3-star hotels in Delhi, Agra, and Jaipur.",
    transfers: "Private AC vehicle throughout the tour.",
    bestTime: "October to March for comfortable sightseeing.",
    idealFor: ["Families", "First-time India visitors", "Culture lovers"],
    notes: ["Guide services available on request."]
  },
  {
    id: 4,
    slug: "goa-beach-holiday",
    type: "domestic",
    title: "Goa Beach Holiday",
    destination: "North Goa, South Goa",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    image: "goa",
    highlights: ["Beach Parties", "Water Sports", "Old Goa Churches"],
    overview: "A fun-filled Goa escape with sunny beaches, vibrant nightlife, and colonial charm.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Goa", description: "Check-in and leisure time at the beach." },
      { day: "Day 2", title: "North Goa", description: "Visit Calangute, Baga, Anjuna, and Fort Aguada." },
      { day: "Day 3", title: "South Goa", description: "Explore Colva, Benaulim, Old Goa churches." },
      { day: "Day 4", title: "Departure", description: "Checkout and transfer to airport/railway station." },
    ],
    inclusions: ["Daily breakfast", "Private transfers", "Sightseeing as per itinerary"],
    exclusions: ["Air/Train fare", "Water sports", "Personal expenses", "Meals not mentioned"],
    stay: "3-star beachside hotel with breakfast.",
    transfers: "Private AC vehicle for sightseeing and transfers.",
    bestTime: "October to March for clear skies and beach weather.",
    idealFor: ["Friends", "Couples", "Beach lovers"],
    notes: ["Nightlife experiences can be added on request."]
  },
];

export const internationalPackages: TravelPackage[] = [
  {
    id: 5,
    slug: "dubai-luxury-tour",
    type: "international",
    title: "Dubai Luxury Tour",
    destination: "Dubai, Abu Dhabi",
    duration: "5 Days / 4 Nights",
    price: "₹55,999",
    image: "dubai",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
    overview: "Dubai at its finest with iconic skyline views, desert adventure, and world-class shopping.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Dubai", description: "Airport pickup, check-in, evening Marina walk." },
      { day: "Day 2", title: "City Tour + Burj Khalifa", description: "Half-day city tour, visit Burj Khalifa and Dubai Mall." },
      { day: "Day 3", title: "Desert Safari", description: "Dune bashing, BBQ dinner, and cultural performances." },
      { day: "Day 4", title: "Abu Dhabi Day Trip", description: "Sheikh Zayed Grand Mosque and city highlights." },
      { day: "Day 5", title: "Departure", description: "Checkout and airport transfer." },
    ],
    inclusions: ["Daily breakfast", "Airport transfers", "Desert safari with dinner", "City tour", "All transfers in AC coach"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Meals not mentioned"],
    stay: "4-star hotel in Dubai with breakfast.",
    transfers: "Shared AC coach for tours, private for airport transfers.",
    bestTime: "November to March for pleasant weather.",
    idealFor: ["Families", "Luxury seekers", "Shoppers"],
    notes: ["Dubai visa assistance available.", "Theme park add-ons available."]
  },
  {
    id: 6,
    slug: "bali-paradise",
    type: "international",
    title: "Bali Paradise",
    destination: "Ubud, Seminyak, Nusa Dua",
    duration: "6 Days / 5 Nights",
    price: "₹45,999",
    image: "bali",
    highlights: ["Rice Terraces", "Temple Tours", "Beach Clubs"],
    overview: "A balanced Bali escape blending spiritual Ubud, vibrant Seminyak, and relaxing Nusa Dua beaches.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Bali", description: "Transfer to Ubud, evening at leisure." },
      { day: "Day 2", title: "Ubud Highlights", description: "Tegallalang rice terraces, Monkey Forest, art markets." },
      { day: "Day 3", title: "Temples & Waterfalls", description: "Visit iconic temples and scenic waterfalls." },
      { day: "Day 4", title: "Seminyak", description: "Transfer to Seminyak, beach clubs and sunset views." },
      { day: "Day 5", title: "Nusa Dua", description: "Leisure day for water activities or spa." },
      { day: "Day 6", title: "Departure", description: "Checkout and airport transfer." },
    ],
    inclusions: ["Daily breakfast", "Airport transfers", "Private sightseeing tours", "Hotel stay"],
    exclusions: ["International flights", "Visa on arrival", "Personal expenses", "Meals not mentioned"],
    stay: "3-star or 4-star hotels in Ubud and Seminyak/Nusa Dua.",
    transfers: "Private transfers and tours.",
    bestTime: "April to October for dry season.",
    idealFor: ["Couples", "Honeymooners", "Culture lovers"],
    notes: ["Private villa upgrades available."]
  },
  {
    id: 7,
    slug: "maldives-honeymoon",
    type: "international",
    title: "Maldives Honeymoon",
    destination: "Male, Resort Island",
    duration: "5 Days / 4 Nights",
    price: "₹75,999",
    image: "maldives",
    highlights: ["Overwater Villa", "Snorkeling", "Sunset Cruise"],
    overview: "Romantic island bliss with turquoise lagoons, overwater villas, and serene sunsets.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Speedboat Transfer", description: "Check-in at resort, leisure time on the beach." },
      { day: "Day 2", title: "Island Leisure", description: "Spa, beach time, optional water sports." },
      { day: "Day 3", title: "Snorkeling Adventure", description: "Guided snorkeling and coral reef exploration." },
      { day: "Day 4", title: "Sunset Cruise", description: "Romantic cruise with refreshments." },
      { day: "Day 5", title: "Departure", description: "Checkout and transfer to airport." },
    ],
    inclusions: ["Daily breakfast", "Resort stay", "Speedboat transfers", "Snorkeling experience"],
    exclusions: ["International flights", "Green tax", "Personal expenses", "Meals not mentioned"],
    stay: "Resort stay with beachfront or overwater villa options.",
    transfers: "Speedboat transfers between airport and resort.",
    bestTime: "November to April for calm seas and clear skies.",
    idealFor: ["Honeymooners", "Couples", "Luxury seekers"],
    notes: ["Overwater villa upgrades available."]
  },
  {
    id: 8,
    slug: "singapore-delight",
    type: "international",
    title: "Singapore Delight",
    destination: "Singapore, Sentosa",
    duration: "5 Days / 4 Nights",
    price: "₹49,999",
    image: "singapore",
    highlights: ["Marina Bay", "Universal Studios", "Gardens by the Bay"],
    overview: "A family-friendly Singapore getaway with iconic attractions, theme parks, and modern cityscapes.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Singapore", description: "Airport pickup, evening Marina Bay view." },
      { day: "Day 2", title: "City Tour", description: "Merlion Park, Chinatown, and Little India." },
      { day: "Day 3", title: "Sentosa Island", description: "Universal Studios or S.E.A. Aquarium." },
      { day: "Day 4", title: "Gardens by the Bay", description: "Cloud Forest, Flower Dome, optional Night Safari." },
      { day: "Day 5", title: "Departure", description: "Checkout and transfer to airport." },
    ],
    inclusions: ["Daily breakfast", "Airport transfers", "City tour", "Sentosa entry tickets"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Meals not mentioned"],
    stay: "3-star or 4-star hotel in central Singapore.",
    transfers: "Shared AC coach for tours, private airport transfers.",
    bestTime: "February to April for pleasant weather.",
    idealFor: ["Families", "First-time travelers", "Theme park lovers"],
    notes: ["Optional attractions can be added."]
  },
  {
    id: 9,
    slug: "thailand-explorer",
    type: "international",
    title: "Thailand Explorer",
    destination: "Bangkok, Pattaya, Phuket",
    duration: "7 Days / 6 Nights",
    price: "₹35,999",
    image: "thailand",
    highlights: ["Grand Palace", "Phi Phi Islands", "Floating Market"],
    overview: "A value-packed Thailand circuit covering city buzz, beach relaxation, and island adventures.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Bangkok", description: "Check-in and evening at leisure." },
      { day: "Day 2", title: "Bangkok City Tour", description: "Grand Palace, Wat Pho, and floating market." },
      { day: "Day 3", title: "Transfer to Pattaya", description: "Visit Coral Island, beach time." },
      { day: "Day 4", title: "Pattaya to Phuket", description: "Fly to Phuket, check-in and leisure." },
      { day: "Day 5", title: "Phi Phi Island Tour", description: "Full-day island hopping tour." },
      { day: "Day 6", title: "Phuket Leisure", description: "Optional activities or spa day." },
      { day: "Day 7", title: "Departure", description: "Checkout and airport transfer." },
    ],
    inclusions: ["Daily breakfast", "Island tours", "Airport transfers", "Domestic flight as per package"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Meals not mentioned"],
    stay: "3-star hotels in Bangkok, Pattaya, and Phuket.",
    transfers: "Shared AC coach and ferry transfers.",
    bestTime: "November to March for cooler weather.",
    idealFor: ["Friends", "Families", "Beach lovers"],
    notes: ["Island tours subject to weather conditions."]
  },
  {
    id: 10,
    slug: "santorini-escape",
    type: "international",
    title: "Santorini Escape",
    destination: "Athens, Santorini, Mykonos",
    duration: "8 Days / 7 Nights",
    price: "₹1,29,999",
    image: "greece",
    highlights: ["Blue Domes", "Wine Tasting", "Island Hopping"],
    overview: "A dreamy Greek islands vacation with iconic sunsets, coastal towns, and Aegean flavors.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Athens", description: "Check-in and evening stroll in Plaka." },
      { day: "Day 2", title: "Athens City Tour", description: "Acropolis, Parthenon, and museums." },
      { day: "Day 3", title: "Mykonos", description: "Ferry to Mykonos, explore the old town." },
      { day: "Day 4", title: "Mykonos Leisure", description: "Beach time and windmill views." },
      { day: "Day 5", title: "Santorini", description: "Ferry to Santorini, sunset at Oia." },
      { day: "Day 6", title: "Santorini Sightseeing", description: "Fira, black sand beaches, wine tasting." },
      { day: "Day 7", title: "Leisure Day", description: "Optional caldera cruise or spa." },
      { day: "Day 8", title: "Departure", description: "Transfer to airport or ferry port." },
    ],
    inclusions: ["Daily breakfast", "Inter-island ferry transfers", "Athens city tour", "Hotel stay"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Meals not mentioned"],
    stay: "3-star or 4-star hotels in Athens, Mykonos, and Santorini.",
    transfers: "Shared ferry and private hotel transfers.",
    bestTime: "May to October for beach and island activities.",
    idealFor: ["Couples", "Honeymooners", "Luxury seekers"],
    notes: ["Private sunset cruise available on request."]
  },
  {
    id: 11,
    slug: "swiss-alps-adventure",
    type: "international",
    title: "Swiss Alps Adventure",
    destination: "Zurich, Interlaken, Lucerne",
    duration: "7 Days / 6 Nights",
    price: "₹1,49,999",
    image: "switzerland",
    highlights: ["Jungfraujoch", "Lake Lucerne", "Swiss Trains"],
    overview: "Scenic Switzerland with alpine peaks, glacier views, and charming lakeside towns.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Zurich", description: "Check-in and evening city walk." },
      { day: "Day 2", title: "Zurich to Lucerne", description: "Transfer to Lucerne, lake cruise, Chapel Bridge." },
      { day: "Day 3", title: "Mount Titlis", description: "Excursion to Mount Titlis with snow activities." },
      { day: "Day 4", title: "Interlaken", description: "Transfer to Interlaken, explore the town." },
      { day: "Day 5", title: "Jungfraujoch", description: "Full-day excursion to Top of Europe." },
      { day: "Day 6", title: "Scenic Train Ride", description: "GoldenPass route or optional adventure activities." },
      { day: "Day 7", title: "Departure", description: "Transfer to Zurich airport." },
    ],
    inclusions: ["Daily breakfast", "Swiss rail passes", "Mountain excursions", "Hotel stay"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Meals not mentioned"],
    stay: "3-star hotels in Zurich, Lucerne, and Interlaken.",
    transfers: "Swiss rail passes and private transfers where needed.",
    bestTime: "June to September for greenery, December to March for snow.",
    idealFor: ["Nature lovers", "Families", "Adventure seekers"],
    notes: ["Premium rail upgrades available."]
  },
  {
    id: 12,
    slug: "romantic-paris",
    type: "international",
    title: "Romantic Paris",
    destination: "Paris, Versailles",
    duration: "5 Days / 4 Nights",
    price: "₹89,999",
    image: "paris",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine Cruise"],
    overview: "A romantic Paris escape with iconic landmarks, art, and café-lined boulevards.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Paris", description: "Check-in and evening Seine river cruise." },
      { day: "Day 2", title: "Paris City Tour", description: "Eiffel Tower, Champs-Elysees, Arc de Triomphe." },
      { day: "Day 3", title: "Versailles", description: "Day trip to the Palace of Versailles." },
      { day: "Day 4", title: "Louvre & Montmartre", description: "Museum visit and artistic Montmartre walk." },
      { day: "Day 5", title: "Departure", description: "Checkout and airport transfer." },
    ],
    inclusions: ["Daily breakfast", "Airport transfers", "Paris city tour", "Seine cruise"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Meals not mentioned"],
    stay: "4-star hotel in central Paris.",
    transfers: "Private airport transfers and shared city tour coach.",
    bestTime: "April to June and September to October for mild weather.",
    idealFor: ["Couples", "Honeymooners", "Art lovers"],
    notes: ["Louvre tickets can be pre-booked on request."]
  },
];

export const allPackages = [...domesticPackages, ...internationalPackages];

export const testimonials = [
  { id: 1, name: "Rahul Sharma", location: "Mumbai", text: "Sandis Tours made our Bali trip absolutely magical. Every detail was perfectly planned - from the airport pickup to the hotel, everything was seamless. Highly recommended for hassle-free travel!", rating: 5 },
  { id: 2, name: "Priya Patel", location: "Delhi", text: "The visa assistance was incredible. Got my Schengen visa approved in just 10 days. The team guided me through every document and kept me updated throughout. Amazing service!", rating: 5 },
  { id: 3, name: "Amit & Neha", location: "Bangalore", text: "Our honeymoon in Maldives was a dream come true. The overwater villa they booked was stunning and the surprise arrangements were so thoughtful. Thank you Sandis Tours!", rating: 5 },
  { id: 4, name: "Sunita Verma", location: "Pune", text: "Best travel agency I've ever worked with. Booked our family trip to Kerala and everything was perfect. The houseboat experience was unforgettable. Professional, responsive, and great value!", rating: 5 },
  { id: 5, name: "Vikram Joshi", location: "Hyderabad", text: "Planned our corporate retreat through Sandis Tours. The team handled 50+ people flawlessly. Hotels, transport, activities - everything was top-notch. Will definitely use them again!", rating: 5 },
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

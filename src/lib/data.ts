import { Plane, Bus, Train, Hotel, Globe, MapPin, Luggage, Shield, CreditCard, HeadphonesIcon } from "lucide-react";

export const services = [
  { id: 1, title: "Tours & Travels", description: "Curated domestic and international tour packages tailored to your preferences.", icon: MapPin },
  { id: 2, title: "Air Ticket Booking", description: "Best deals on domestic and international flights with all major airlines.", icon: Plane },
  { id: 3, title: "Bus Booking", description: "Comfortable bus travel across all major routes with premium operators.", icon: Bus },
  { id: 4, title: "Train Booking", description: "Hassle-free train ticket reservations for all classes and routes.", icon: Train },
  { id: 5, title: "Visa Services", description: "Expert visa assistance for all countries with high approval rates.", icon: Globe },
  { id: 6, title: "Hotel Booking", description: "Handpicked hotels from budget to luxury at the best guaranteed rates.", icon: Hotel },
  { id: 7, title: "Holiday Packages", description: "All-inclusive holiday packages for families, couples, and groups.", icon: Luggage },
  { id: 8, title: "Travel Insurance", description: "Comprehensive travel insurance for worry-free journeys worldwide.", icon: Shield },
  { id: 9, title: "Forex Services", description: "Competitive foreign exchange rates and travel cards for your trips.", icon: CreditCard },
  { id: 10, title: "24/7 Support", description: "Round-the-clock customer support throughout your travel journey.", icon: HeadphonesIcon },
];

export const packages = [
  { id: 1, title: "Golden Triangle Tour", destination: "India", duration: "5 Days / 4 Nights", price: "₹15,999", type: "domestic", image: "destination-india" },
  { id: 2, title: "Santorini Escape", destination: "Greece", duration: "7 Days / 6 Nights", price: "₹89,999", type: "international", image: "destination-greece" },
  { id: 3, title: "Bali Paradise", destination: "Bali, Indonesia", duration: "6 Days / 5 Nights", price: "₹45,999", type: "international", image: "destination-bali" },
  { id: 4, title: "Dubai Luxury Tour", destination: "Dubai, UAE", duration: "5 Days / 4 Nights", price: "₹55,999", type: "international", image: "destination-dubai" },
  { id: 5, title: "Swiss Alps Adventure", destination: "Switzerland", duration: "8 Days / 7 Nights", price: "₹1,29,999", type: "international", image: "destination-switzerland" },
  { id: 6, title: "Maldives Honeymoon", destination: "Maldives", duration: "5 Days / 4 Nights", price: "₹75,999", type: "international", image: "destination-maldives" },
];

export const testimonials = [
  { id: 1, name: "Rahul Sharma", location: "Mumbai", text: "Sandis Tours made our Bali trip absolutely magical. Every detail was perfectly planned. Highly recommended!", rating: 5 },
  { id: 2, name: "Priya Patel", location: "Delhi", text: "The visa assistance was seamless. Got my Schengen visa approved in just 10 days. Amazing service!", rating: 5 },
  { id: 3, name: "Amit & Neha", location: "Bangalore", text: "Our honeymoon in Maldives was a dream come true. Thank you Sandis Tours for the wonderful experience!", rating: 5 },
  { id: 4, name: "Sunita Verma", location: "Pune", text: "Best travel agency I've ever worked with. Professional, responsive, and great value for money.", rating: 5 },
];

export const whyChooseUs = [
  { title: "10+ Years Experience", description: "Trusted by thousands of happy travellers across India" },
  { title: "Best Price Guarantee", description: "We match or beat any comparable travel package price" },
  { title: "24/7 Customer Support", description: "Round-the-clock assistance before, during, and after your trip" },
  { title: "Handpicked Hotels", description: "Only the finest accommodations curated for your comfort" },
  { title: "Expert Visa Assistance", description: "High success rate with personalized visa guidance" },
  { title: "Customized Itineraries", description: "Every trip tailored to your preferences and budget" },
];

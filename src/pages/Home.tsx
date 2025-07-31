import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, Shield, Star, Car, Plane, Mountain } from 'lucide-react';

// Data for the new FeaturedPackages component, based on the image
const featuredPackagesData = [
  {
    image: '/images/kanchi.jpeg',
    title: 'Kachipuram Temples Taxi',
    temples: 'Tiruttani temple, Kanchipuram (3) temples',
    prices: [
      { vehicle: 'Etios - 4 persons', price: '₹4500' },
      { vehicle: 'Ertiga - 5 persons', price: '₹5500' },
      { vehicle: 'Innova - 6 persons', price: '₹6500' },
      { vehicle: 'Crysta - 6 persons', price: '₹7000' },
      { vehicle: 'Tempo - 12 persons', price: '₹10500' },
      { vehicle: 'Tempo - 17 persons', price: '₹11500' },
      { vehicle: 'Mini bus - 20 persons', price: '₹13500' },
      { vehicle: 'Mini bus - 27 persons', price: '₹16500' },
      { vehicle: 'Bus - 40 persons', price: '₹19500' },
    ],
  },
  {
    image: '/images/tirumala.jpeg',
    title: 'Tirumala Taxi Package',
    temples: 'Varahaswamy temple, Balaji Darshan, Padmavathi Temple',
    prices: [
      { vehicle: 'Etios - 4 persons', price: '₹2800' },
      { vehicle: 'Ertiga - 5 persons', price: '₹3300' },
      { vehicle: 'Innova - 6 persons', price: '₹4300' },
      { vehicle: 'Tempo - 12 persons', price: '₹5500' },
      { vehicle: '17 persons', price: '₹8300' },
      { vehicle: '20 persons', price: '₹11000' },
      { vehicle: '27 persons', price: '₹13800' },
      { vehicle: '40 persons', price: '₹22000' },
    ],
  },
  {
    image: '/images/isckon.jpeg',
    title: 'Tirupati 5 local Temples',
    temples: 'Padmavathi Temple, Kapilatheertham, Iskon temple, Govindaraja swamy temple, Srikalahasti temple',
    prices: [
      { vehicle: 'Etios - 4 persons', price: '₹3000' },
      { vehicle: 'Ertiga - 5 persons', price: '₹3500' },
      { vehicle: 'Innova - 6 persons', price: '₹4000' },
      { vehicle: 'Tempo - 12 persons', price: '₹6000' },
      { vehicle: 'Tempo - 17 persons', price: '₹9000' },
      { vehicle: 'Mini bus - 20 persons', price: '₹12000' },
      { vehicle: 'Mini bus - 27 persons', price: '₹16250' },
      { vehicle: 'Bus - 40 persons', price: '₹20000' },
    ],
  },
  {
    image: '/images/arunachalanm with golden temple.webp',
    title: 'Arunachalam 2 Days',
    temples: 'Kanipakam, Golden temple, Arunachalam, Kanchipuram (3) temples, Tiruttani Temple',
    prices: [
      { vehicle: 'Etios - 4 persons', price: '₹9000' },
      { vehicle: 'Ertiga - 5 persons', price: '₹11000' },
      { vehicle: 'Innova - 6 persons', price: '₹13000' },
      { vehicle: 'Tempo - 12 persons', price: '₹18500' },
      { vehicle: 'Tempo - 17 persons', price: '₹21000' },
      { vehicle: 'Mini bus - 20 persons', price: '₹27000' },
      { vehicle: 'Mini bus - 27 persons', price: '₹33000' },
      { vehicle: 'Bus - 40 persons', price: '₹39000' },
    ],
  },
];


// The new component for the 4 featured packages
const FeaturedPackages = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Taxi Packages</h2>
                    <p className="text-xl text-gray-600">Choose from a variety of packages for your travel needs.</p>
                </div>
                <div className="relative border-t-4 border-blue-600 pt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredPackagesData.map((pkg, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <div className="relative">
                                    <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover"/>
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Quick Taxi</div>
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-center font-bold text-lg text-gray-800 mb-2">{pkg.title}</h3>
                                    <hr className="my-1 border-gray-200" />
                                    <p className="text-center text-red-600 font-semibold text-sm mb-3 h-12 flex items-center justify-center">{pkg.temples}</p>
                                    <div className="space-y-1 text-sm text-gray-700 flex-grow">
                                    {pkg.prices.map((item, idx) => (
                                        <div key={idx} className="flex justify-between border-b border-dashed pb-1">
                                        <span>{item.vehicle}</span>
                                        <span className="font-semibold">{item.price}</span>
                                        </div>
                                    ))}
                                    </div>
                                    <a href="https://wa.me/918801838383" target="_blank" rel="noopener noreferrer" className="mt-4 bg-green-500 text-white w-full py-2 rounded-lg text-center font-semibold hover:bg-green-600 transition-colors block">
                                        Book Your Taxi Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// New Drop Taxi component
const dropTaxiData = [
  { destination: 'Chennai ', price: '₹4,500' },
  { destination: 'Bangalore ', price: '₹6,500' },
  { destination: 'Arunachalam ', price: '₹6,000' },
  { destination: 'Hyderabad ', price: '₹15,500' },
  { destination: 'Nellore ', price: '₹4,500' },
  { destination: 'Vijayawada ', price: '₹12,000' },
];

const FeaturedDropTaxi = () => (
  <div className="bg-blue-50 py-16">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Drop Taxi - One Way Outstation</h2>
        <p className="text-lg text-blue-700">Best rates for one-way drop taxi from Tirupati to major cities</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-blue-100 text-left text-sm font-semibold text-blue-900">Destination</th>
              <th className="py-3 px-6 bg-blue-100 text-left text-sm font-semibold text-blue-900">Price</th>
            </tr>
          </thead>
          <tbody>
            {dropTaxiData.map((item, idx) => (
              <tr key={idx} className="border-b last:border-b-0">
                <td className="py-3 px-6 text-blue-800 font-medium">{item.destination}</td>
                <td className="py-3 px-6 text-blue-800 font-semibold">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8">
        <a href="https://wa.me/918801838383" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
          Book Drop Taxi Now
        </a>
      </div>
    </div>
  </div>
);

const Home = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Chennai",
      rating: 5,
      comment: "Excellent service! Driver was punctual and very helpful during our Tirumala darshan trip. Highly recommended!"
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      comment: "Very professional and clean cars. The driver knew all the routes well and made our family trip comfortable."
    },
    {
      name: "Venkat Reddy",
      location: "Hyderabad",
      rating: 5,
      comment: "Best taxi service in Tirupati! Used for airport pickup and local sightseeing. Will definitely use again."
    }
  ];

  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Airport Transfers",
      description: "Reliable pickup and drop services to Tirupati and Chennai airports"
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Pilgrimage Tours",
      description: "Special packages for Tirumala, Kanipakam, and other holy places"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Local Sightseeing",
      description: "Explore Tirupati's attractions with our hourly rental packages"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Reliable Taxi Services in <span className="text-black">Tirupati</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black opacity-90">
              Safe, Fast, and Affordable Transportation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+918801838383"
                className="bg-black text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/918801838383"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Available round the clock for your convenience</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Drivers</h3>
            <p className="text-gray-600">Experienced and licensed drivers</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mountain className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pilgrimage Packages</h3>
            <p className="text-gray-600">Special tours for spiritual destinations</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Plane className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Airport Pickup</h3>
            <p className="text-gray-600">Pickup and drop to airports</p>
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive taxi solutions for all your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {React.cloneElement(service.icon, { className: 'h-8 w-8 text-black' })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Trips Section (Unchanged) */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Popular Trips</h1>
            <p className="text-xl text-gray-600">Choose from a wide range of trip packages</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* 1. Tirupati to Kanipakam */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">11% Off</div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">Featured</div>
                <img src="/images/kanipakam.jpg" alt="Kanipakam Temple" className="w-full h-56 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Tirupati to Kanipakam Taxi Service</h3>
                <p className="text-sm text-gray-500 mb-4">Duration: 12 Hours</p>
                <div className="mt-auto">
                    <p className="text-sm text-gray-500">From <span className="line-through">₹4,500</span></p>
                    <p className="text-xl font-bold text-gray-800">₹4,000</p>
                    <p className="text-xs text-green-600">You save ₹500</p>
                </div>
                </div>
            </div>

            {/* 2. Tirupati to Kanchipuram */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">9% Off</div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">Featured</div>
                <img src="/images/kanchi.jpeg" alt="Kanchipuram Temple" className="w-full h-56 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Tirupati to Kanchipuram Taxi Service</h3>
                <p className="text-sm text-gray-500 mb-4">Duration: 12 Hours</p>
                <div className="mt-auto">
                    <p className="text-sm text-gray-500">From <span className="line-through">₹5,500</span></p>
                    <p className="text-xl font-bold text-gray-800">₹5,000</p>
                    <p className="text-xs text-green-600">You save ₹500</p>
                </div>
                </div>
            </div>

            {/* 3. Ultimate Tirupati 2 Days */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">6% Off</div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">Featured</div>
                <img src="/images/ultimate tirupati.jpeg" alt="Tirupati Balaji" className="w-full h-56 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Ultimate Tirupati 2 Days Taxi Package</h3>
                <p className="text-sm text-gray-500 mb-4">Duration: 2 Days</p>
                <div className="mt-auto">
                    <p className="text-sm text-gray-500">From <span className="line-through">₹8,000</span></p>
                    <p className="text-xl font-bold text-gray-800">₹7,500</p>
                    <p className="text-xs text-green-600">You save ₹500</p>
                </div>
                </div>
            </div>

            {/* ... other 8 trip cards ... */}
            {/* 4. Tirupati to Mahabalipuram */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">9% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/Mahabalipuram-1200x628.webp" alt="Mahabalipuram Temple" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">Tirupati to Mahabalipuram Taxi Service</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 2 Days - 0 Nights</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹11,000</span></p>
            <p className="text-xl font-bold text-brand-dark">₹10,000</p>
            <p className="text-xs text-green-600">You save ₹1,000</p>
          </div>
        </div>
      </div>

      {/* 5. Tirupati to Arunachalam (Via Golden Temple & Kanchi) */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">14% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/arunachalanm with golden temple.webp" alt="Arunachalam with Golden Temple" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">Tirupati to Arunachalam Packages (Via Golden Temple & Kanchipuram)</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 2 Days - 1 Night</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹11,000</span></p>
            <p className="text-xl font-bold text-brand-dark">₹9,500</p>
            <p className="text-xs text-green-600">You save ₹1,500</p>
          </div>
        </div>
      </div>

      {/* 6. Tirupati to Arunachalam Taxi Service */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">11% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/arunachalam.webp" alt="Arunachalam City View" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">Tirupati to Arunachalam Taxi Service</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 15 Hours</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹8,500</span></p>
            <p className="text-xl font-bold text-brand-dark">₹7,600</p>
            <p className="text-xs text-green-600">You save ₹900</p>
          </div>
        </div>
      </div>

      {/* 7. Tirupati to Golden Temple Vellore */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">9% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/golden temple.jpg" alt="Golden Temple Vellore" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">Tirupati to Golden Temple Vellore Taxi Service</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 12 Hours</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹5,500</span></p>
            <p className="text-xl font-bold text-brand-dark">₹5,000</p>
            <p className="text-xs text-green-600">You save ₹500</p>
          </div>
        </div>
      </div>

      {/* 8. Tirupati 5 Local Temples */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">11% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/isckon.jpeg" alt="Local Temples" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">Tirupati 5 Local Temples Taxi Service</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 12 Hours</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹4,500</span></p>
            <p className="text-xl font-bold text-brand-dark">₹4,000</p>
            <p className="text-xs text-green-600">You save ₹500</p>
          </div>
        </div>
      </div>

      {/* 9. Tirupati to Tirumala */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">14% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/tirumala.jpeg" alt="Tirumala Waterfalls" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">Tirupati to Tirumala Taxi Service</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 1 Day - 0 Nights</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹3,500</span></p>
            <p className="text-xl font-bold text-brand-dark">₹3,000</p>
            <p className="text-xs text-green-600">You save ₹500</p>
          </div>
        </div>
      </div>

      {/* 10. 2 Days Tirupati Balaji Darshan */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">6% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/balaji.jpeg" alt="Tirupati Balaji" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">2 Days Tirupati Balaji Darshan Package from Tirupati</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 2 Days - 1 Night</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹8,000</span></p>
            <p className="text-xl font-bold text-brand-dark">₹7,500</p>
            <p className="text-xs text-green-600">You save ₹500</p>
          </div>
        </div>
      </div>

      {/* 11. 1 Day Tirupati Darshan */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">11% Off</div>
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
        <img src="/images/tirupati.jpeg" alt="Tirupati Temple Complex" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-brand-dark mb-2">1 Day Tirupati Darshan Package from Tirupati</h3>
          <p className="text-sm text-gray-500 mb-4">Duration: 12 Hours</p>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">From <span className="line-through">₹4,500</span></p>
            <p className="text-xl font-bold text-brand-dark">₹4,000</p>
            <p className="text-xs text-green-600">You save ₹500</p>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>


      {/* <<< NEW FEATURED PACKAGES SECTION INSERTED HERE >>> */}
      <FeaturedPackages />
      <FeaturedDropTaxi />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Book Your Ride?</h2>
          <p className="text-xl text-black opacity-90 mb-8">Contact us now for immediate booking or to get a quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918801838383"
              className="bg-black text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center"
            >
              <Phone size={20} className="mr-2" />
              Call +91 88018 38383
            </a>
            <a
              href="https://wa.me/918801838383"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
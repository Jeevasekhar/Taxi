
import React from 'react';
import { Phone, MessageCircle, Clock, Shield, Users, MapPin, Star, CheckCircle, Car, Plane, Mountain } from 'lucide-react';

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
              <p className="text-gray-600">Convenient airport transfer services</p>
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
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Coverage Area</h2>
            <p className="text-xl text-gray-600">We serve Tirupati and surrounding areas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Tirumala', 'Renigunta Airport', 'Chandragiri', 'Kanipakam', 'Srikalahasti', 'Puttur', 'Chittoor', 'Chennai Airport'].map((location, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <span className="font-medium">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
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
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Book Your Ride?</h2>
          <p className="text-xl text-black opacity-90 mb-8">Contact us now for immediate booking or get a quote</p>
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

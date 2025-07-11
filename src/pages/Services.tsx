
import React from 'react';
import { Plane, Mountain, Car, Clock, Users, MapPin, Phone, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Airport Transfers",
      description: "Comfortable and reliable transfers to and from airports",
      features: [
        "Tirupati Airport pickup/drop",
        "Chennai Airport transfers", 
        "Flight tracking service",
        "Meet & greet service",
        "Luggage assistance"
      ],
      pricing: "Starting from ₹2500",
      duration: "As per distance"
    },
    {
      icon: <Mountain className="h-12 w-12" />,
      title: "Pilgrimage Tour Packages",
      description: "Special packages for spiritual destinations and temples",
      features: [
        "Tirumala Darshan packages",
        "Kanipakam Temple visits",
        "Srikalahasti Temple tours",
        "Multi-temple packages",
        "Customized itineraries"
      ],
      pricing: "Starting from ₹3200",
      duration: "Full day/Half day"
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Local Sightseeing",
      description: "Explore Tirupati's attractions with hourly rentals",
      features: [
        "City tour packages",
        "Historical sites visits",
        "Shopping mall trips",
        "Restaurant transfers",
        "Flexible timing"
      ],
      pricing: "₹600/hour",
      duration: "Minimum 4 hours"
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Outstation Trips",
      description: "Long-distance travel to nearby cities and attractions",
      features: [
        "Chennai city tours",
        "Bangalore trips",
        "Vellore Golden Temple",
        "Pondicherry visits",
        "Multi-day packages"
      ],
      pricing: "₹12/km + Driver allowance",
      duration: "As per itinerary"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Corporate Services",
      description: "Professional transportation for business needs",
      features: [
        "Corporate events",
        "Conference transfers",
        "Employee transportation",
        "Business meetings",
        "Bulk bookings"
      ],
      pricing: "Special corporate rates",
      duration: "Flexible"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for urgent travel needs",
      features: [
        "Emergency hospital trips",
        "Late night pickups",
        "Airport emergency transfers",
        "Breakdown assistance",
        "Priority booking"
      ],
      pricing: "Standard rates apply",
      duration: "Immediate response"
    }
  ];

  const popularPackages = [
    {
      name: "Tirumala Darshan Package",
      duration: "12 Hours",
      price: "₹4,500",
      includes: ["Pick up from hotel", "Tirumala temple visit", "Waiting time included", "Drop back to hotel"],
      vehicle: "AC Sedan/SUV"
    },
    {
      name: "Tirupati City Tour",
      duration: "8 Hours", 
      price: "₹3,200",
      includes: ["ISKCON Temple", "Chandragiri Fort", "Sri Venkateswara Museum", "Local markets"],
      vehicle: "AC Sedan"
    },
    {
      name: "Airport Transfer",
      duration: "As needed",
      price: "₹2500",
      includes: ["Renigunta Airport pickup", "Direct transfer", "Luggage assistance", "Flight tracking"],
      vehicle: "AC Sedan"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90">Comprehensive taxi solutions for all your travel needs</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-400 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Pricing:</span>
                    <span className="text-yellow-600 font-bold">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <span className="text-gray-600">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Packages</h2>
            <p className="text-xl text-gray-600">Pre-designed packages for common travel needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-yellow-400 text-black p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold">{pkg.price}</div>
                  <div className="text-sm opacity-90">{pkg.duration}</div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Vehicle:</span>
                      <span className="text-gray-600">{pkg.vehicle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How to Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our booking team</p>
                <a
                  href="tel:+918801838383"
                  className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  +91 88018 38383
                </a>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick booking via WhatsApp</p>
                <a
                  href="https://wa.me/918801838383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Office</h3>
                <p className="text-gray-600 mb-4">Walk-in bookings welcome</p>
                <span className="text-gray-700 font-medium">Gandhi Road, Tirupati</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Booking & Payment</h3>
              <ul className="space-y-2">
                <li>• Advance booking recommended for outstation trips</li>
                <li>• Payment can be made in cash or online transfer</li>
                <li>• Cancellation charges may apply for last-minute cancellations</li>
                <li>• Rates may vary during peak seasons and festivals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Service Guidelines</h3>  
              <ul className="space-y-2">
                <li>• Driver allowance extra for outstation trips</li>
                <li>• Toll charges and parking fees are additional</li>
                <li>• Waiting charges applicable after free waiting time</li>
                <li>• Night charges (10 PM to 6 AM) may apply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

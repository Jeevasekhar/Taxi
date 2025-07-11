
import React from 'react';
import { Shield, Users, Clock, Car, CheckCircle, Award, Heart, Wrench } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "All vehicles undergo regular safety inspections and maintenance"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Drivers",
      description: "Licensed, experienced drivers with local knowledge"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock service for your convenience"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Modern Fleet",
      description: "Well-maintained vehicles with AC and comfortable seating"
    }
  ];

  const fleet = [
    {
      type: "Sedan Cars",
      capacity: "4 Passengers",
      ideal: "City rides, Airport transfers",
      features: ["AC", "Comfortable seating", "GPS enabled"]
    },
    {
      type: "SUV/MUV",
      capacity: "6-7 Passengers", 
      ideal: "Family trips, Group travel",
      features: ["Spacious", "Luggage space", "Premium comfort"]
    },
    {
      type: "Tempo Traveller",
      capacity: "12-15 Passengers",
      ideal: "Group tours, Corporate travel",
      features: ["Large groups", "Pilgrimage tours", "Long distance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Taxi Tirupati</h1>
            <p className="text-xl md:text-2xl opacity-90">Your trusted travel partner in the holy city</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Established in 2015, Taxi Tirupati has been serving pilgrims, tourists, and locals with 
                  reliable transportation services. We understand the significance of Tirupati as a sacred 
                  destination and strive to make every journey comfortable and memorable.
                </p>
                <p>
                  What started as a small family business with just 2 cars has now grown into a trusted 
                  taxi service with a fleet of 25+ vehicles. Our commitment to safety, punctuality, and 
                  customer satisfaction has earned us the trust of thousands of satisfied customers.
                </p>
                <p>
                  We take pride in being more than just a taxi service – we're your local guides, 
                  helping you navigate the spiritual and cultural richness of Tirupati and surrounding areas.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-yellow-400 rounded-full p-2 mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide safe, reliable, and affordable taxi services that enhance the travel 
                experience of every passenger visiting Tirupati. We aim to be the most trusted 
                transportation partner for pilgrims and tourists.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become the leading taxi service in Tirupati region, known for exceptional 
                customer service, innovation, and contribution to making every spiritual journey 
                memorable and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-600">Modern vehicles for every type of journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <Car className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.type}</h3>
                  <p className="text-gray-600 font-medium">{vehicle.capacity}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                  <p className="text-gray-600">{vehicle.ideal}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safety & Standards</h2>
            <p className="text-xl text-gray-600">Your safety is our top priority</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Shield className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vehicle Safety</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular maintenance checks</li>
                <li>• Safety equipment installed</li>
                <li>• Insurance coverage</li>
                <li>• GPS tracking enabled</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Driver Standards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Licensed and trained drivers</li>
                <li>• Background verification</li>
                <li>• Local area expertise</li>
                <li>• Professional behavior</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Wrench className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hygiene Standards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular vehicle sanitization</li>
                <li>• Clean and comfortable interiors</li>
                <li>• Hand sanitizers available</li>
                <li>• Masks provided when needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

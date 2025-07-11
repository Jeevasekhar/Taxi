
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 text-black px-3 py-2 rounded-lg font-bold text-xl">
                TAXI
              </div>
              <span className="ml-2 text-xl font-bold">Tirupati</span>
            </div>
            <p className="text-gray-300 mb-4">
              Reliable taxi services in Tirupati for safe, comfortable, and affordable transportation to all your destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Airport Transfers</span></li>
              <li><span className="text-gray-300">Pilgrimage Tours</span></li>
              <li><span className="text-gray-300">Local Sightseeing</span></li>
              <li><span className="text-gray-300">Outstation Trips</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="text-yellow-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">+91 88018 38383</p>
                  <p className="text-gray-300">+91 99123 41859</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="text-yellow-400 mr-3 mt-1" />
                <p className="text-gray-300">vaibhavtravelstpt@gmail.com</p>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">22-4-63, Sri Lakshmi Ranga Water Front Apartment - 409, <br />Annamayya Marg, Vinayak Sagar Park,Tirupati,AP</p>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="text-yellow-400 mr-3 mt-1" />
                <p className="text-gray-300">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Taxi Tirupati. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="tel:+918801838383"
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center"
              >
                <Phone size={16} className="mr-1" />
                Call Now
              </a>
              <a
                href="https://wa.me/918801838383"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center"
              >
                <MessageCircle size={16} className="mr-1" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

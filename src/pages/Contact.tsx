import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User } from 'lucide-react';
import { MessageSquare } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-mail.js', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you shortly.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        let errorMsg = 'Failed to send email. Please try again later.';
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMsg = `Failed to send email: ${errorData.error}`;
            if (errorData.details) {
              errorMsg += `\nDetails: ${errorData.details}`;
            }
          }
        } catch (jsonErr) {
          // ignore JSON parse errors
        }
        alert(errorMsg);
      }
    } catch (error) {
      alert('Failed to send email. Network or server error.');
      console.error('SMTP error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90">Get in touch for bookings and inquiries</p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-400 rounded-full p-3 mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">Primary: +91 88018 38383</p>
                      <p className="text-gray-700">Secondary: +91 99123 41859</p>
                    </div>
                    <div className="mt-3 space-x-3">
                      <a
                        href="tel:+918801838383"
                        className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                      >
                        <Phone size={16} className="mr-1" />
                        Call Primary
                      </a>
                      <a
                        href="tel:+919912341859"
                        className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                      >
                        <Phone size={16} className="mr-1" />
                        Call Secondary
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 rounded-full p-3 mr-4 flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Booking</h3>
                    <p className="text-gray-700 mb-3">Quick booking and instant responses</p>
                    <a
                      href="https://wa.me/918801838383?text=Hi,%20I%20would%20like%20to%20book%20a%20taxi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle size={16} className="mr-1" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 rounded-full p-3 mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Address</h3>
                    <p className="text-gray-700">vaibhavtravelstpt@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 rounded-full p-3 mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      13-6-759/H, Shop No: 8, PSR Complex<br />
                      Sandya Theatre Road, Near APSRTC Bus Stand<br />
                      Tirupati, Andhra Pradesh - 517501
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 rounded-full p-3 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Office: 6:00 AM - 10:00 PM</p>
                      <p>Phone Support: 24/7 Available</p>
                      <p>Emergency Service: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="airport-transfer">Airport Transfer</option>
                    <option value="pilgrimage-tour">Pilgrimage Tour</option>
                    <option value="local-sightseeing">Local Sightseeing</option>
                    <option value="outstation-trip">Outstation Trip</option>
                    <option value="corporate-service">Corporate Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Please provide details about your travel requirements, dates, pickup location, destination, number of passengers, etc."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
            <p className="text-xl text-gray-600">Visit us for walk-in bookings and inquiries</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.4248677891596!2d79.428738!3d13.6319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4ba8f18344c5%3A0x5679f56a0e496693!2sVaishnavi%20Tours%20and%20Travels!5e0!3m2!1sen!2sin!4v1752064209165!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vaishnavi Tours and Travels, PSR Complex, Sandya Theatre Road, Tirupati"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">
                13-6-759/H, Shop No: 8, PSR Complex<br />
                Sandya Theatre Road, Near APSRTC Bus Stand<br />
                Tirupati, Andhra Pradesh - 517501
              </p>
              <a
                href="https://maps.google.com/?q=13-6-759/H,PSR+Complex,Sandya+Theatre+Road,Tirupati"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                <MapPin size={20} className="mr-2" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Need Immediate Booking?</h2>
          <p className="text-xl text-black opacity-90 mb-8">Call us now or send a WhatsApp message for instant response</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918801838383"
              className="bg-black text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center"
            >
              <Phone size={20} className="mr-2" />
              Call +91 88018 38383
            </a>
            <a
              href="https://wa.me/918801838383?text=Hi,%20I%20need%20immediate%20taxi%20booking"
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

export default Contact;

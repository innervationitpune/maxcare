import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Contact Form Submission");
  const body = encodeURIComponent(
    `Full Name: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}\n` +
    `Message:\n${formData.message}`
  );

  const mailtoLink = `mailto:admin@berkshirepainclinic.co.uk@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="py-16 bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F5EFEB]">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#567c8d] mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-[#567c8d] max-w-3xl mx-auto">
            Get in touch with our team to schedule an appointment or ask any
            questions about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#567c8d] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Practice Manager */}
                <div className="bg-[#F5EFEB] rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-[#567c8d] mb-4">
                    Practice Manager
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start sm:items-center space-x-4">
                      <div className="bg-[#567c8d]/10 rounded-full p-3">
                        <Mail className="h-6 w-6 text-[#567c8d]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#567c8d]">
                          Ms Nicola Pizzey
                        </p>
                        <p className="text-[#567c8d]">Practice Manager</p>
                      </div>
                    </div>

                    <div className="flex items-start sm:items-center space-x-4">
                      <div className="bg-[#567c8d]/10 rounded-full p-3">
                        <Phone className="h-6 w-6 text-[#567c8d]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#567c8d]">
                          07777106344
                        </p>
                        <p className="text-[#567c8d]">Direct Line</p>
                      </div>
                    </div>

                    <div className="flex items-start sm:items-center space-x-4">
                      <div className="bg-[#567c8d]/10 rounded-full p-3">
                        <Mail className="h-6 w-6 text-[#567c8d]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#567c8d]">
                          admin@berkshirepainclinic.co.uk
                        </p>
                        <p className="text-[#567c8d]">Email Address</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-[#567c8d] rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#567c8d]/10 rounded-full p-3">
                      <Clock className="h-6 w-6 text-[#F5efeb]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#F5efeb] ml-4">
                      Opening Hours
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Monday - Friday', '9:00 AM - 6:00 PM'],
                      
                    ].map(([day, time], i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-[#F5EFEB]">{day}</span>
                        <span className="font-medium text-[#567c8d]">
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Updated Multiple Locations */}
                <div className="bg-[#F5efeb] rounded-lg shadow-lg p-6 space-y-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#567c8d]/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-[#567c8d]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#567c8d] ml-4">
                      Clinic Locations
                    </h3>
                  </div>

                  {[
                    {
                      name: 'Circle Reading Hospital',
                      address: '100 Drake Way, Reading RG2 0NE',
                      phone: '0118 922 6888',
                      mapLink: 'https://www.google.com/maps/search/?api=1&query=100+Drake+Way,+Reading+RG2+0NE',
                    },
                    {
                      name: 'Shelburne Hospital',
                      address: 'Queen Alexandra Rd, High Wycombe HP11 2TR',
                      phone: '01494 888700',
                      mapLink: 'https://www.google.com/maps/search/?api=1&query=Queen+Alexandra+Rd,+High+Wycombe+HP11+2TR',
                    },
                    {
                      name: 'Berkshire Independent Hospital',
                      address: 'Swallows Croft, Wensley Rd, Coley Park, Reading RG1 6UZ',
                      phone: '0118 402 2855',
                      mapLink: 'https://www.google.com/maps/search/?api=1&query=Swallows+Croft,+Wensley+Rd,+Reading+RG1+6UZ',
                    },
                  ].map((loc, idx) => (
                    <div key={idx} className="bg-white rounded-md p-4 shadow">
                      <h4 className="text-md font-bold text-[#567c8d]">{loc.name}</h4>
                      <p className="text-[#567c8d]">{loc.address}</p>
                      <p className="text-[#567c8d] font-medium">Phone: {loc.phone}</p>
                      <a
                        href={loc.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-white bg-[#567c8d] hover:bg-[#2f4156] px-4 py-2 rounded-lg transition"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#567c8d] mb-6">
              Send us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-[#F5efeb] rounded-lg shadow-lg p-6 sm:p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#567c8d] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567c8d] focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#567c8d] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567c8d] focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#567c8d] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567c8d] focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#567c8d] mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567c8d] focus:outline-none"
                  placeholder="Please describe your pain condition or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#567c8d] text-[#F5efeb] py-3 px-6 rounded-lg hover:shadow-lg hover:bg-[#2f4156] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>

              <p className="text-sm text-[#567c8d] mt-2">
                <span className="text-red-500">*</span> Required fields. We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-100 border border-red-200 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-xl font-bold text-red-800 mb-4">
            Emergency Contact
          </h3>
          <p className="text-red-700 mb-4">
            For medical emergencies, please contact your GP or visit your
            nearest A&E department. This contact form is not monitored 24/7 and
            should not be used for urgent medical matters.
          </p>
          <p className="text-red-700">
            <strong>Emergency Services:</strong> 999 or 112
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

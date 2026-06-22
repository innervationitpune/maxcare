import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Users,
  Clock,
  Phone,
  Calendar,
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import InsuranceLogos from '../components/InsuranceLogos';

const Home = () => {
  const valueProps = [
    {
      icon: Shield,
      title: 'Expert Care',
      description: "Specialized consultation with Dr. Ram Dhotarkar for your pain concerns.",
    },
    {
      icon: Award,
      title: 'Trusted Experience',
      description: "Years of experience helping patients understand their pain and treatment options.",
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Tailored consultation and guidance to meet your unique needs.',
    },
    {
      icon: Clock,
      title: 'Timely Support',
      description: 'Quick appointment scheduling and responsive care.',
    },
  ];

  // Services list neutralized for Ads compliance
  const treatments = [
    'Consultation for Pain Management',
    'Patient Education',
    'Multidisciplinary Pain Planning',
    'Follow-up and Monitoring',
    // The following procedure-specific treatments are commented out to comply with Google Ads:
    // 'Lumbar Epidural Injections',
    // 'Cervical Epidural Injections',
    // 'Facet Joint Injections',
    // 'Medial Branch Blocks',
    // 'Radiofrequency Ablation',
    // 'Trigger Point Injections',
    // 'Injections for Headaches',
    // 'Spinal Cord Stimulation Referrals',
    // 'Nerve Root Blocks',
    // 'Sacroiliac Joint Injections',
    // 'Sympathetic Nerve Blocks',
    // 'Occipital Nerve Blocks',
    // 'Intercostal Nerve Blocks',
    // 'Stellate Ganglion Block',
    // 'Joint Denervation for Knee, Hip and Shoulder',
    // 'Post Surgical Pain Management',
  ];

  // Testimonials neutralized for Ads compliance
  const testimonials = [
    {
      name: 'Mr M Goodacre',
      location: 'Maidenhead, UK',
      rating: 5,
      text: 'Professional and supportive consultation experience.',
    },
    {
      name: 'Mrs BD',
      location: 'Reading, UK',
      rating: 5,
      text: 'Caring and empathetic consultation with clear guidance.',
    },
    {
      name: 'Mrs I. Canales',
      location: 'High Wycombe',
      rating: 5,
      text: 'Helpful advice and detailed guidance during my consultation.',
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-[#567C8D] text-[#F5EFEB] py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-[#F5EFEB]">Maxcare Pain Clinic</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-xl mx-auto lg:mx-0">
            Specialist in Pain Medicine, providing comprehensive consultation services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
            <Link
              to="/about"
              className="bg-[#F5EFEB] bg-opacity-90 text-[#567C8D] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Know More →
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="rounded-2xl w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] overflow-hidden shadow-2xl border-4 border-white">
            <img
              className="w-full h-full object-cover"
              src="/clinic-consultation.jpg"
              alt="Clinic Consultation"
            />
          </div>
        </div>
      </section>

      {/* Doctify Recognition Section */}
      <section className="bg-[#F5EFEB] py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#567C8D] mb-4">
            Recognized on Doctify
          </h2>

          <p className="text-base sm:text-lg text-[#567C8D] max-w-2xl mx-auto mb-12">
            Trusted by patients and healthcare professionals.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">

            <a
              href="https://www.doctify.com/uk/specialist/ram-dhotarkar#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/doctify-patient.png"
                alt="Recommended by patients on Doctify"
                className="w-full max-w-[320px] rounded-3xl shadow-xl"
              />
            </a>

            <a
              href="https://www.doctify.com/uk/specialist/ram-dhotarkar#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/doctify-professional.png"
                alt="Endorsed by professionals on Doctify"
                className="w-full max-w-[320px] rounded-2xl shadow-xl"
              />
            </a>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-[#F5EFEB] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#567C8D] mb-6">
              About Maxcare Pain Clinic
            </h2>

            <p className="text-justify sm:text-lg text-[#567C8D] max-w-4xl mx-auto">
              Specialized consultation services led by Dr Ram in Berkshire and South Buckinghamshire.
              We provide services across Circle Reading, Berkshire Independent Hospital and Shelburne Hospital in High Wycombe.
              The aim is to provide compassionate care and guidance to help you understand your condition.
            </p>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F5EFEB] px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#567C8D] mb-6">
              Why Choose Maxcare Pain Clinic?
            </h2>

            <p className="text-base sm:text-lg text-[#567C8D] max-w-2xl mx-auto">
              We're committed to providing professional and personalized consultation services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#F5EFEB] rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <prop.icon className="h-8 w-8 text-[#567C8D]" />
                </div>

                <h3 className="text-xl font-semibold text-[#567C8D] mb-3">
                  {prop.title}
                </h3>

                <p className="text-[#567C8D]">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-[#F5EFEB] px-4">
        <div className="max-w-7xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#567C8D]">
              Our Services
            </h2>
          </motion.div>

        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#F5EFEB] px-4">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#567C8D] rounded-full mr-3"></div>

                  <span className="text-[#567C8D] font-medium">
                    {treatment}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Insurance Logos */}
      <InsuranceLogos />

      {/* Testimonials */}
      <section className="py-16 bg-[#F5EFEB] px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#567C8D] mb-6">
              What Our Patients Say
            </h2>

            <p className="text-base sm:text-lg text-[#567C8D] max-w-2xl mx-auto">
              Real experiences from patients who have consulted with us...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5EFEB] text-[#567C8D] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Schedule a Consultation with Dr. Ram Dhotarkar
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our team is here to provide guidance and support regarding your condition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/book-appointment"
              className="bg-[#567C8D] text-[#F5EFEB] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </Link>

            <Link
              to="/contact"
              className="border-2 border-[#567C8D] text-[#567C8D] px-8 py-3 rounded-full font-semibold hover:bg-[#567C8D] hover:text-[#F5EFEB] hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Contact Us</span>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
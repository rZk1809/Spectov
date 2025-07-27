import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { useLocation } from "react-router-dom";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { carrent, jobit, tripguide } from "../assets";

const Products = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const location = useLocation();
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      position: "Accessibility Research Director",
      company: "TechForward Institute",
      content: "DefXV has revolutionized how we approach AR accessibility. The real-time translation feature is groundbreaking for our research initiatives.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "VR Therapist",
      company: "Healing Horizons Clinic",
      content: "The Guardian system gives us confidence to explore VR without safety concerns. It's a game-changer for our therapy sessions.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "Innovation Lead",
      company: "NextGen Solutions",
      content: "DefXV's passthrough technology seamlessly blends virtual and real worlds. The future of AR/VR is here with this incredible device.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      id: 4,
      name: "Dr. James Park",
      position: "Safety Engineer",
      company: "VirtSafe Technologies",
      content: "The Guardian boundary system exceeds industry safety standards. DefXV sets a new benchmark for secure VR experiences in professional environments.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Priya Sharma",
      position: "Accessibility Consultant",
      company: "Inclusive Tech Solutions",
      content: "DefXV's accessibility features are unmatched. The real-time translation and audio assistance make VR truly inclusive for diverse communities.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      position: "VR Research Director",
      company: "Stanford Medical Center",
      content: "Our VR therapy programs have seen remarkable improvements with DefXV. The safety protocols and collaborative features enhance patient outcomes significantly.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Lisa Martinez",
      position: "Clinical VR Specialist",
      company: "Rehabilitation Institute",
      content: "DefXV's collaborative VR experiences have transformed our group therapy sessions. Patients feel safer and more engaged than ever before.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
      id: 8,
      name: "Ahmed Hassan",
      position: "AR/VR Product Manager",
      company: "Future Vision Labs",
      content: "The Guardian system's precision and DefXV's intuitive interface make it perfect for enterprise applications. Outstanding innovation in assistive technology.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/8.jpg"
    }
  ];

  const specifications = [
    { category: "Display", specs: ["4K per eye resolution", "120Hz refresh rate", "Wide field of view"] },
    { category: "Audio", specs: ["Spatial 3D audio", "Real-time translation", "Noise cancellation"] },
    { category: "Tracking", specs: ["6DOF head tracking", "Hand gesture recognition", "Eye tracking"] },
    { category: "Safety", specs: ["Guardian boundary system", "Passthrough cameras", "Emergency stop"] },
    { category: "Connectivity", specs: ["Wi-Fi 6E", "Bluetooth 5.2", "USB-C charging"] },
    { category: "Battery", specs: ["8-hour usage", "Fast charging", "Wireless charging"] }
  ];

  // Scroll to top when navigating to products page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Auto-scroll testimonials
  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (!isPaused) {
        intervalRef.current = setInterval(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 3000);
      }
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]); // Remove testimonials.length from dependencies

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleTestimonialClick = (index) => {
    setCurrentTestimonial(index);
    // Restart the interval after manual selection
    setIsPaused(false);
  };

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      {/* Hero Section with pattern background overlay */}
      <section className="relative w-full h-screen mx-auto flex items-center justify-center">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-20 z-[1]"></div>
        
        <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10`}>
          <motion.div
            variants={textVariant()}
            initial="hidden"
            animate="show"
          >
            <h1 className={`${styles.heroHeadText} text-white mb-6`}>
              Introducing <span className="text-[#915EFF]">DefXV</span>
            </h1>
            <p className={`${styles.heroSubText} text-secondary mb-8 max-w-3xl`}>
              Revolutionary AR/VR assistive technology that breaks barriers and creates 
              inclusive experiences for everyone. The future of accessible virtual reality is here.
            </p>
          </motion.div>

          <motion.div
            variants={slideIn("up", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button className="bg-[#915EFF] hover:bg-[#7c3aed] text-white font-bold py-4 px-8 rounded-xl text-[18px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Coming Soon
            </button>
            <button className="border-2 border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white font-bold py-4 px-8 rounded-xl text-[18px] transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 w-full flex justify-center">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-[#915EFF]"
          />
        </div>
      </section>

      {/* Features Showcase */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto py-20`}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className={`${styles.sectionSubText} text-center`}>DefXV Features</p>
          <h2 className={`${styles.sectionHeadText} text-center mb-16`}>Revolutionary Capabilities</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Tilt
                options={{
                  max: 25,
                  scale: 1.02,
                  speed: 450,
                }}
                className="bg-tertiary p-6 rounded-2xl h-full"
              >
                <div className="relative w-full h-48 mb-6">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-white font-bold text-[20px] mb-3">{project.name}</h3>
                <p className="text-secondary text-[14px] leading-relaxed">{project.description}</p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto py-20`}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${styles.sectionHeadText}`}>Technical Specifications</h2>
          <p className={`${styles.sectionSubText} mt-4`}>Cutting-edge technology at your fingertips</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specifications.map((spec, index) => (
            <motion.div
              key={spec.category}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-black-100 p-6 rounded-xl"
            >
              <h3 className="text-[#915EFF] font-bold text-[18px] mb-4">{spec.category}</h3>
              <ul className="space-y-2">
                {spec.specs.map((item, idx) => (
                  <li key={idx} className="text-secondary text-[14px] flex items-center">
                    <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials - Horizontal Scrolling */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto py-20`}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${styles.sectionHeadText}`}>What Experts Say</h2>
        </motion.div>

        <div 
          className="relative max-w-6xl mx-auto overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentTestimonial * (100 / testimonials.length)}%)`,
              width: `${testimonials.length * 100}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="bg-black-100 p-8 rounded-2xl h-full">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-white text-[16px] sm:text-[18px] leading-relaxed mb-6 italic text-center">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-[#915EFF] font-bold text-[16px] text-center">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary text-[14px] text-center">
                      {testimonial.position}
                    </p>
                    <p className="text-secondary text-[12px] text-center">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-opacity-50 ${
                  index === currentTestimonial ? 'bg-[#915EFF] scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Availability */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto py-20`}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${styles.sectionHeadText}`}>Get Notified</h2>
          <p className={`${styles.sectionSubText} mt-4`}>Be the first to experience DefXV</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-black-100 p-8 rounded-2xl text-center"
        >
          <h3 className="text-white text-[24px] font-bold mb-4">Coming Soon</h3>
          <p className="text-secondary text-[16px] mb-8">
            DefXV is currently in development. Join our notification list to be among the first 
            to know when it becomes available.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-tertiary text-white rounded-lg border border-gray-600 focus:border-[#915EFF] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#915EFF] hover:bg-[#7c3aed] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Notify Me
            </button>
          </form>

          {isSubscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 mt-4"
            >
              Thank you! You'll be notified when DefXV is available.
            </motion.p>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Products;

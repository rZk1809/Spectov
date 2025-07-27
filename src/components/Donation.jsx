import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { donation } from "../assets";

const Donation = () => {
  const donationReasons = [
    {
      title: "Empower communication",
      description: "with real-time translations."
    },
    {
      title: "Promote inclusivity",
      description: "by making our glasses accessible to more people."
    },
    {
      title: "Innovate for the benefit",
      description: "of the deaf and hard-of-hearing community."
    }
  ];

  return (
    <div className="bg-black-100 rounded-[20px] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Support Our Mission</p>
          <h2 className={`${styles.sectionHeadText} text-center mb-6 sm:mb-8`}>Why Donate?</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Image Section */}
          <motion.div 
            variants={fadeIn("right", "spring", 0.1, 0.75)}
            className="flex-1 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]">
              <img
                src={donation}
                alt="Support SpectoV Donation"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-100/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={fadeIn("left", "spring", 0.1, 0.75)}
            className="flex-1 w-full"
          >
            <div className="space-y-4 sm:space-y-6">
              {donationReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-tertiary rounded-lg hover:bg-[#915EFF]/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#915EFF] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[16px] sm:text-[18px] font-bold mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-secondary text-[14px] sm:text-[16px]">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Donate Button */}
            <motion.div 
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="mt-6 sm:mt-8 text-center lg:text-left"
            >
              <button
                onClick={() => {
                  // Add your donation link here
                  window.open("https://your-donation-link.com", "_blank");
                }}
                className="bg-[#915EFF] hover:bg-[#7c3aed] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-[16px] sm:text-[18px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#915EFF]/50 w-full sm:w-auto"
              >
                Donate Here
              </button>
              <p className="text-secondary text-[12px] sm:text-[14px] mt-3 max-w-md mx-auto lg:mx-0">
                Every contribution makes a difference in creating a more inclusive world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Donation, "donation");
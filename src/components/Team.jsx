import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { founder, board } from "../assets";

const Team = () => {
  return (
    <div className="mt-12 sm:mt-20">
      {/* Founder Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Leadership</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-8 sm:mb-16`}>Our Team</h2>
      </motion.div>

      {/* Founder */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className="bg-black-100 rounded-[20px] p-4 sm:p-6 lg:p-8 mb-8 sm:mb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Founder Photo */}
          <motion.div 
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#915EFF]/20 shadow-lg mx-auto">
              <img
                src={founder}
                alt="Prakash Chand Jha - Founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            className="flex-1 text-center lg:text-left px-2 sm:px-0"
          >
            <h3 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-2">
              Prakash Chand Jha
            </h3>
            <div className="mb-4 sm:mb-6">
              <h4 className="text-[#915EFF] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">
                Founder of SpectoV | CEO
              </h4>
            </div>
            <p className="text-secondary text-[14px] sm:text-[16px] lg:text-[17px] leading-[24px] sm:leading-[28px] lg:leading-[30px] max-w-3xl mx-auto lg:mx-0">
              Founding SpectoV was my bold step to revolutionize virtual reality and enhance human experiences. 
              Despite challenges, I built a dynamic, collaborative workspace, valuing every team member. 
              SpectoV's rapid growth in VR solutions and strategic partnerships showcases our determination and innovation. 
              We're excited about the future and pushing VR boundaries further.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Board Members Section */}
      <motion.div variants={textVariant()}>
        <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-center mb-8 sm:mb-16">Board Members of SpectoV</h3>
      </motion.div>

      {/* Board Member */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="bg-black-100 rounded-[20px] p-4 sm:p-6 lg:p-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Board Member Photo */}
          <motion.div 
            variants={fadeIn("right", "spring", 0.4, 0.75)}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#915EFF]/20 shadow-lg mx-auto">
              <img
                src={board}
                alt="Dr. Vijayaprabakaran K - Board Member"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={fadeIn("left", "spring", 0.4, 0.75)}
            className="flex-1 text-center lg:text-left px-2 sm:px-0"
          >
            <h3 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-2">
              Dr. Vijayaprabakaran K
            </h3>
            <div className="mb-4 sm:mb-6">
              <p className="text-[#915EFF] text-[14px] sm:text-[15px] lg:text-[16px] font-semibold">
                Board Member of SpectoV
              </p>
            </div>
            <div className="w-full h-[1px] bg-secondary/30 my-4 sm:my-6"></div>
            <p className="text-secondary text-[14px] sm:text-[16px] lg:text-[17px] leading-[24px] sm:leading-[28px] lg:leading-[30px] max-w-3xl mx-auto lg:mx-0">
              More information about Dr. Vijayaprabakaran K will be added here.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Team, "team");
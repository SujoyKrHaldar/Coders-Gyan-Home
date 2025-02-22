import { motion } from "framer-motion";

function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      className="relative pt-48"
    >
      <div className="text-center max-w-5xl mx-auto space-y-4">
        <motion.a
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          href="#"
          className="p-1 pl-0 font-medium pr-6 rounded-full bg-[#f7d260] text-black text-[0.8rem]"
        >
          <span className="p-1 px-3 rounded-full bg-white mr-2">New</span>
          Fullstack Engineering Course just launched
        </motion.a>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-[4.5rem]/[5rem] font-bold relative"
        >
          I help you to become a{" "}
          <span className="inline-block text-[#f7d260]">
            Fullstack Engineer
          </span>
          .
          <motion.span
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="absolute right-40 bottom-[2.5rem] rotate-[-4deg] text-xl py-2 pb-3 px-5 bg-green-700 rounded-lg tracking-normal "
          >
            & Get Hired!
          </motion.span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-[1.2rem]/[2rem] max-w-lg mx-auto"
        >
          Guiding future developers with simple lessons, practical tools, and
          hands-on projects to learn coding.
        </motion.p>

        <div className="flex items-center gap-4 justify-center pt-4">
          <motion.button
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-black bg-[#f7d260] py-4 px-6 uppercase font-semibold rounded-lg text-sm tracking-widest"
          >
            Get Started -{" "}
            <span className="italic normal-case font-normal">
              It&apos;s free
            </span>{" "}
          </motion.button>

          <motion.button
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="uppercase font-medium text-sm tracking-widest py-4 px-6"
          >
            Explore Courses
          </motion.button>
        </div>
      </div>

      <div className="absolute inset-0 top-1/4 -z-10 w-[800px] h-[500px] rounded-full mx-auto bg-[#7c5cfc1d] blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3,
          ease: "easeOut",
        }}
        className="w-[600px] mx-auto relative -z-10"
      >
        <img
          src="/profile-pic.png"
          className="w-full h-full object-cover relative contrast-120"
        />
        <div className="absolute inset-0 top-1/4 -z-10 mx-auto w-[200px] h-[400px] rounded-full bg-[#000000b6] blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 -z-20 w-[500px] h-[500px] rounded-full bg-[#dca63b5b] blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 -z-20 w-[500px] h-[500px] rounded-full bg-[#1ed83436] blur-3xl"></div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;

import { motion } from "framer-motion";

function Navbar() {
  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="z-100 fixed inset-0 w-full mx-auto px-40 h-fit flex items-center justify-between bg-[#191919c3] backdrop-blur-xl border-b border-dashed border-[#4a4a4a]"
    >
      <motion.div className="flex items-center gap-8" variants={navbarVariants}>
        <motion.div
          className="flex items-center gap-4"
          variants={navbarVariants}
        >
          <motion.div
            className="w-10 h-10 p-1 bg-white rounded-full overflow-hidden"
            variants={navbarVariants}
          >
            <img src="https://custom-webpage-static-assets-production.fermion.app/6654af5442cc797654980578-custom-zip-pages//_next/static/media/cglogo.b9879683.png" />
          </motion.div>
          <motion.p className="text-xl font-bold" variants={navbarVariants}>
            Coder&apos;s Gyan
          </motion.p>
        </motion.div>
        <motion.div
          className="bg-[#3e3e3e] w-[1px] h-[30px]"
          variants={navbarVariants}
        ></motion.div>
        <motion.nav
          className="flex items-center justify-between gap-10 mt-1"
          variants={navbarVariants}
        >
          {["Home", "Courses", "Interview", "Community"].map((item, index) => (
            <motion.p
              key={index}
              className={`uppercase text-sm tracking-widest font-medium ${
                item === "Home"
                  ? "text-[#f7d260] border-b border-[#f7d260] py-8"
                  : ""
              }`}
              variants={navbarVariants}
            >
              {item}
            </motion.p>
          ))}
        </motion.nav>
      </motion.div>
      <motion.div
        className="flex items-center gap-4 justify-center"
        variants={navbarVariants}
      >
        <motion.button
          className="py-3 px-6 uppercase font-medium rounded-lg text-sm tracking-widest"
          variants={navbarVariants}
        >
          Login
        </motion.button>
        <motion.button
          className="text-white bg-[#353535] py-4 px-6 uppercase font-medium rounded-lg text-sm tracking-widest"
          variants={navbarVariants}
        >
          Book 1:1 Call
        </motion.button>
      </motion.div>
    </motion.header>
  );
}

export default Navbar;

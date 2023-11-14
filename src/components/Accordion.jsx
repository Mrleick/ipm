import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMore } from "react-icons/io";

const Accordion = ({ heading, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key="heading"
          className={className}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="font-bold ml-1 text-white">
            {heading}
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="p-4 justify-between"
          >
            {content} <IoIosMore />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;

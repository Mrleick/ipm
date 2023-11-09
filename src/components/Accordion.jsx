import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key="question"
          className="relative z-20 bg-red rounded-md px-6 py-4 bg-blue-200 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="font-bold ml-1 text-white">
            {question}
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="p-4 text-lg"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import musiclogo from "../assets/musiclogo.png";
import tw from "tailwind-styled-components";
import Heading from "../components/Heading";
import FeedPage from "./FeedPage";

const Logo = tw(motion.img)`
  mx-auto
  mb-5
`;

const Container = tw(motion.div)`
  bg-secondary-color
  h-screen
  flex
  flex-col
  items-center
  justify-center
`;

const WelcomePage = () => {
  const history = useHistory();

  const preloadDuration = 3000; // 3 seconds

  const targetPath = "/FeedPage";
  const fullTargetPath = `${history.createHref({ pathname: targetPath })}`;

  useEffect(() => {
    const redirectToTargetSite = () => {
      history.push(fullTargetPath);
    };

    const timeoutId = setTimeout(redirectToTargetSite, preloadDuration);

    return () => clearTimeout(timeoutId);
  }, [history, fullTargetPath]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const logoVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const titleVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <Container variants={containerVariants} initial="initial" animate="animate">
      <Logo
        variants={logoVariants}
        initial="initial"
        animate="animate"
        src={musiclogo}
        alt="Logo"
      />
      <Heading
        as={motion.h1}
        color="white"
        title="iPlayMusic"
        size={32}
        variants={titleVariants}
        initial="initial"
        animate="animate"
        weight="bold"
      />
    </Container>
  );
};

export default WelcomePage;

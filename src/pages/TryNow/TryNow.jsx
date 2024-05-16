import { Box, Container, Flex, Heading, Img, useSteps } from "@chakra-ui/react";
import { Demo, Select, StatusBar, WorkoutSetting } from "../../components";
import { useMediaQuery } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

export const TryNow = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
  });
  const [isLargerThan800] = useMediaQuery("(min-width: 700px)");

  const renderComponent = () => {
    switch (activeStep) {
      case 1:
        return <Select setActiveStep={setActiveStep} />;
      case 2:
        return <WorkoutSetting setActiveStep={setActiveStep} />;
      case 3:
        return <Demo setActiveStep={setActiveStep} />;
      case 4:
        return <StatusBar setActiveStep={setActiveStep} />;
      default:
        return <Select setActiveStep={setActiveStep} />;
    }
  };

  return (
    <Container mt={"12"} maxW={"container.xl"} my={4}>
      <Helmet>
        <title>Try Demo Now</title>
        <meta name="description" content="Personal AI Trainer" />
        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection, Ai Trainer, Ai Nutrtion"
        />
      </Helmet>
      {!activeStep && (
        <Box position="fixed" top={20} left={20}>
          <Link to="/">
            <FontAwesomeIcon icon={faX} fontSize={25} color="#F2F2F2" />
          </Link>
        </Box>
      )}
      {!isLargerThan800 ? (
        <Flex bg={"black"} justify={"center"} align={"center"} height={"100vh"}>
          <video src="../assets/rotate.mp4" muted autoPlay loop></video>
        </Flex>
      ) : (
        <>
          {!activeStep ? (
            <Heading textAlign={"center"}>
              Try <span className="text-gradient-primary"> Demo </span>
            </Heading>
          ) : (
            <Flex justifyContent={"center"} mt={2}>
              <Img src="../assets/logofit.png" w={100} />
            </Flex>
          )}

          {renderComponent()}
        </>
      )}
    </Container>
  );
};

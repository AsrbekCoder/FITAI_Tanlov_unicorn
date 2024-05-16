import { Container, Flex, Box, Stack, Image } from "@chakra-ui/react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const arr = [
  {
    id: 1,
    title: "Advanced Motion-Tracking Technology",
    subTitle:
      "Ensures that you keep the right form through FitAI easy-to-follow guided workout videos.",
    img: "../assets/random_imgs/title1.jpg",
  },
  {
    id: 2,
    title: "Advanced asd Motion-Tracking Technology",
    subTitle:
      "Ensures that you keep the right form through FitAI easy-to-follow guided workout videos.",
    img: "../assets/random_imgs/title2.jpg",
  },
  {
    id: 3,
    title: "Advanced aaMotion-Tracking Technology",
    subTitle:
      "Ensures that you keep the right form through FitAI easy-to-follow guided workout videos.",
    img: "../assets/random_imgs/title3.jpg",
  },
];

export const WorkoutSetting = ({ setActiveStep }) => {
  const [thisItem, setThisItem] = useState(0);

  return (
    <>
      <Box position="fixed" top={20} left={20}>
        <FontAwesomeIcon
          onClick={() => setActiveStep(1)}
          icon={faArrowLeft}
          fontSize={25}
          color="#F2F2F2"
        />
      </Box>
      <Flex align="center" gap={20} pr={20} pl={20}>
        <button onClick={() => setActiveStep(3)} className="btn_gradient w-25">
          <Box
            className="bg-gradient-primary"
            borderWidth={1}
            borderRadius="50%"
            padding="0px 7px"
            marginRight={10}
            color={"#fff"}
          >
            {thisItem + 1}
          </Box>{" "}
          SKIP TO WORKOUT
        </button>
        <Flex justifyContent="center" align="center" gap="30px">
          <FontAwesomeIcon
            icon={faArrowLeft}
            cursor="pointer"
            fontSize={25}
            color="#39baf6"
            onClick={() => {
              setThisItem(thisItem - 1);
            }}
            style={{
              transition: "0.3s",
              pointerEvents: thisItem === 0 && "none",
            }}
            opacity={thisItem !== 0 ? 1 : 0}
          />
          {thisItem === 0 && (
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              style={{ display: "none" }}
            />
          )}
          <Box>
            <Image
              marginTop={30}
              width="100%"
              maxW={800}
              src={arr[thisItem].img}
              alt="Yoga image :)"
            />
            <Stack
              width="100%"
              display="flex"
              flexDirection="column"
              gap={10}
              textAlign="center"
            >
              <Box color="#F2F2F2" fontSize={26} size="md" fontWeight={700}>
                {arr[thisItem].title}
              </Box>
              <Box color="#F2F2F2" fontSize={22} size="md" fontWeight={700}>
                {arr[thisItem].subTitle}
              </Box>
            </Stack>
          </Box>

          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => {
              setThisItem(thisItem + 1);
            }}
            cursor="pointer"
            fontSize={25}
            color="#39baf6"
            style={{
              display: thisItem === 2 ? "none" : "inherit",
            }}
          />

          <FontAwesomeIcon
            icon={faArrowRight}
            cursor="pointer"
            fontSize={25}
            style={{
              display: thisItem !== 2 ? "none" : "inherit",
            }}
            color="#39baf6"
            onClick={() => setActiveStep(3)}
          />
        </Flex>
      </Flex>
    </>
  );
};

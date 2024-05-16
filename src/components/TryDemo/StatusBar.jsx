import {
  Box,
  Flex,
  Heading,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
export const StatusBar = () => {
  const [one, setOne] = useState(0);
  useEffect(() => {
    let intervalId;

    if (one < 100) {
      intervalId = setInterval(() => {
        setOne((prevOne) => prevOne + 20);
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [one]);

  let imgRandom = [
    {
      imageurl: "../assets/random_imgs/1.jpg",
      delay: "1",
    },
    {
      imageurl: "../assets/random_imgs/2.jpg",
      delay: "2",
    },
    {
      imageurl: "../assets/random_imgs/3.jpg",
      delay: "5",
    },
    {
      imageurl: "../assets/random_imgs/4.jpg",
      delay: "4",
    },
    {
      imageurl: "../assets/random_imgs/5.jpg",
      delay: "2",
    },
    {
      imageurl: "../assets/random_imgs/6.jpg",
      delay: "3",
    },
    {
      imageurl: "../assets/random_imgs/7.jpg",
      delay: "4",
    },
    {
      imageurl: "../assets/random_imgs/8.jpg",
      delay: "2",
    },
    {
      imageurl: "../assets/random_imgs/9.jpg",
      delay: "1",
    },
    {
      imageurl: "../assets/random_imgs/10.jpg",
      delay: "4",
    },
    {
      imageurl: "../assets/random_imgs/11.jpg",
      delay: "5",
    },
    {
      imageurl: "../assets/random_imgs/12.jpg",
      delay: "4",
    },
    {
      imageurl: "../assets/random_imgs/13.jpg",
      delay: "2",
    },
    {
      imageurl: "../assets/random_imgs/14.jpg",
      delay: "3",
    },
  ];
  for (let i = imgRandom.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imgRandom[i], imgRandom[j]] = [imgRandom[j], imgRandom[i]];
  }

  return (
    <Flex
      p={20}
      flexDirection="column"
      alignItems="center"
      justify={"center"}
      gap={10}
    >
      <Box width={"100%"}>
        <Progress
          min={0}
          rounded={"lg"}
          max={100}
          value={one}
          isAnimated
          transition={"0.3s"}
        />
      </Box>

      <Flex justify={"space-evenly"} gap={4} flexWrap={"wrap"}>
        {imgRandom.slice(0, 0 + 9).map((item) => (
          <Box
            width={"340px"}
            height={"200px"}
            overflow={"hidden"}
            rounded={"xl"}
            key={item.imageurl}
          >
            <Img
              src={item.imageurl}
              width={"100%"}
              h="full"
              objectFit={"cover"}
              opacity={one > 30 ? 1 : 0}
              transition={"1s"}
            />
          </Box>
        ))}
      </Flex>

      <Modal isCentered isOpen={one === 100 && true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-gradient-primary">You Plan</ModalHeader>

          <ModalBody>
            <Heading className="text-gradient-primary" color={"#fff"}>
              {" "}
              Your Plan Full done let&apos;s start
            </Heading>
            -
          </ModalBody>

          <ModalFooter>
            <a href="https://fit-ai.netlify.app/user/day/1">
              <button className="btn_gradient">Let&apos;s Start</button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

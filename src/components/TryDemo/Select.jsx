import { Flex, Heading, Box, Stack } from "@chakra-ui/react";

import { useState } from "react";

export const Select = ({ setActiveStep }) => {
  const [text, setText] = useState(null);
  const [clicked, setClickied] = useState(false);

  const [verCardsArr, setVerCardsArr] = useState([
    {
      id: "1",
      title: "Yoga/Fitness",
      isChecked: false,
    },
    {
      id: "2",
      title: "Strength",
      isChecked: false,
    },
    {
      id: "3",
      title: "Balance & Flexibility",
      isChecked: false,
    },
  ]);

  const [horCardsArr, setHorCardsArr] = useState([
    {
      id: "1",
      title: "Beginner",
      isChecked: false,
      text: `This workout is ${Math.floor(
        Math.random() * (11 - 5) + 5
      )}.21 minutes long.`,
    },
    {
      id: "2",
      title: "Intermediate",
      isChecked: false,
      text: `This workout is ${Math.floor(
        Math.random() * (21 - 8) + 8
      )}.12 minutes long.`,
    },
    {
      id: "3",
      title: "Advanced",
      isChecked: false,
      text: `This workout is ${Math.floor(
        Math.random() * (37 - 16) + 16
      )}.21 minutes long.`,
    },
  ]);

  const handleCardClick = (clickedCard) => {
    const updatedCards = verCardsArr.map((card) => {
      if (card.id === clickedCard.id) {
        return { ...card, isChecked: true };
      } else {
        return { ...card, isChecked: false };
      }
    });
    setVerCardsArr(updatedCards);
  };

  const handleHorCardClick = (clickedCard) => {
    const updatedCards = horCardsArr.map((card) => {
      if (card.id === clickedCard.id) {
        setText(clickedCard.text);
        setClickied(true);
        return { ...card, isChecked: true };
      } else {
        return { ...card, isChecked: false };
      }
    });
    setHorCardsArr(updatedCards);
  };
  return (
    <Flex direction="column" align="center" gap={20} mt={10}>
      <Flex justify="space-between" align={"center"} gap={20}>
        <Box>
          <Heading color="#FAFAFA" size="md">
            I would like to try an exercise for...
          </Heading>
          <Flex
            justify="center"
            align="center"
            flexWrap={"wrap"}
            marginTop={4}
            gap={10}
          >
            {verCardsArr.map((card) => (
              <Box
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={card.isChecked && "bg-gradient-primary"}
                color={card.isChecked ? "#fff" : "#39baf6"}
                fontWeight={700}
                display="flex"
                flex="1"
                textAlign="center"
                cursor="pointer"
                justifyContent="center"
                alignItems="center"
                border="solid"
                borderRadius="6px"
                size="md"
                fontSize={20}
                width="100px"
                height="151px"
                p={16}
                borderWidth="2.5px"
                borderColor="#39baf6"
              >
                {card.title}
              </Box>
            ))}
          </Flex>
        </Box>
        <Box>
          <Stack>
            <Heading color="#FAFAFA" size="md" mt={4}>
              {" "}
              My preferred workout intensity...{" "}
            </Heading>
            {horCardsArr.map((card) => (
              <Box
                margin={4}
                key={card.id}
                className={card.isChecked && "bg-gradient-primary"}
                color={card.isChecked ? "#fff" : "#39baf6"}
                fontWeight={700}
                fontSize={16}
                onClick={() => handleHorCardClick(card)}
                display="flex"
                flex="1"
                cursor="pointer"
                justifyContent="start"
                alignItems="center"
                border="solid"
                borderRadius="6px"
                height="151px"
                p={"20px "}
                borderWidth="2.5px"
                borderColor="#39baf6"
              >
                {card.title}
              </Box>
            ))}
          </Stack>
          <Box
            textAlign="center"
            className="text-gradient-primary"
            color="#F2F2F2"
            fontWeight={700}
            fontSize={"xl"}
          >
            {text}
          </Box>
        </Box>
      </Flex>

      <button
        style={{
          opacity: clicked ? 1 : 0,
        }}
        onClick={() => setActiveStep(2)}
        className="btn_gradient w-25"
      >
        Start
      </button>
    </Flex>
  );
};

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  FormHelperText,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useToast,
} from "@chakra-ui/react";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
export const Demo = ({ setActiveStep }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [pose, setPose] = useState(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const poseNetHeight =
    pose?.keypoints
      .filter((item) => item.part === "rightAnkle")[0]
      .score.toFixed(2) *
      100 >
    30;
  const toast = useToast();
  console.log(
    pose?.keypoints
      .filter((item) => item.part === "rightAnkle")[0]
      .score.toFixed(2) * 100
  );
  useEffect(() => {
    const runPoseDetection = async () => {
      await tf.ready(); // Make sure TensorFlow is ready
      const net = await posenet.load();

      const detectPose = async () => {
        if (webcamRef.current && webcamRef.current.video.readyState === 4) {
          const video = webcamRef.current.video;
          const videoWidth = video.width;
          const videoHeight = video.height;

          // Set the canvas size to match the video dimensions
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;

          const pose = await net.estimateSinglePose(video);
          setPose(pose);

          drawKeypoints(pose, videoWidth, videoHeight);
        }

        requestAnimationFrame(detectPose);
      };

      detectPose();
    };

    const drawKeypoints = (pose, videoWidth, videoHeight) => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, videoWidth, videoHeight);

      pose.keypoints.forEach((keypoint) => {
        const { x, y } = keypoint.position;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#FF0000"; // Red keypoints
        ctx.fill();
      });

      const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints);
      adjacentKeyPoints.forEach((keypoints) => {
        drawSegment(ctx, keypoints[0], keypoints[1], "#00FF00"); // Green lines
      });
    };

    const drawSegment = (ctx, { x: ax, y: ay }, { x: bx, y: by }, color) => {
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.stroke();
    };
    if (isOpen) {
      runPoseDetection();
    } else {
      setPose(null);
    }
  }, [isOpen]);
  if (poseNetHeight) {
    toast({
      status: "success",
      title: "Congratulations we detected your height successfuly",
      duration: 12000,
      isClosable: true,
      position: "top-right",
      fontSize: "7px",
    });
  }
  return (
    <Flex
      p={20}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justify={"center"}
      gap={10}
    >
      <Box position="fixed" top={20} left={20}>
        <FontAwesomeIcon
          onClick={() => setActiveStep(1)}
          icon={faArrowLeft}
          fontSize={25}
          color="#F2F2F2"
        />
      </Box>

      <Flex gap={10} justifyContent="space-between" flexWrap="wrap">
        <Box>
          <FormControl>
            <FormLabel fontSize={"2xl"}>Age</FormLabel>
            <NumberInput defaultValue={0} max={99} min={1}>
              <NumberInputField
                fontSize={"4xl"}
                py={10}
                w="200px"
                type="text"
              />
              <NumberInputStepper>
                <NumberIncrementStepper py={2} color={"#fff"} />
                <NumberDecrementStepper py={2} color={"#fff"} />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel fontSize={"2xl"}>Weight</FormLabel>
            <NumberInput max={250} defaultValue={0} min={30}>
              <NumberInputField
                fontSize={"4xl"}
                py={10}
                w="200px"
                type="text"
              />
              <NumberInputStepper>
                <NumberIncrementStepper py={2} color={"#fff"} />
                <NumberDecrementStepper py={2} color={"#fff"} />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>KG</FormHelperText>
          </FormControl>
        </Box>
      </Flex>
      <Flex align={"center"}>
        <FormControl>
          <FormLabel fontSize={"2xl"}>Height</FormLabel>
          <Flex
            justify={"center"}
            align={"center"}
            width={"200px"}
            height={"70px"}
            fontSize={"4xl"}
            borderRadius={"5px"}
            border={"1px solid gray"}
          >
            {poseNetHeight ? Math.floor(Math.random() * (181 - 165) + 165) : 0}
          </Flex>

          <FormHelperText>Measure your height with AI</FormHelperText>
        </FormControl>

        <Box>
          <button onClick={onOpen} className="btn_gradient w-100 p-2 mt-2">
            {" "}
            Measure your height
            <FontAwesomeIcon icon={faCameraAlt} />
          </button>
        </Box>
      </Flex>
      {!poseNetHeight && (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="bg-primary">
            <ModalHeader color={"#fff"}>
              Measure your height with AI
            </ModalHeader>
            <ModalCloseButton color={"white"} />
            <ModalBody position={"relative"}>
              <Webcam
                width={"1080px"}
                videoConstraints={{
                  width: 550,
                  height: 1080,
                  facingMode: "user", // or 'environment' for rear camera
                }}
                ref={webcamRef}
              />
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  zIndex: "1000",
                  height: "250px",
                  top: 0,
                  left: 0,
                }}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <button className="w-25 btn_gradient" onClick={() => setActiveStep(4)}>
        Next
      </button>
    </Flex>
  );
};

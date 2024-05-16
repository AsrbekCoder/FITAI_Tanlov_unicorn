import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function WebcamComponent() {
  const videoRef = useRef(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing the webcam:", error);
        });
    }
  }, []);

  return (
    <Box color="#F2F2F2">
      <Box position="fixed" top={20} left={20}>
        <Link to="/Demo">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            fontSize={25}
            color="#F2F2F2"
          />
        </Link>
      </Box>
      {id == 0 ? (
        <Container
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            justify="center"
            width="100%"
            padding={20}
            flexWrap="wrap"
            gap={20}
          >
            <video width="100%" className="max-w" controls>
              <source
                src="https://www.example.com/your-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              width="100%"
              className="max-w"
              ref={videoRef}
              autoPlay
              playsInline
            />
          </Flex>
        </Container>
      ) : id == 1 ? (
        <Container
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            position="relative"
            justify="center"
            width="80%"
            flexWrap="wrap"
            gap={20}
          >
            <video width="100%" controls>
              <source
                src="https://www.example.com/your-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              width="30%"
              className="absolute b-0 r-0"
              ref={videoRef}
              autoPlay
              playsInline
            />
          </Flex>
        </Container>
      ) : (
        <Container
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            position="relative"
            justify="center"
            width="58%"
            flexWrap="wrap"
            gap={20}
          >
            <video width="100%" ref={videoRef} autoPlay playsInline />
            <video width="30%" controls className="absolute b-0 r-0">
              <source
                src="https://www.example.com/your-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Flex>
        </Container>
      )}
    </Box>
  );
}

export default WebcamComponent;

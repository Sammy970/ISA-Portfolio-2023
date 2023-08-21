import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  const { id, image } = props;

  const handleNavigate = () => {
    navigate(id);
  };

  return (
    <Tilt
      tiltReverse={false}
      glareEnable={true}
      glareMaxOpacity={0.7}
      glareColor={"#FFFFFF"}
      glarePosition={"all"}
    >
      <Box
        // maxW="full"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        onClick={handleNavigate}
      >
        <Image src={image} alt="Card Image" w="100%" data-tilt />
      </Box>
    </Tilt>
  );
};

export default ProjectCard;

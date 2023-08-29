import React, { useState } from "react";
import { Card, CardBody, CardHeader, Divider, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  const { id, no, title } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = () => {
    navigate(id);
  };

  return (
    <Card
      borderWidth="2px"
      h={"full"}
      border="2px solid black"
      borderRadius={0}
      overflow="hidden"
      boxShadow={
        isHovered
          ? "12px -12px 0px #0f0f0f" // Increased shadow on hover
          : "8px -8px 0px #0f0f0f"
      }
      transition="box-shadow 0.3s ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
      color={"#0f0f0f"}
    >
      <CardHeader p={2}>
        <Text fontFamily={"'Press Start 2P', cursive"}>{no}</Text>
      </CardHeader>
      <Divider />
      <CardBody p={3} alignItems={"center"} display={"flex"}>
        <Text
          fontFamily={"'Work Sans', sans-serif"}
          fontWeight={700}
          fontSize={25}
          letterSpacing={2}
        >
          {title.toUpperCase()}
        </Text>
      </CardBody>

      {/* <Image src={image} alt="Card Image" w="100%" data-tilt /> */}
    </Card>
  );
};

export default ProjectCard;

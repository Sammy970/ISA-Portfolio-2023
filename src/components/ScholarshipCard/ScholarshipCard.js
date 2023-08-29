import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import React, { useState } from "react";

import classes from "./ScholarshipCard.module.css";

const ScholarshipCard = ({ imageSrc, name, amount }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      borderRadius={0}
      border={"2px solid #0f0f0f"}
      boxShadow={
        isHovered
          ? "12px -12px 0px #0f0f0f" // Increased shadow on hover
          : "8px -8px 0px #0f0f0f"
      }
      transition="box-shadow 0.3s ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <Text
          fontFamily={"'Press Start 2P', cursive"}
          color={"#0f0f0f"}
          fontSize={{ base: 12, md: 15 }}
        >
          {name}
        </Text>
      </CardHeader>
      <Divider />
      <CardBody p={2}>
        <VStack w={"full"}>
          <Image
            src={imageSrc}
            borderRadius={"50%"}
            w={{ base: 120, md: 150, lg: 150, xl: 180 }}
            className={isHovered ? classes["animated-image"] : ""}
            // border={"3px solid black"}
            // transition="border 0.3s ease-in-out"
          />
          <Text
            fontFamily={"'Work Sans',sans-serif"}
            fontWeight={700}
            fontSize={30}
          >
            {amount}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ScholarshipCard;

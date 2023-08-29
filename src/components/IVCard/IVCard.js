import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Divider, Text } from "@chakra-ui/layout";
import { Image, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

import classes from "./IVCard.module.css";

const IVCard = ({ title, subtitle, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      h={"full"}
      fontFamily={"'Press Start 2P', cursive"}
      color={"#0f0f0f"}
      borderRadius={0}
      boxShadow={
        isHovered
          ? "12px -12px 0px #0f0f0f" // Increased shadow on hover
          : "8px -8px 0px #0f0f0f"
      }
      border={"2px solid black"}
      transition="box-shadow 0.3s ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <VStack>
          <Text fontSize={15}>{title}</Text>
          <Text fontSize={14}>{subtitle}</Text>
        </VStack>
      </CardHeader>
      <Divider />
      <CardBody
        p={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={image}
          bgSize={"revert"}
          w={"full"}
          h={"full"}
          className={isHovered ? classes["animated-image"] : ""}
        />
      </CardBody>
    </Card>
  );
};

export default IVCard;

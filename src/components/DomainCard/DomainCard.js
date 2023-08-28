import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

import classes from "./DomainCard.module.css";

export const CoreDomainCard = () => {
  return (
    <Card
      maxW={"full"}
      boxShadow="8px -8px 0px #0f0f0f"
      borderRadius={0}
      border={"2px solid black"}
      className={classes.card}
    >
      <CardHeader
        p={1}
        fontSize={{ base: 10, md: 15 }}
        textAlign={"left"}
        w={"full"}
        color={"#000000"}
        fontFamily="'Press Start 2P', cursive"
        ml={2}
      >
        Core
      </CardHeader>
      <Divider />
      <CardBody p={0} pl={2} pr={2}>
        <HStack w={"full"} justifyContent={"space-around"}>
          <Image
            src="/DomainCard-Assets/core_team_image.png"
            w={{ base: 90, md: 140, lg: 150, xl: 160 }}
          />
          <Text
            fontFamily={"'Work Sans', sans-serif"}
            fontWeight={700}
            color={"#0f0f0f"}
            fontSize={{ base: 30, sm: 27, md: 40, lg: 45, xl: 70 }}
            textAlign={"center"}
          >
            Core Team
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

const DomainCard = ({ srcImg, title, textWidth }) => {
  return (
    <Card
      maxW={"full"}
      h={{ base: "150px", md: "180px" }}
      boxShadow="8px -8px 0px #0f0f0f"
      borderRadius={0}
      border={"2px solid black"}
      className={classes.card}
    >
      <CardHeader
        p={1}
        fontSize={{ base: 10, md: 15 }}
        textAlign={"left"}
        w={"full"}
        color={"#000000"}
        fontFamily="'Press Start 2P', cursive"
        ml={2}
      >
        Domain
      </CardHeader>
      <Divider />
      <CardBody
        display={"flex"}
        alignContent={"center"}
        justifyContent={"end"}
        w={"full"}
        // p={0}
      >
        <HStack justifyContent={"end"}>
          <Image
            position={"absolute"}
            left={{ base: -8, md: -10 }}
            src={srcImg}
            w={{ base: "70px", md: "90px" }}
          />
          <Text
            textAlign={"right"}
            // mr={10}
            w={textWidth}
            fontFamily={"'Work Sans', sans-serif"}
            fontWeight={700}
            fontSize={{ base: 27, md: 28, lg: 29, xl: 30 }}
            color={"#0f0f0f"}
          >
            {title}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default DomainCard;

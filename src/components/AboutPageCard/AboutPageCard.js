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

import classes from "./AboutPageCard.module.css";

const AboutPageCard = ({ variant, text, imgSrc, position }) => {
  return (
    <Card
      maxW={"full"}
      boxShadow="8px -8px 0px #0f0f0f"
      justifyContent={"center"}
      alignItems={"center"}
      h={"full"}
      borderRadius={0}
      border={"2px solid black"}
      className={classes.card}
    >
      {variant === "one" && (
        <CardHeader
          p={1}
          fontSize={{ base: 10, md: 15 }}
          textAlign={"left"}
          w={"full"}
          color={"#000000"}
          fontFamily="'Press Start 2P', cursive"
          ml={2}
        >
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{text}</Text>
            <Image mr={3} src="/AboutPage-Assets/note.png" w={5} />
          </HStack>
        </CardHeader>
      )}

      <Divider />
      <CardBody p={2} display={"flex"} justifyContent={"center"}>
        {variant === "one" || variant === "two" ? (
          <Image src={imgSrc} w={{ base: "94%", md: "auto" }} />
        ) : (
          <Text>Hello</Text>
        )}
      </CardBody>
    </Card>
  );
};

export default AboutPageCard;

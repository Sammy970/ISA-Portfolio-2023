import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AboutPageCard = ({ variant }) => {
  return (
    <Card
      maxW={"full"}
      h={"full"}
      borderRadius={0}
      border={"2px solid black"}
      boxShadow={"8px -8px 0px #0f0f0f"}
    >
      {variant === "one" && (
        <CardHeader
          p={1}
          fontSize={15}
          color={"#000000"}
          fontFamily="'Press Start 2P', cursive"
          ml={2}
        >
          <Text>Mission</Text>
        </CardHeader>
      )}

      <Divider />
      <CardBody p={2} textAlign={"center"}>
        <Image src="mission_one_text.png" w={{ base: "auto", md: "100%" }} />
      </CardBody>
    </Card>
  );
};

export default AboutPageCard;

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const IVCardPage = ({ variant }) => {
  return (
    <Card
      maxW={"full"}
      h={"full"}
      borderRadius={0}
      border={"2px solid black"}
      boxShadow={"8px -8px 0px #0f0f0f"}
    >
      <CardHeader
        p={1}
        fontSize={15}
        color={"#000000"}
        fontFamily="'Press Start 2P', cursive"
        ml={2}
      >
        <Text>{variant}</Text>
      </CardHeader>
      <Divider />
      <CardBody p={2} textAlign={"center"}>
        {variant === "1" && (
          <Image src="iv_one_text.png" w={{ base: "auto", md: "100%" }} />
        )}
        {variant === "2" && (
          <Image src="iv_two_text.png" w={{ base: "auto", md: "100%" }} />
        )}
        {variant === "3" && (
          <Image src="iv_three_text.png" w={{ base: "auto", md: "100%" }} />
        )}
        {variant === "4" && (
          <Image src="iv_four_text.png" w={{ base: "auto", md: "100%" }} />
        )}
        {variant === "5" && (
          <Image src="iv_five_text.png" w={{ base: "auto", md: "100%" }} />
        )}
      </CardBody>
    </Card>
  );
};

export default IVCardPage;

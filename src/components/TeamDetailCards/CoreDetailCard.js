import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CoreDetailCard = ({
  position,
  name,
  isaPosition,
  imgSrc,
  size,
  topBase,
  topMd,
}) => {
  return (
    <Card
      w={{ base: "full", md: "lg" }}
      h={{ base: "120px", md: "144px" }}
      borderRadius={0}
      border={"2px solid black"}
      boxShadow={"8px -8px 0px #0f0f0f"}
    >
      <CardHeader p={2}>
        <Text
          fontFamily={"'Press Start 2P', cursive"}
          fontSize={16}
          color={"#0f0f0f"}
          w={"full"}
          textAlign={position}
        >
          Core
        </Text>
      </CardHeader>
      <Divider />
      <CardBody p={4} display={"flex"} alignItems={"center"}>
        <HStack w={"full"}>
          <VStack w={"full"}>
            <Text
              textAlign={position}
              fontFamily={"'Press Start 2P', cursive"}
              fontSize={{ base: 10, md: 18 }}
              color={"#0f0f0f"}
              w={"full"}
            >
              {name}
            </Text>
            <Text
              textAlign={position}
              w={"full"}
              fontFamily={"'Press Start 2P', cursive"}
              fontSize={{ base: 10, md: 14 }}
              color={"#0f0f0f"}
            >
              {isaPosition}
            </Text>
          </VStack>
          <Image
            position={"absolute"}
            left={position === "right" ? 0: undefined}
            right={position === "left" ? 0 : undefined}
            top={{ base: topBase, md: topMd }}
            src={imgSrc}
            w={size}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CoreDetailCard;

/* <CardBody p={4} display={"flex"} alignItems={"center"}>
        <HStack w={"full"}>
          <Image
            position={"absolute"}
            left={-3}
            top={{ base: -12, md: -24 }}
            src="/TeamData/core/krushna.png"
            w={"50%"}
          />
          <VStack w={"full"}>
            <Text
              textAlign={"right"}
              fontFamily={"'Press Start 2P', cursive"}
              fontSize={{ base: 14, md: 18 }}
              color={"#0f0f0f"}
              w={"full"}
            >
              Krushna More
            </Text>
            <Text
              textAlign={"right"}
              w={"full"}
              fontFamily={"'Press Start 2P', cursive"}
              fontSize={{ base: 10, md: 14 }}
              color={"#0f0f0f"}
            >
              President
            </Text>
          </VStack>
        </HStack>
      </CardBody> */

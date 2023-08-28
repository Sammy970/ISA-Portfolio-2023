import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Divider, Text } from "@chakra-ui/layout";
import { Image, VStack } from "@chakra-ui/react";
import React from "react";

const IVCard = ({ title, subtitle, image }) => {
  return (
    <Card
      h={"full"}
      fontFamily={"'Press Start 2P', cursive"}
      color={"#0f0f0f"}
      borderRadius={0}
      boxShadow={"8px -8px 0px #0f0f0f"}
      border={"2px solid black"}
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
        <Image src={image} bgSize={"revert"} w={"full"} h={"full"} />
      </CardBody>
    </Card>
  );
};

export default IVCard;

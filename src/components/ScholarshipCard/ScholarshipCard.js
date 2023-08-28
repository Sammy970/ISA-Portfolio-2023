import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ScholarshipCard = ({ imageSrc, name, amount }) => {
  return (
    <Card
      boxShadow={"8px -8px 0px #0f0f0f"}
      borderRadius={0}
      border={"2px solid #0f0f0f"}
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
            w={{ base: 100, md: 150, lg: 150, xl: 200 }}
            border={"3px solid black"}
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

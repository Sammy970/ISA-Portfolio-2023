import { Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const DataCard = (props) => {
  const { year, firstText, secondText, image, color } = props;
  return (
    <Card bg={color} borderRadius="10px" p={1} w={"full"} boxShadow={"2xl"}>
      <HStack justifyContent={"space-between"} ml={5} mr={5}>
        <VStack alignItems="left" gap={1}>
          <Text fontFamily="google-sans-medium" fontSize={{ base: 14, md: 18 }}>
            {year}
          </Text>
          <Text fontFamily="google-sans-black" fontSize={{ base: 15, md: 20 }}>
            {firstText}
          </Text>
          <Text fontFamily="google-sans-medium" fontSize={{ base: 14, md: 18 }}>
            {secondText}
          </Text>
        </VStack>
        <Image
          src={image}
          width={{ base: 65, md: 90 }}
          height={{ base: 65, md: 90 }}
          borderRadius="50%"
        />
      </HStack>
    </Card>
  );
};

export default DataCard;

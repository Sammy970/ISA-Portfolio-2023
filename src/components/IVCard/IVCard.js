import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";


export const IV = () => {

  return (
    <>
     <Card
      bg={"#F4ECDD"}
      borderRadius="10px"
      p={1}
      w={"full"}
      boxShadow={"2xl"}
    >
      <CardBody>
        <Text
          fontFamily="google-sans-medium"
          textAlign={"center"}
          fontSize={{ base: 15, md: 20 }}
        >
        </Text>
        <br />
      </CardBody>
    </Card>
  </>
  );
};

export default IV;
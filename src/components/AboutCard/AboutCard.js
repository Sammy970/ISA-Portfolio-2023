import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";

const AboutCard = (props) => {
  const { data } = props;
  return (
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
          textAlign={"justify"}
          fontSize={{ base: 15, md: 20 }}
        >
          {data}
        </Text>
        <br />
        <Text
          fontFamily="google-sans-medium"
          textAlign={"justify"}
          fontSize={{ base: 15, md: 20 }}
        >
          Let's connect and explore the possibilities together!
        </Text>
      </CardBody>
    </Card>
  );
};

export default AboutCard;

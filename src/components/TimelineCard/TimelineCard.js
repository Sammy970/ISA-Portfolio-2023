import React from "react";

import { Card, CardBody, Text } from "@chakra-ui/react";

const TimelineCard = (props) => {
  const { content, color } = props;
  return (
    <Card w={"full"} bg={color} p={3} borderRadius={7} mb={3}>
      <CardBody
        color={"#1F1F1F"}
        fontFamily={"google-sans-black"}
        fontSize={{ base: 16, sm: 17, lg: 18 }}
      >
        <Text>{content}</Text>
      </CardBody>
    </Card>
  );
};

export default TimelineCard;

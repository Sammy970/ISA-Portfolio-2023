import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CountCard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getCount() {
      try {
        const response = await fetch("/api/getCount");
        const data = await response.json();

        setCount(data[0].count);

        // console.log("Document written with ID: ");
      } catch (e) {
        console.error("Error adding documents ", e);
      }
    }

    getCount();
  }, []);
  return (
    <Card
      maxW={{ base: "50%", md: "30%", lg: "20%", xl: "15%" }}
      boxShadow={"md"}
      mb={6}
      border={"2px solid black"}
    >
      <CardBody p={2}>
        <Text
          textAlign={"center"}
          fontFamily={"'Press Start 2P', cursive"}
          fontSize={{ base: 10, sm: 12, md: 14 }}
        >
          Viewers: {count}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CountCard;

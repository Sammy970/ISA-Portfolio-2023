import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TeamDetailCard = ({ name, photo }) => {
  return (
    <Card
      w={"full"}
      boxShadow={"8px -8px 0px #0F0F0F"}
      borderRadius={0}
      border={"2px solid black"}
    >
      <CardHeader p={2} ml={1}>
        <Text
          color={"#0F0F0F"}
          fontSize={16}
          fontFamily={"'Press Start 2P', sans-serif"}
        >
          {name}
        </Text>
      </CardHeader>
      <Divider />
      <CardBody display={"flex"} justifyContent={"center"}>
        <Image src={photo} w={"80%"} />
      </CardBody>
    </Card>
  );
};

export default TeamDetailCard;

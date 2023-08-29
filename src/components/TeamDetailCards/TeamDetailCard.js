import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import classes from "./TeamDetailCard.module.css";

const TeamDetailCard = ({ name, photo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      w={"full"}
      m={"auto"}
      // boxShadow={"8px -8px 0px #0F0F0F"}
      borderRadius={0}
      border={"2px solid black"}
      boxShadow={
        isHovered
          ? "12px -12px 0px #0f0f0f" // Increased shadow on hover
          : "8px -8px 0px #0f0f0f"
      }
      transition="box-shadow 0.3s ease-in-out"
      className={classes.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <Image
          src={photo}
          w={"60%"}
          className={isHovered ? classes["animated-image"] : ""}
        />
      </CardBody>
    </Card>
  );
};

export default TeamDetailCard;

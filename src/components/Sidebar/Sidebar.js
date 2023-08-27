import { VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <VStack
      alignItems="center"
      spacing={{ base: 6, sm: 8 }}
      p={4}
      bg="#171717"
      boxShadow="md"
      borderRadius="10px"
      h={"auto"}
      justifyContent="center"
      fontFamily="google-sans-bold"
      color="#FFFFFF"
      fontSize="23px"
    >
      <Link to={"/"}>About</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/iv"}>Industrial Visit</Link>
      <Link to={"/team"}>Team</Link>
    </VStack>
  );
};

export default Sidebar;

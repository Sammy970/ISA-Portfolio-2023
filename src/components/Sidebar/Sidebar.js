import { VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <VStack
      alignItems="center"
      spacing={{ base: 6, sm: 8 }}
      p={4}
      bg="#f5f5f5"
      boxShadow="md"
      borderRadius="10px"
      h={"auto"}
      justifyContent="center"
      fontFamily="google-sans-bold"
      color="#1f1f1f"
      fontSize="23px"
    >
      <Link to={"/"}>About</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/skills"}>Skills</Link>
      <Link to={"/certificates"}>Certificates</Link>
      <Link to={"/timeline"}>Timeline</Link>
      <Link to={"/contacts"}>Contacts</Link>
    </VStack>
  );
};

export default Sidebar;

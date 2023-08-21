import { Button, Card, CardFooter, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { date, title, from, link, color } = props;

  return (
    <Card
      bg={color}
      h={"full"}
      justifyContent={"space-evenly"}
      borderRadius="10px"
      p={2}
      w={"full"}
      boxShadow={"2xl"}
    >
      <VStack alignItems="left" gap={1} ml={5} mr={5}>
        <Text fontFamily="google-sans-medium" fontSize={{ base: 14, md: 18 }}>
          {date}
        </Text>
        <Text
          noOfLines={2}
          fontFamily="google-sans-black"
          fontSize={{ base: 15.5, md: 20 }}
        >
          {title}
        </Text>
        <CardFooter
          p={1}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontFamily="google-sans-medium" fontSize={{ base: 15, md: 18 }}>
            {from}
          </Text>
          <Link to={link} target="_blank">
            <Button
              backgroundColor={"#1f1f1f"}
              color={"#FFFFFF"}
              fontFamily="google-sans-regular"
              letterSpacing={1}
            >
              Read More
            </Button>
          </Link>
        </CardFooter>
      </VStack>
    </Card>
  );
};

export default BlogCard;

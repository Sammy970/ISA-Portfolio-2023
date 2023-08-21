import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Card,
  CardFooter,
  CardHeader,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const CertificateCard = (props) => {
  const { from, title, link, color } = props;
  return (
    <>
      <Card height={{ base: "auto" }} background={color} boxShadow={"2xl"}>
        <CardHeader
          p={4}
          height={{ base: "auto", sm: "100px", md: "140px", lg: "120px" }}
        >
          <Text
            // position="absolute"
            // right="3"
            fontSize={{ base: "18px", sm: "20px", md: "22px" }}
            color={"#1f1f1f"}
            textAlign={"right"}
            flexWrap={wrap}
            // w={"90%"}
            whiteSpace="pre-line"
            fontFamily="google-sans-medium"
          >
            {title}
          </Text>
        </CardHeader>
        <CardFooter
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"15px"}
        >
          <Text
            // position="absolute"
            // bottom="4"
            // left="3"
            // right="3"
            fontSize={{ base: "20px", sm: "20px", md: "22px" }}
            color={"#1f1f1f"}
            whiteSpace="pre-line"
            fontFamily="google-sans-medium"
          >
            {from}
          </Text>
          <Link to={link} target="_blank">
            <IconButton
              // position="absolute"
              // bottom="4"
              // width={"30px"}
              // right="3"
              fontSize={{ base: "18px", sm: "20px", md: "22px" }}
              color={"#FFFFFF"}
              backgroundColor={"#1F1F1F"}
              whiteSpace="pre-line"
              fontFamily="google-sans-regular"
            >
              <ExternalLinkIcon w={6} h={6} />
            </IconButton>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default CertificateCard;

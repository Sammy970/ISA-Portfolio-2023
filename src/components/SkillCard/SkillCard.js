import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SkillCard = (props) => {
  const { image, title, value, color } = props;
  return (
    <Card bg={"transparent"} p={3} border={"2px solid #FFFFFF"}>
      {/* <CardHeader alignSelf={"center"} p={1}>
        <Image src={image} w={50} h={50} />
      </CardHeader> */}
      <CardBody w={"full"} justifyContent={"center"} p={1}>
        <Stack direction={"column"} w={"full"}>
          <Text
            fontFamily={"google-sans-black"}
            color={"#FFFFFF"}
            fontSize={20}
            textAlign={"center"}
          >
            {title}
          </Text>
          <Progress value={value} borderRadius={8} size="md" variant={color} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SkillCard;

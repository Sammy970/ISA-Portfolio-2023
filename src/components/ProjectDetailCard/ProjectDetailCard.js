import {
  Box,
  Divider,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { getImageSize } from "react-image-size";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const ProjectDetailCard = (props) => {
  const { title, techUsed, desc, image, style } = props;
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photosHandler = async () => {
      const photoPromises = image.map(async (imgData) => {
        const dimensions = await getImageSize(imgData);
        return {
          src: imgData,
          width: dimensions.width,
          height: dimensions.height,
        };
      });

      const resolvedPhotos = await Promise.all(photoPromises);
      setPhotos(resolvedPhotos);
    };

    photosHandler();
  }, [image]);

  return (
    <VStack alignItems="center" w={"full"} gap={5} mb={10}>
      <VStack alignItems="left" spacing={5} w={"full"} color={"#0f0f0f"}>
        <Text
          fontFamily="'Work Sans', sans serif"
          fontWeight={700}
          letterSpacing={3}
          fontSize={{ base: 24, md: 25, lg: 31 }}
        >
          {title}
        </Text>

        <Divider />

        <Text
          alignSelf={"start"}
          fontFamily="'Press Start 2P', cursive"
          fontSize={{ base: 16, md: 20, lg: 25 }}
        >
          Tech Used -
        </Text>
        <Stack
          direction={{ base: "row", md: "row" }}
          wrap={"wrap"}
          spacing={4}
          alignItems={"center"}
        >
          {techUsed.map((tech, index) => {
            return (
              <Tag
                size={"lg"}
                key={tech}
                variant="subtle"
                // backgroundColor={color}
                backgroundColor={"white"}
                border={"2px solid black"}
                borderRadius={0}
                fontFamily="'Work Sans', sans serif"
                fontWeight={700}
                letterSpacing={2}
                color={"#0f0f0f"}
                boxShadow={"lg"}
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            );
          })}
        </Stack>

        <Divider />

        <Text
          alignSelf={"start"}
          fontFamily="'Press Start 2P', cursive"
          fontSize={{ base: 16, md: 20, lg: 25 }}
        >
          Description -
        </Text>

        <Text
          fontFamily="'Work Sans', sans serif"
          fontWeight={400}
          textAlign={"justify"}
          fontSize={{ base: 17, md: 20 }}
        >
          {desc}
        </Text>
      </VStack>

      <Divider />

      <VStack w={"full"}>
        <HStack w={"full"} justifyContent={"space-between"}>
          <Text
            alignSelf={"center"}
            // alignContent={"center"}
            fontFamily="'Press Start 2P', cursive"
            fontSize={{ base: 16, md: 20, lg: 25 }}
          >
            Screenshots
          </Text>

          <Popover>
            <PopoverTrigger>
              <IconButton
                border={"2px solid black"}
                variant="outline"
                size={"md"}
                icon={<InfoOutlineIcon color={"#0f0f0f"} />}
              />
            </PopoverTrigger>
            <PopoverContent
              fontFamily={"google-sans-medium"}
              color={"#0f0f0f"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <PopoverArrow />
              <PopoverBody>Click on images to enlarge them!</PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>

        <Box width={"full"} alignItems={"center"}>
          <PhotoAlbum
            layout={style}
            photos={photos}
            targetRowHeight={200}
            onClick={({ index: current }) => setIndex(current)}
          />

          <Lightbox
            index={index}
            slides={photos}
            open={index >= 0}
            close={() => setIndex(-1)}
          />
        </Box>
      </VStack>
    </VStack>
  );
};

export default ProjectDetailCard;

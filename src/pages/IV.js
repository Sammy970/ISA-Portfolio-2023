import React, { useEffect, useState } from "react";
import IVCard from "../components/IVCard/IVCard";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { getImageSize } from "react-image-size";

const image = [
  "/IV-image-assets/ae2023/ae3.jpg",
  "/IV-image-assets/ae2023/ae1.jpg",
  "/IV-image-assets/ae2023/ae0.jpg",
  "/IV-image-assets/ae2023/ae2.jpg",
  "/IV-image-assets/ae2023/ae9.jpg",
  "/IV-image-assets/ae2023/ae7.jpg",
  "/IV-image-assets/ae2023/ae5.jpg",
  "/IV-image-assets/ae2023/ae8.jpg",
  "/IV-image-assets/ae2023/ae6.jpg",
  "/IV-image-assets/ae2023/ae4.jpg",
];

const IV = () => {
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
  }, []);

  return (
    <>
      <Accordion defaultIndex={[0]} mb={10} allowMultiple>
        <AccordionItem border={"2px solid black"} p={3}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                fontFamily={"'Press Start 2P',cursive "}
                fontSize={{ base: 15, md: 20 }}
                textAlign="left"
                mb={2}
              >
                Past Industrial Visits
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr ",
                xl: "1fr 1fr 1fr",
              }}
              gap={10}
              // mb={10}
            >
              <GridItem>
                <IVCard
                  title={"SYSTECH SOLUTIONS"}
                  subtitle={"Pune"}
                  image={"/IV-image-assets/iv1.png"}
                />
              </GridItem>
              <GridItem>
                <IVCard
                  title={"AUTOMATION EXPO"}
                  subtitle={"Mumbai"}
                  image={"/IV-image-assets/iv2.png"}
                />
              </GridItem>
              <GridItem>
                <IVCard
                  title={"ISRO"}
                  subtitle={"Ahmedabad"}
                  image={"/IV-image-assets/iv3.png"}
                />
              </GridItem>
              <GridItem>
                <IVCard
                  title={"Endress+Hauser"}
                  subtitle={"Aurangabad"}
                  image={"/IV-image-assets/iv4.png"}
                />
              </GridItem>
            </Grid>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={"2px solid black"} p={3}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                fontFamily={"'Press Start 2P',cursive "}
                fontSize={{ base: 15, md: 20 }}
                textAlign="left"
                mb={2}
              >
                Automation EXPO 2023
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box width={"full"} alignItems={"center"}>
              <PhotoAlbum
                layout={"columns"}
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default IV;

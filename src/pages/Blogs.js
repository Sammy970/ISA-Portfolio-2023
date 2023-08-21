import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import BlogCard from "../components/BlogCard/BlogCard";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const BlogData = [
  {
    id: "b7",
    date: "June 18, 2023",
    title:
      "Journey of Building a Marketplace for Artists: From Concept to Completion",
    from: "Medium",
    link: "https://medium.com/the-modern-scientist/journey-of-building-a-marketplace-for-artists-from-concept-to-completion-7463f1de4ed0",
  },
  {
    id: "b6",
    date: "January 26, 2023",
    title:
      "Designing and implementing a voice-controlled roller blind [Part-2]",
    from: "Medium",
    link: "https://samyak970.medium.com/designing-and-implementing-a-voice-controlled-roller-blind-part-2-a726b7ed7887",
  },
  {
    id: "b5",
    date: "January 26, 2023",
    title:
      "Designing and implementing a voice-controlled roller blind [Part-1]",
    from: "Medium",
    link: "https://medium.com/the-modern-scientist/designing-and-implementing-a-voice-controlled-roller-blind-part-1-82e8014317f0",
  },
  {
    id: "b4",
    date: "January 23, 2023",
    title: "YOLOv8 training on Custom Data! [PCB-Defect-Detection]",
    from: "Medium",
    color: "#EFDADA",
    link: "https://medium.com/the-modern-scientist/yolov8-training-on-custom-data-3460f922ce86",
  },
  {
    id: "b3",
    date: "January 17, 2023",
    title: "YOLOv8 The new State Of The Art Detector?",
    from: "Medium",
    link: "https://samyak970.medium.com/yolov8-the-new-state-of-the-art-detector-89f627ad17aa",
  },
  {
    id: "b2",
    date: "January 12, 2023",
    title: "Training a YOLOv7 Model using Custom Dataset",
    from: "Medium",
    link: "https://samyak970.medium.com/training-a-yolov7-model-using-custom-dataset-8300107cb81b",
  },
  {
    id: "b1",
    date: "June 10, 2022",
    title: "IoT Protocols",
    from: "Medium",
    link: "https://samyak970.medium.com/iot-protocols-332626439aec",
  },
];

const Blogs = () => {
  return (
    <Box
      boxShadow="md"
      maxW={"full"}
      borderRadius="13px"
      color="#f5f5f5"
      mb={10}
    >
      <Grid
        templateColumns={{
          base: "auto",
          sm: "auto",
          md: " auto",
          lg: "auto auto",
        }}
        gap={5}
      >
        {BlogData.map((blog, index) => (
          <GridItem key={blog.id}>
            <BlogCard
              date={blog.date}
              title={blog.title}
              from={blog.from}
              link={blog.link}
              color={colorPalette[index % colorPalette.length]}
            />
          </GridItem>
        ))}
      </Grid>

      {/* <VStack maxW={"full"}>
        <BlogCard />
        <BlogCard />
      </VStack> */}
    </Box>
  );
};

export default Blogs;

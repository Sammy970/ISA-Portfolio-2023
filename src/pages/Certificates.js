import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import CertificateCard from "../components/CertificateCard/CertificateCard";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const CertificateData = [
  {
    id: "c1",
    from: "Coursera",
    title: "Meta Front-End Developer Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WQVBGVFF9JE6",
  },
  {
    id: "c2",
    from: "Coursera",
    title: "Advanced React",
    link: "https://www.coursera.org/account/accomplishments/certificate/Y82LJARS9ZV7",
  },
  {
    id: "c3",
    from: "Coursera",
    title: "React Basics",
    link: "https://www.coursera.org/account/accomplishments/certificate/ZC854WR8C9DK",
  },
  {
    id: "c4",
    from: "Coursera",
    title: "Principles of UX/UI Design",
    link: "https://www.coursera.org/account/accomplishments/certificate/ND3NW5B8KUTK",
  },
  {
    id: "c5",
    from: "Coursera",
    title: "Version Control",
    link: "https://www.coursera.org/account/accomplishments/certificate/4ZDDLVM3KZJ2",
  },
  {
    id: "c6",
    from: "Coursera",
    title: "Programming with JavaScript",
    link: "https://www.coursera.org/account/accomplishments/certificate/75VENDEFAF8A",
  },
  {
    id: "c7",
    from: "Coursera",
    title: "HTML and CSS in depth",
    link: "https://www.coursera.org/account/accomplishments/certificate/2DQ79KBZYWXU",
  },
  {
    id: "c8",
    from: "Coursera",
    title: "React Native",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WQVBGVFF9JE6",
  },
];

const Certificates = () => {
  return (
    <Box boxShadow="md" borderRadius="13px" color="#f5f5f5" mb={10}>
      <Text ml={3} mb={3} fontSize="25px" fontFamily="google-sans-bold">
        Certificates
      </Text>
      <Grid
        templateColumns={{
          base: "auto",
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
        }}
        gap={10}
      >
        {CertificateData.map((certi, index) => (
          <GridItem key={certi.id}>
            <CertificateCard
              from={certi.from}
              title={certi.title}
              link={certi.link}
              color={colorPalette[index % colorPalette.length]}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificates;

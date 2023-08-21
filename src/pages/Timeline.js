import React from "react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from "@mui/lab";

import TimelineCard from "../components/TimelineCard/TimelineCard";

import { Text } from "@chakra-ui/react";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const TimelineData = [
  {
    year: "2023",
    data: [
      "Built my own portfolio website from scratch",
      "Present my Paper in IEEE Conference",
      "Learnt ReactJS Basics by META",
      "Enrolled in multiple Coursera courses for “Front-End Web Development",
      "Wrote my First Technical Blog on Medium.com",
    ],
  },
  {
    year: "2022",
    data: [
      "Volunteered as a Database Co-ordinator for ISA (International Society of Automation).",
      "Participated in a social event Utkarsh under VIT SOCIAL and WELFARE Department",
    ],
  },
  {
    year: "2021",
    data: [
      "Participated in State Level Project Competition (TECHNOMELA - 2021)",
      "Secured First Rank in Business Ideathon (Polyspark 2021)",
      "Ranked first again in my department in college",
    ],
  },
  {
    year: "2020",
    data: [
      "Winner in 9th Techno-Gurupoornima Online Project Competition",
      "Participated in pre-qualifier round of International Space App Challenge",
      "Participated in State Level Technical Paper Presentation (Pravinya 2020)",
    ],
  },
  {
    year: "2019",
    data: [
      "Ranked first in my department in college",
      "Runner up in State Level Technical Paper Presentation (Technocratz 2019)",
      "Secured third rank in Sketch Competition in Polyspark-2019",
    ],
  },
];

const TimelinePage = () => {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.25,
        },
      }}
    >
      {TimelineData.map((item) => (
        <TimelineItem key={item.year}>
          <TimelineOppositeContent
            fontFamily={"google-sans-medium"}
            color={"#FFFFFF"}
            alignSelf={"center"}
            fontSize={18}
          >
            <Text textAlign={"center"}>{item.year}</Text>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            {item.data.map((event, index) => (
              <TimelineCard
                key={index}
                content={event}
                color={colorPalette[index % colorPalette.length]}
              />
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelinePage;

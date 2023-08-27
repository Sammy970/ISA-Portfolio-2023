import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import TeamDetailCard from "../components/TeamDetailCards/TeamDetailCard";

const TeamDetail = () => {
  const data = useLoaderData().members;
  // Accessing members
  // data.members[0].name / photo / id
  const { team, members } = data;
  return (
    <>
      <Text
        fontFamily={"'Work Sans', sans serif"}
        fontWeight={700}
        fontSize={40}
        mb={10}
      >
        {team}
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "40% 40%",
        }}
        m={"auto"}
        justifyContent={"center"}
        gap={10}
      >
        {members.map((data) => (
          <GridItem key={data.id}>
            <TeamDetailCard name={data.name} photo={data.photo} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default TeamDetail;

export function loader({ params }) {
  const teamId = params.teamId;

  const teamData = [
    {
      id: "core",
      team: "Core Team",
      members: [
        {
          id: "coreM1",
          name: "Krushna More",
          position: "President",
          photo: "/TeamData/Core/krushna.png",
        },
        {
          id: "coreM2",
          name: "Sanskruti Shimple",
          position: "Vice President",
          photo: "/TeamData/Core/sanskruti.png",
        },
        {
          id: "coreM3",
          name: "Vedhas Talnikar",
          position: "Secretary",
          photo: "/TeamData/Core/vedhas.png",
        },
        {
          id: "coreM4",
          name: "Nimisha Chitriv",
          position: "Joint Secretary",
          photo: "/TeamData/Core/nimisha.png",
        },
        {
          id: "coreM5",
          name: "Jash",
          position: "Joint Secretary",
          photo: "/TeamData/Core/jash.png",
        },
        {
          id: "coreM6",
          name: "Yash",
          position: "Joint Secretary",
          photo: "/TeamData/Core/yash.png",
        },
      ],
    },
    {
      id: "webdev",
      team: "Web Development Team",
      members: [
        {
          id: "webM1",
          name: "Samyak Jain",
          position: "Head",
          photo: "/TeamData/WebDev/samyak.png",
        },
        {
          id: "webM2",
          name: "Parag Purandare",
          position: "Head",
          photo: "/TeamData/WebDev/parag.png",
        },
        {
          id: "webM3",
          name: "Abaan Tamboli",
          position: "Head",
          photo: "/TeamData/WebDev/abaan.png",
        },
      ],
    },
  ];

  const SelectedTeamDetailData = teamData.find((tData) => tData.id === teamId);

  return {
    members: SelectedTeamDetailData,
  };
}

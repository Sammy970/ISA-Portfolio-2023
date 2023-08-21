import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProjectDetailCard from "../components/ProjectDetailCard/ProjectDetailCard";

const ProjectDetail = () => {
  const data = useLoaderData();

  const { title, techUsed, desc, image, style, linkToWeb } = data;

  return (
    <ProjectDetailCard
      title={title}
      techUsed={techUsed}
      desc={desc}
      image={image}
      style={style}
      linkToWeb={linkToWeb}
    />
  );
};

export default ProjectDetail;

export function loader({ params }) {
  const projectId = params.projectId;

  const ProjectDetailsData = [
    {
      id: "linkedin-post-maker",
      title: "LinkedIn Post Maker",
      techUsed: ["ReactJS", "Tailwind CSS", "Express JS", "OpenAI API"],
      desc: `Elevate your LinkedIn presence with the LinkedIn Post Maker - a dynamic tool leveraging OpenAI's gpt-3.5-turbo-16k model. Simplify post creation through predefined categories like Certifications, Publications, and Internships, or seamlessly craft posts on unique subjects. The user-friendly interface ensures ease of use, while a "Copy" button expedites content transfer. Hosted securely, this tool redefines LinkedIn engagement.`,
      image: [
        "/project-image-assets/project1/linkedinPostMaker_1.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_2.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_3.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_4.jpeg",
      ],
      style: "columns",
      linkToWeb: "https://postit.is-an.app/",
    },
    {
      id: "link-kar",
      title: "Link - Kar",
      techUsed: [
        "ReactJS",
        "Chakra UI",
        "Express JS",
        "MongoDB",
        "NodeJS",
        "API",
      ],
      desc: `Introducing Link-kar, a project designed to simplify link sharing. Experience the innovation of Smart Links, which effortlessly direct users to apps instead of browsers. Enhance user engagement with insightful analytics, ensure security through Google signup, and enjoy the benefits of compact, personalized links. Powered by cloud-based MongoDB, Link-kar offers a streamlined approach to link sharing and interaction.`,
      image: [
        "/project-image-assets/project2/linkkar_1.png",
        "/project-image-assets/project2/linkkar_2.png",
        "/project-image-assets/project2/linkkar_3.png",
        "/project-image-assets/project2/linkkar_4.png",
        "/project-image-assets/project2/linkkar_5.png",
        "/project-image-assets/project2/linkkar_6.png",
        "/project-image-assets/project2/linkkar_7.png",
        "/project-image-assets/project2/linkkar_8.png",
      ],
      style: "columns",
      linkToWeb: "https://linkkar.vercel.app/",
    },
    {
      id: "study-mate",
      title: "StudyMate",
      techUsed: ["NodeJS", "EJS", "Express JS", "MongoDB"],
      desc: `StudyMate, is an E-Library Project designed to empower students with a seamless e-learning experience. Offering a rich collection of Question Papers, Syllabus, and Notes spanning various college branches, StudyMate simplifies resource discovery. With intuitive filters, students can effortlessly navigate content by semester, year, and branch. The platform's secure foundation, powered by MongoDB ATLAS on the cloud, ensures data safety while enabling direct PDF interaction - whether for downloads or on-site viewing. For administrators, an easy-to-use interface facilitates efficient PDF management, ensuring the library remains updated. StudyMate is the embodiment of efficient e-learning, delivering knowledge at your fingertips.`,
      image: [
        "/project-image-assets/project3/studymate_1.png",
        "/project-image-assets/project3/studymate_2.png",
        "/project-image-assets/project3/studymate_3.png",
        "/project-image-assets/project3/studymate_4.png",
      ],
      style: "rows",
      linkToWeb: "https://test-dbms-proj.onrender.com/",
    },
    {
      id: "pdf-guardian",
      title: "PDF Guardian",
      techUsed: [
        "EJS",
        "BootStrap CSS",
        "HTML",
        "CSS",
        "FLASK",
        "Python",
        "MongoDB",
      ],
      desc: `PDF Guardian introduces a novel approach to fortify PDF file security. Through innovative measures like unique metadata keys, concealed image overlays, and secure database storage, the system bolsters data integrity. Users can effortlessly apply checks to PDFs, ensuring authenticity, and verify them later. PDF Guardian stands as a reliable solution for enhancing PDF security, catering to individuals and businesses seeking to safeguard their digital content.`,
      image: [
        "/project-image-assets/project4/pdfGuardian_1.png",
        "/project-image-assets/project4/pdfGuardian_2.png",
        "/project-image-assets/project4/pdfGuardian_3.png",
        "/project-image-assets/project4/pdfGuardian_4.png",
        "/project-image-assets/project4/pdfGuardian_5.png",
        "/project-image-assets/project4/pdfGuardian_6.png",
      ],
      style: "columns",
      linkToWeb: "https://cn-project.onrender.com/",
    },
    {
      id: "samyakgpt-ui",
      title: "SamyakGPT UI",
      techUsed: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "OpenAI GPT API",
        "ChimeraGPT AI",
        "HTML",
        "CSS",
      ],
      desc: `Meet SamyakGPT UI, a user-friendly interface designed to harness the power of OPENai's GPT API seamlessly. This intuitive UI provides effortless access to various GPT models, coupled with practical plugins including web search, prompt perfection, and link integration. Offering an array of capabilities, from rendering code blocks to displaying images, the UI empowers users to achieve diverse tasks. Its simplicity allows anyone with an OpenAI key to tap into AI potential. With memory functionality in place, the UI recalls previous interactions, enabling human-like responses with context. SamyakGPT-UI transcends AI interaction into an intuitive and intelligent experience.`,
      image: [
        "/project-image-assets/project5/samyakgptUI_1.png",
        "/project-image-assets/project5/samyakgptUI_2.png",
        "/project-image-assets/project5/samyakgptUI_3.png",
        "/project-image-assets/project5/samyakgptUI_4.png",
        "/project-image-assets/project5/samyakgptUI_5.png",
        "/project-image-assets/project5/samyakgptUI_6.png",
        "/project-image-assets/project5/samyakgptUI_7.png",
      ],
      style: "columns",
      linkToWeb: "https://samyakgptui.is-an.app/",
    },
    {
      id: "text-utils",
      title: "Text Utils",
      techUsed: ["ReactJS", "BootStrap CSS", "HTML", "CSS"],
      desc: `Text-Utils, my debut ReactJS app, simplifies text editing. Seamlessly convert text cases, fix capitalization, and clear content. Beyond editing, it provides valuable text insights including word and character counts, reading time, and previews. With an option for light or dark mode, Text-Utils adapts to your preference. Additionally, Google login support adds personalization, making it a versatile tool for hassle-free text tasks and analysis.`,
      image: [
        "/project-image-assets/project6/textutils_1.png",
        "/project-image-assets/project6/textutils_2.png",
        "/project-image-assets/project6/textutils_3.png",
        "/project-image-assets/project6/textutils_4.png",
        "/project-image-assets/project6/textutils_5.png",
      ],
      style: "columns",
      linkToWeb: "https://sammy-textutils.vercel.app/",
    },
  ];

  const SelectedProjectDetailData = ProjectDetailsData.find(
    (projData) => projData.id === projectId
  );

  if (!SelectedProjectDetailData) {
    throw json(
      { message: "Could not fetch project details for selected project!" },
      {
        status: 404,
      }
    );
  }

  const { title, techUsed, desc, image, style, linkToWeb } =
    SelectedProjectDetailData;

  return {
    title,
    techUsed,
    desc,
    image,
    style,
    linkToWeb,
  };
}

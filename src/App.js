import React from "react";

import { Container } from "@chakra-ui/react";
import "./App.css";
import About from "./pages/About";
import { inject } from "@vercel/analytics";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects";
import RootLayout from "./pages/Root";
import ProjectDetail, {
  loader as projectDetailLoader,
} from "./pages/ProjectDetail";
import ErrorPage from "./pages/Error";
import Team from "./pages/Team";
import TeamDetail, { loader as TeamDetailLoader } from "./pages/TeamDetail";
import IV from "./pages/IV";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/projects",
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectId",
            element: <ProjectDetail />,
            loader: projectDetailLoader,
          },
        ],
      },
      { path: "/iv", element: <IV /> },
      {
        path: "/team",
        children: [
          { index: true, element: <Team /> },
          {
            path: ":teamId",
            element: <TeamDetail />,
            loader: TeamDetailLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  inject();

  return (
    <div className="App">
      <Container maxW={"90%"} className="App">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;

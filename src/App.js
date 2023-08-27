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
import IV from "./pages/IV";
import React from "react";
import Team from "./pages/Team";

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
      { path: "/team", element: <Team /> },
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

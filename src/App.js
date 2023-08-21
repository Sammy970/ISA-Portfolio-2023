import { Container } from "@chakra-ui/react";
import "./App.css";
import About from "./pages/About";
import { inject } from "@vercel/analytics";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Certificates from "./pages/Certificates";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import RootLayout from "./pages/Root";
import ProjectDetail, {
  loader as projectDetailLoader,
} from "./pages/ProjectDetail";
import ErrorPage from "./pages/Error";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Timeline from "./pages/Timeline";
import Skills from "./pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <About /> },
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
      { path: "/blogs", element: <Blogs /> },
      { path: "/certificates", element: <Certificates /> },
      {
        path: "/timeline",
        element: (
          <ThemeProvider theme={theme}>
            <Timeline />
          </ThemeProvider>
        ),
      },
      { path: "/skills", element: <Skills /> },
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

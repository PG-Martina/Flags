import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "details/:flagName", element: <Details /> },
      ],
    },
  ]);

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

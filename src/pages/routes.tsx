import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "@/pages/Home/Home.page"
import { AuthPage } from "@/pages/Auth/Auth.page"

export const URLS = {
  root: "/",
  auth: "/auth",
}

export const routes = createBrowserRouter([
  {
    path: URLS.root,
    element: <HomePage />,
  },
  {
    path: URLS.auth,
    element: <AuthPage />,
  },
])

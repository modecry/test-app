import { Route, Routes } from "react-router-dom"
import { HomePage } from "@/pages/Home/Home.page"
import { AuthPage } from "@/pages/Auth/Auth.page"

export const URLS = {
  root: "/",
  auth: "/auth",
}

export const routes = [
  {
    path: URLS.root,
    element: <HomePage />,
  },
  {
    path: URLS.auth,
    element: <AuthPage />,
  },
]

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

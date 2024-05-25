import { AuthLayout, HomeLayout } from "@/layouts"
import { Home, Login, News } from "@/pages"
import { Routes, Route } from "react-router-dom"

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router

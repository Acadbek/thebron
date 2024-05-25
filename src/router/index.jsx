import { AuthLayout, HomeLayout } from "@/layouts"
import { Home, News, Login } from "./lazy"
import { Routes, Route } from "react-router-dom"
import { Suspense } from "react"

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={
            <Suspense>
              <Home />
            </Suspense>
          } />
          <Route path="/news" element={
            <Suspense>
              <News />
            </Suspense>
          } />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={
            <Suspense>
              <Login />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default Router

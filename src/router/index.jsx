import { AuthLayout, HomeLayout } from "@/layouts"
import { Home, News, Login } from "./lazy"
import { Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import DetailsPage from "@/pages/home/details"
import Loader from "@/components/shared/loader"
import Nmadur from "@/components/shared/nmadur"

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          } />
          <Route path=":id" element={<DetailsPage />} />
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
            
        <Nmadur/>    
        
    </>
  )
}

export default Router

import Header from "@/components/shared/header"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default HomeLayout

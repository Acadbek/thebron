import { AuthLayout, HomeLayout } from "@/layouts";
import { Home, News, Login, Bron } from "./lazy";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import DetailsPage from "@/pages/home/details";
import Loader from "@/components/shared/loader";
import Account from "@/pages/account";
import PersonalInformation from "@/pages/account/personal-information";
import LoginAndSecurity from "@/pages/account/login-and-security";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route
            index
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

          <Route path="/resorts/:id" element={<DetailsPage />} />

          <Route
            path="/news"
            element={
              <Suspense fallback={<Loader />}>
                <News />
              </Suspense>
            }
          />

          <Route
            path="/account"
            element={
              <Suspense fallback={<Loader />}>
                <Account />
              </Suspense>
            }
          />

          <Route
            path="/account/personal-information"
            element={
              <Suspense fallback={<Loader />}>
                <PersonalInformation />
              </Suspense>
            }
          />

          <Route
            path="/account/login-and-security"
            element={
              <Suspense fallback={<Loader />}>
                <LoginAndSecurity />
              </Suspense>
            }
          />

          <Route
            path="/account/personal-information/:id"
            element={
              <Suspense fallback={<Loader />}>
                <PersonalInformation />
              </Suspense>
            }
          />

          <Route
            path="resorts/:id/bron"
            element={
              <Suspense fallback={<Loader />}>
                <Bron />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

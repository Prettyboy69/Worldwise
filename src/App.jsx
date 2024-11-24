import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CitiesProvider } from "./Contexts/ContextCities";
import { Authcontext } from "./Contexts/Authcontext";
import ProtectedRoute from "./Page/ProtectedRoute";

import CityList from "./Component/CityList";

import CountryList from "./Component/CountryList";
import City from "./Component/City";
import Form from "./Component/Form";
import SpinnerFullPage from "./Component/SpinnerFullPage";

// import Product from "./Page/Product";
// import Homepage from "./Page/Homepage";
// import Pricing from "./Page/Pricing";
// import PageNotFound from "./Page/PageNotFound";
// import AppLayout from "./Page/AppLayout";
// import Login from "./Page/Login";
// import { useEffect, useState } from "react";
const Homepage = lazy(() => import("./Page/Homepage"));
const Product = lazy(() => import("./Page/Product"));
const Pricing = lazy(() => import("./Page/Pricing"));
const AppLayout = lazy(() => import("./Page/AppLayout"));
const Login = lazy(() => import("./Page/Login"));
const PageNotFound = lazy(() => import("./Page/PageNotFound"));

const App = () => {
  return (
    <div>
      <Authcontext>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="Pricing" element={<Pricing />} />
                <Route path="Login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />

                  <Route path="Cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="Countries" element={<CountryList />} />
                  <Route path="Form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </Authcontext>
    </div>
  );
};

export default App;

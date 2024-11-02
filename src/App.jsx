import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./Page/Product";
import Homepage from "./Page/Homepage";
import Pricing from "./Page/Pricing";
import PageNotFound from "./Page/PageNotFound";
import AppLayout from "./Page/AppLayout";
import Login from "./Page/Login";
import CityList from "./Component/CityList";
// import { useEffect, useState } from "react";
import CountryList from "./Component/CountryList";
import City from "./Component/City";
import Form from "./Component/Form";
import { CitiesProvider } from "./Contexts/ContextCities";
import { Authcontext } from "./Contexts/Authcontext";
import ProtectedRoute from "./Page/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Authcontext>
        <CitiesProvider>
          <BrowserRouter>
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
          </BrowserRouter>
        </CitiesProvider>
      </Authcontext>
    </div>
  );
};

export default App;

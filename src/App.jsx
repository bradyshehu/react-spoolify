import { useState } from "react";
import reactLogo from "./assets/img/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";
import GenresPage from "./pages/GenresPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/genres" element={<GenresPage />} />
          </Route>
          {/* RICORDA IMPORT DI DefaultLayout E DELLE ALTRE PAGINE, QUESTA É SOLO STRUTTURA DI BASE */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

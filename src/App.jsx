import { useState } from "react";
import reactLogo from "./assets/img/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";
import GenresPage from "./pages/GenresPage";
import DefaultLayout from "./layouts/DefaultLayout";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import GenreDetailPage from "./pages/GenreDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/albums/:albumId" element={<AlbumDetailPage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/genres/:genreId" element={<GenreDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* RICORDA IMPORT DI DefaultLayout E DELLE ALTRE PAGINE, QUESTA É SOLO STRUTTURA DI BASE */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

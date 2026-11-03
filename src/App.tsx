/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { About } from "./pages/About";
import { Artwork } from "./pages/Artwork";
import { Submissions } from "./pages/Submissions";
import { Contact } from "./pages/Contact";
import { Issues } from "./pages/Issues";
import { Contributors } from "./pages/Contributors";
import { ContributorDetail } from "./pages/ContributorDetail";
import { Chronicle } from "./pages/Chronicle";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/issues/:slug" element={<Issues />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/contributors/:slug" element={<ContributorDetail />} />
          <Route path="/chronicle" element={<Chronicle />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/photography" element={<Artwork />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import ProjectsOverview from "./pages/ProjectsOverview";
import ScrollToTop from "./components/utilities/ScrollToTop";


function App ()
{
  const [ headerHeight, setHeaderHeight ] = useState( 0 );

  // Dynamically set scroll-padding-top on the HTML element
  useEffect( () =>
  {
    if ( headerHeight )
    {
      document.documentElement.style.scrollPaddingTop = `${ headerHeight }px`;
    }
  }, [ headerHeight ] );

  return (
    <>
      <Header setHeaderHeight={ setHeaderHeight } />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home headerHeight={headerHeight} />} />
        <Route path="/projects" element={<ProjectsOverview />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
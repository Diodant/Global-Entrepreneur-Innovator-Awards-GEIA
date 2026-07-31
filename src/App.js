import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import Nominations from './components/Nominations';
import Regulations from './components/Regulations';
import InternationalJuryCriteria from './components/InternationalJuryCriteria';
import Winners from './components/Winners';
import NewsPage from "./components/NewsPage";
import Jury from './components/Jury';
import Footer from './components/Footer';
import Seo from './components/Seo';
import './css/_static_1.css';
import './css/_static_2.css';
import './css/_static.css';
import './css/app.66cfb4ec.min.css';
import './css/related-posts-block-styles.min.css';
import './css/style-index.css';
import './css/style.min.css';
import './css/tablepress-combined.min.css';
import './css/print-footer.css';

function PrintPageMetadata() {
  const location = useLocation();
  const pageUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
  const cssUrl = JSON.stringify(pageUrl).replace(/</g, "\\3C ");

  return (
    <style>{`
      @media print {
        @page {
          size: auto;
          margin: 1.2cm 0.7cm 1.5cm;

          @top-left { content: none; }
          @top-center { content: none; }
          @top-right { content: none; }

          @bottom-left {
            content: ${cssUrl};
            font-family: Arial, Helvetica, sans-serif;
            font-size: 8pt;
            color: #000;
          }

          @bottom-right {
            content: counter(page) "/" counter(pages);
            font-family: Arial, Helvetica, sans-serif;
            font-size: 8pt;
            color: #000;
          }
        }
      }
    `}</style>
  );
}

function App() {
  return (
    <Router>
      <div >
        <Seo />
        <Navigation />
        <Routes>
           <Route path="/" element={<MainContent />} />
           <Route path="/nominations" element={<Nominations />} />
           <Route path="/jurycriteria" element={<InternationalJuryCriteria />} />
           <Route path="/winners" element={<Winners />} />
           <Route path="/jury" element={<Jury />} />
                   <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsPage />} />
           <Route path="/regulations" element={<Regulations />} />
         {/* 
          <Route path="/winners" element={<Win />} />
          <Route path="/ratings" element={<CriteriaRating />} />
          <Route path="/position" element={<Position />} />
          
          <Route path="/lastjury" element={<LastJury />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/contacts" element={<Contacts />} />  */}
        </Routes>
        <Footer />
        <PrintPageMetadata />
      </div>
    </Router>
  );
}

export default App;

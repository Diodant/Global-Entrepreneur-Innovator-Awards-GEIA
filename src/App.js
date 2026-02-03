import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import Nominations from './components/Nominations';
import Regulations from './components/Regulations';
import InternationalJuryCriteria from './components/InternationalJuryCriteria';
import Winners from './components/Winners';
import Jury from './components/Jury';
import Footer from './components/Footer';
import './css/_static_1.css';
import './css/_static_2.css';
import './css/_static.css';
import './css/app.66cfb4ec.min.css';
import './css/related-posts-block-styles.min.css';
import './css/style-index.css';
import './css/style.min.css';
import './css/tablepress-combined.min.css';
function App() {
  return (
    <Router>
      <div >
        <Navigation />
        <Routes>
           <Route path="/" element={<MainContent />} />
           <Route path="/nominations" element={<Nominations />} />
           <Route path="/jurycriteria" element={<InternationalJuryCriteria />} />
           <Route path="/winners" element={<Winners />} />
           <Route path="/jury" element={<Jury />} />
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
      </div>
    </Router>
  );
}

export default App;

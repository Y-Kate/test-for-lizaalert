// import '.normalize.css';
// import logo from './logo.svg';
import './App.css';
import '../fonts/fonts.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NewsPage from './NewsPage';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [newsFullData, setNewsFullData] = useState({});

  
  return (
    <div className="page">

      <Route exact path="/">
        <Header/>
        <Main newsFullData={newsFullData} setNewsFullData={setNewsFullData}/>
        <Footer/>
      </Route>
      <Route path="/news/:newsId">
        <Header/>
        <NewsPage newsFullData={newsFullData}/>
        <Footer/>
      </Route>
    </div>
  );
}

export default App;

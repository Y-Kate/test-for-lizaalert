import './App.css';
import '../fonts/fonts.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NewsPage from './NewsPage';
import { Route } from 'react-router-dom';

function App() {  
  return (
    <div className="page">
      <Route exact path="/">
        <Header/>
        <Main/>
        <Footer/>
      </Route>
      <Route path="/news/:newsId">
        <Header/>
        <NewsPage/>
        <Footer/>
      </Route>
    </div>
  );
}

export default App;

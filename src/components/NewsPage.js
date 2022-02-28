import './NewsPage.css';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getDateNews } from '../utils/utils';
import api from '../utils/Api';

// import './Header.css';

function NewsPage ({newsFullData}) {
  const { newsId } = useParams();
  const [currentNews, setCurrentNews] = useState({})

  useEffect(() => {
    setCurrentNews(newsFullData[newsId])
  }, [])


    api.getCommentNews(newsId)
      .then((res) => {
        console.log(res.text);
        // setNewsCard(res);
        // const fullData = newsFullData;
        // fullData[id] = res;
        // setNewsFullData(fullData)
      })
      .catch((err) => console.log(err))

  
  return (
    <div className="page-news">
        <div className="page-news__novigation">
          <a className="page-news__link" href={currentNews.url}>
          Перейти к первоисточнику.
          </a>
          <button className="page-news__button-back">вернуться к новостям</button>
        </div>  
      <h1 className="page-news__title">
        {currentNews.title}
      </h1>
      <div className="page-news__data">
        <p className="page-news__date">{getDateNews(currentNews.time)}</p>
        <p className="page-news__author">Автор: {currentNews.by}</p>
      </div>
      <div className="page-news__rank">Комментариев: {currentNews.descendants}</div>
      <section className="page-news__comments">
        Комменты
      </section>
    </div>
  );
}

export default NewsPage;
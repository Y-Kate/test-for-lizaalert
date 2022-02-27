import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import './News.css';
import { Link } from 'react-router-dom';
import { getDateNews } from '../utils/utils'


function News ( {id, newsFullData, setNewsFullData} ) {

  const [ newsCard, setNewsCard] = useState({});

  useEffect(() =>{
  api.getOneNews(id)
    .then((res) => {
      setNewsCard(res);
      const fullData = newsFullData;
      fullData[id] = res;
      setNewsFullData(fullData)
    })
    .catch((err) => console.log(err))
  }, [])

  

   return (
    <li className="marcer">
      <article className="news">
        <Link to={`/news/${id}`}>
          <h1 className="news__title"> {newsCard.title && newsCard.title} </h1>
        </Link>
          <div className="news__info">
          <p className="news__rating"> Рейтинг: {newsCard.score && newsCard.score}</p>
          <p className="news__author"> Автор: {newsCard.by && newsCard.by}</p>
          <time className="news__date">{getDateNews(newsCard.time)}</time>
        </div>
      </article>
    </li>
  )
}

export default News;
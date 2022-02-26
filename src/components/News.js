import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import './News.css';

function News ( {id} ) {

  const [ newsCard, setNewsCard] = useState({});

  useEffect(() =>{
  api.getOneNews(id)
    .then((res) => {
      setNewsCard(res);
      console.log(res)
    })
    .catch((err) => console.log(err))
  }, [])

  function getDateNews() {
    if (newsCard.time) {
      const date = new Date(newsCard.time * 1000);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formatedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
      return formatedDate
    }
  }

   return (
    <li className="marcer">
      <article className="news">
        <h1 className="news__title"> {newsCard.title && newsCard.title} </h1>
        <div className="news__info">
          <p> Рейтинг: {newsCard.score && newsCard.score}</p>
          <p> Автор: {newsCard.by && newsCard.by}</p>
          <time>{getDateNews()}</time>
        </div>
      </article>
    </li>
  )
}

export default News;
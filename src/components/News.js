import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import './News.css';
import { Link } from 'react-router-dom';
import { getDateNews } from '../utils/utils'

function News ( {id, index} ) {

  const [ newsCard, setNewsCard] = useState({});

  useEffect(() =>{
    api.getOneNews(id)
      .then((res) => {
        setNewsCard(res);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <li className="news">
      <h2 className="news__title">{index + 1}. <Link to={`/news/${id}`}>{newsCard.title && newsCard.title}</Link></h2>
      <div className="news__info">
        <p className="news__rating">Рейтинг: {newsCard.score && newsCard.score}</p>
        <p className="news__author">Автор: {newsCard.by && newsCard.by}</p>
        <time className="news__date">{getDateNews(newsCard.time)}</time>
      </div>
    </li>
  )
}

export default News;
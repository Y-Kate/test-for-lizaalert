import './NewsPage.css';
import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getDateNews } from '../utils/utils';
import Comment from './Comment';
import api from '../utils/Api';

function NewsPage () {
  const { newsId } = useParams();
  const [currentNews, setCurrentNews] = useState({})
  const history = useHistory();

  useEffect(() => {
    api.getOneNews(newsId)
      .then((res) => {
        setCurrentNews(res);
      })
      .catch((err) => console.log(err))
  }, [newsId])

  function handleClickReturn () {
    history.push('/');
  }
  
  return (
    <div className="page-news">
        <div className="page-news__novigation">
          {currentNews.url 
            ? <a className="page-news__link" href={currentNews.url} target="_blank" rel="noreferrer">
                Перейти к первоисточнику
              </a>
            : <p className="page-news__text">Нет ссылки на источник</p>
          }
          <button className="page-news__button-back" type="button" aria-label="Назад" onClick={handleClickReturn}>Вернуться</button>
        </div>  
      <h1 className="page-news__title">
        {currentNews.title}
      </h1>
      <div className="page-news__info">
        <p className="page-news__info-text">{getDateNews(currentNews.time)}</p>
        <p className="page-news__info-text">Автор: {currentNews.by}</p>
      </div>
      <div className="page-news__rank">Комментариев: {currentNews.descendants}</div>
      <section className="page-news__comments">
        <ul className="comment-list">
          {currentNews.kids && Object.keys(currentNews).length > 0 && currentNews.kids.length > 0 && currentNews.kids.map((commentId) => <Comment key={commentId} commentId={commentId} />)}
        </ul>
      </section>
    </div>
  );
}

export default NewsPage;
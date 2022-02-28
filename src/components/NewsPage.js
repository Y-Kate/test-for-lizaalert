import './NewsPage.css';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getDateNews } from '../utils/utils';
import api from '../utils/Api';

// import './Header.css';

function NewsPage ({newsFullData}) {
  const { newsId } = useParams();
  const [currentNews, setCurrentNews] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (newsFullData[newsId]) setCurrentNews(newsFullData[newsId])
    else {
      api.getOneNews(newsId)
        .then((res) => {
          setCurrentNews(res);
        })
        .catch((err) => console.log(err))
    }
  }, [])

useEffect(() => {
  if (Object.keys(currentNews).length > 0 && comments.length === 0) {
    const commentsArr = [];
    currentNews.kids.forEach((id) => {
      api.getCommentNews(id)
      .then((res) => {
        commentsArr.push(res)
        // setNewsCard(res);
        // const fullData = newsFullData;
        // fullData[id] = res;
        // setNewsFullData(fullData)
      })
      .catch((err) => console.log(err))  
    })
    setComments(commentsArr);
    console.log('2222',commentsArr);
  }
}, [currentNews])

useEffect(() => {
  console.log("1111", comments);

}, [comments])
  
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
        <ul>
          <li className="comments__list">{comments.length}</li>
          {comments.map((comment, i) => <li className="comments__list">{comment.text}</li>)}
        </ul>
      </section>
    </div>
  );
}

export default NewsPage;
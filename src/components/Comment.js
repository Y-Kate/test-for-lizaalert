import { useEffect, useState, useRef } from "react";
import api from '../utils/Api';
import { getDateNews } from '../utils/utils';
import './Comment.css';

function Comment({ commentId }) {
  const [commentData, setCommentData] = useState({})
  const commentRef = useRef();

  useEffect(() => {

  api.getCommentNews(commentId)
    .then((res) => {
      setCommentData(res);
      commentRef.current.innerHTML = res.text;
    })
    .catch((err) => console.log(err))  
  }, [])

  return (
    <li className="comment">
      <div className="comment__data">
        <p className="comment__info">
          {commentData.by}
        </p>
        <p className="comment__info">{getDateNews(commentData.time)}</p>
      </div>
      <div className="comment__text" ref={commentRef}>
      </div>
      {commentData.kids && commentData.kids.length > 0 &&
        <ul className="comment-list-inside">
          {commentData.kids.map((k) => <Comment commentId={k}/>)}
        </ul>
      }
    </li>
  )
}

export default Comment;
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
                console.log(res)
                setCommentData(res);
                commentRef.current.innerHTML = res.text;
            })
            .catch((err) => console.log(err))  
    }, [])

    return (
        <li className="coment">
            <div className="coment__data">
                <p className="coment__info">
                {/* {commentData.parent} {commentData.kids} */}
                {commentData.by}
                </p>
                <p className="coment__info">{getDateNews(commentData.time)}</p>
            </div>
            <div className="coment__text" ref={commentRef}>
            </div>
            {commentData.kids && commentData.kids.length > 0 &&
                <ul>
                    {commentData.kids.map((k) => <Comment commentId={k} />)}
                </ul>
            }
        </li>
    )
}

export default Comment;
import { useEffect, useState } from "react";
import api from '../utils/Api';
import { getDateNews } from '../utils/utils';


function Comment({ commentId }) {
    const [commentData, setCommentData] = useState({})

    useEffect(() => {
        console.log("Компонент дид маунт");

        api.getCommentNews(commentId)
            .then((res) => {
                console.log(res)
                setCommentData(res);
            })
            .catch((err) => console.log(err))  
    }, [])

    return (
        <li className="coment__text">
            <div>
                <p>
                {commentData.parent} {commentData.kids}
                </p>
                <p>{getDateNews(commentData.time)}</p>
            </div>
            {commentData.text}
            {commentData.kids && commentData.kids.length > 0 &&
                <ul>
                    {commentData.kids.map((k) => <Comment commentId={k} />)}
                </ul>
            }
          </li>
    )
}

export default Comment;
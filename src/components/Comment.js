import { useEffect, useState } from "react";
import api from '../utils/Api';

function Comment({ commentId }) {
    const [commentData, setCommentData] = useState({})
    
    useEffect(() => {
        console.log("Компонент дид маунт");

        api.getCommentNews(commentId)
            .then((res) => {
                setCommentData(res);
            })
            .catch((err) => console.log(err))  
    }, [])

    return <div>{commentData.text}</div>
}

export default Comment;
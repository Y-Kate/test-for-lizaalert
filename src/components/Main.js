import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import './Main.css';
import News from './News';

function Main () {

  const [newsIdArray, setNewsIdArray] = useState([]);

  useEffect(() => {
    api.getNewsIds()
    .then((res) => {
      setNewsIdArray(res.splice(0,4))
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <section className="main">
      <ol className="main__news-list">
        {newsIdArray.map((id) => <News id={id}/>)}
      </ol>
    </section>
  )
}

export default Main;
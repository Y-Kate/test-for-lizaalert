import React, { useEffect, useState } from 'react';
import './Main.css';
import News from './News';
import api from '../utils/Api';

function Main ({newsFullData, setNewsFullData}) {

  const [newsIdArray, setNewsIdArray] = useState([]);

  useEffect(() => {
    api.getNewsIds()
    .then((res) => {
      setNewsIdArray(res.splice(0,100))
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <section className="main">
      <ol className="main__news-list">
        {newsIdArray.map((id, i) => <News id={id} newsFullData={newsFullData} setNewsFullData={setNewsFullData} index={i} />)}
      </ol>
    </section>
  )
}

export default Main;
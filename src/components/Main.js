import React, { useEffect, useState } from 'react';
import './Main.css';
import News from './News';
import api from '../utils/Api';

function Main ({newsFullData, setNewsFullData}) {

  const [newsIdArray, setNewsIdArray] = useState([]);

  useEffect(() => {
    api.getNewsIds()
    .then((res) => {
      setNewsIdArray(res.splice(0,4))
    })
    .catch((err) => console.log(err))
  }, [])

  console.log(newsFullData)

  return (
    <section className="main">
      <ol className="main__news-list">
        {newsIdArray.map((id) => <News id={id} newsFullData={newsFullData} setNewsFullData={setNewsFullData}/>)}
      </ol>
    </section>
  )
}

export default Main;
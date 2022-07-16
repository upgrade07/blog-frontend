import './technology.css'
import Post from "../Post";
import { useState,useEffect } from 'react';
const Technology = () => {
  const [techdata,setData] = useState([])
  useEffect(()=>{
    const url = 'https://blog-back-8.herokuapp.com/api/tech';
    fetch(url).then((res)=>res.json())
    .then(res=>setData(res))
  },[])
  return (
    <div className="tourism">
      <div className="leftcontent">
        <h1 className="heading">Technology</h1>
        {techdata.map((card) => (
          <Post
            img={card.img}
            header={card.header}
            desc={card.desc}
            footer_category={card.footer_category}
            footer_date={card.footer_date}
          ></Post>
        ))}
      </div>
      <div className="rightcontent">
      <h2>Top Post</h2>
      <hr className="hrtag"></hr>
      {techdata.map((card) => (
          
          <Post
            img={card.img}
            header={card.header}
            footer_category={card.footer_category}
            footer_date={card.footer_date}
          ></Post>
          
        ))}
        <div className="advert">
            Advertisement Space
        </div>
      </div>
    </div>
  );
};

export default Technology
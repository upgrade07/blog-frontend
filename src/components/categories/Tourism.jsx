import Post from "../Post";
import "./tourism.css";
import { useState,useEffect } from 'react';
const Tourism = () => {
  
    const [tourismdata,setData] = useState([])
    useEffect(()=>{
      const url = 'https://blog-back-8.herokuapp.com/api/travel';
      fetch(url).then((res)=>res.json())
      .then(res=>setData(res))
    },[])
  return (
    <div className="tourism">
      <div className="leftcontent">
        <h1 className="heading">Tourism</h1>
        {tourismdata.map((card) => (
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
      {tourismdata.map((card) => (
          
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

export default Tourism;

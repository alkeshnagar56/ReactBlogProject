import React, { useContext } from 'react'
import Navbar from './Navbar'
import DataContext from '../Api/DataContext'
import "./Blog.css"
import { Link } from 'react-router-dom'

const Fitness = () => {
  const data = useContext(DataContext);
  const Fitness = data.filter((item)=>item.category == "Fitness");
  const AdData = [
    {
      id: "1",
      ad_img:
        "https://coreldrawdesign.com/resources/previews/preview-creative-burger-food-restaurant-poster-advertisement-template-1650387145.jpg",
    },
    {
      id: "2",
      ad_img:
        "https://img.freepik.com/premium-psd/advertisement-advertisement-adidas-brand_987701-2530.jpg?w=740",
    },
    {
      id: "3",
      ad_img:
        "https://asset.gecdesigns.com/img/social-media-poster-templates/furniture-shop-advertisement-instagram-poster-template-1683124415404-cover.webp",
    },
    {
      id: "4",
      ad_img:
        "https://img.freepik.com/premium-photo/realistic-soft-drink-advertisement-text-soft-drinks-soda-poster-generative-ai_1092559-16801.jpg?semt=ais_hybrid",
    },
    {
      id: "5",
      ad_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHiA3LVCjCgCRbVO7sUJ9l9SVpQHVa1kDgg&s",
    },
    {
      id: "6",
      ad_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3Q8PjYMYI1fp6QvRxFiOOKAq6-yY9g-5hg&s",
    },
    {
      id: "7",
      ad_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSywr9Uvtuzkp7QiPGrp-CxpchwVuTN_clA&s",
    },
    {
      id: "8",
      ad_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOG4nXy2hKlTmCqn7jgK1jAmnWXM4awRVUXA&s",
    },
    {
      id: "9",
      ad_img: "https://m.media-amazon.com/images/I/61j+Qo7U9HL.jpg",
    },
    {
      id: "10",
      ad_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4-jV0m2-25zSuMI4BCm3P7Z7V6D1wWcdLA&s",
    },
  ];
  const random = Math.round(Math.random() * (Fitness.length-2));
  
  return (
    <>

      <Navbar />
      <div className="Bollywoodmain">
        <h1 className="main-heading">Fitness</h1>
        <div className="ChildMain">
          {Fitness.slice(4, 7).map((item) => (
            <>
              <div className="BollyMainMovie">
                <Link to={`/details/${item.id}`}>
                  <img
                    src={item.img_url}
                    alt={item.title}
                    className="BollyMainimg"
                  />
                  <h3 className="Title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>


      <div className="storypost">
        <div className="topstories">
          <div className="homeheading">
            <h1>Top Stories</h1>
            <div className="homeheadunderline"></div>
          </div>
          {Fitness.slice(0, 16).map((item) => (
            <>
              <Link className="storydata" to={`/details/${item.id}`}>
                <div className="storyimg">
                  <img className="imagestory" src={item.img_url} alt="data" />
                  <h3 className="storycategory">{item.category}</h3>
                </div>
                <div className="titledescription">
                  <h2 className="Title storytitle">{item.title}</h2>
                  <p className="storydescription description">
                    {item.description}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="postsadvertise">
          <div className="toppost">
            <h1>Top Posts</h1>
            <Link to={`/details/${Fitness[random].id}`}
            className="mainpost">
              <img src={Fitness[random].img_url} />
              <p>{Fitness[random].description}</p>
            </Link>
          </div>
          <div className="normalpost">
            {Fitness.slice(12, 16).map((item) => (
              <>
              <Link to={`/details/${item.id}`}>
                <div className="post">
                  <img src={item.img_url} />
                  <p>{item.description}</p>
                  </div>
                </Link>
              </>
            ))}
          </div>

          <div className="advertisement">
            <div className="AdHeading">
              <p>Advertisement</p>
            </div>
            <div className="parAdImg">
              {AdData.map((item) => (
                <>
                  <img
                    className="AdImg"
                    src={item.ad_img}
                    alt="advertisement"
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fitness

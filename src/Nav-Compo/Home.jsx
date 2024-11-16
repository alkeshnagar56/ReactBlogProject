import React, {useState, useContext } from "react";
import Navbar from "./Navbar";
import DataContext from "../Api/DataContext";
import "./Blog.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FirstLoadig from "../FirstLoadig";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const data = useContext(DataContext);


  const handleLoadingComplete = () => {
    setLoading(false);
  };


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

  const SelectedArray = [
    1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 31, 32, 35, 36, 45,
    51, 53, 62, 65, 66, 67, 69, 70, 73, 75, 76, 77, 83, 84,
  ];

  const img1 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length - 2))) + 1])
  ) || {};

  const img2 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length - 2))) + 1])
  ) || {};

  const img3 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length - 2))) + 1])
  ) || {};

  

  let random = Math.floor(Math.random() * (data.length - 2)); // Ensures there are enough elements for slicing
  if (random < 0) random = 0;
  // let random = Math.round(Math.random() * (data.length - 2));
  // if(random == 0){
  //   random = random + 1;
  // }

  if (random == (data.length - 2)) {
    random = random - 1;
  }

  return (
    <>
     {loading ? (
     // Show the loader while loading is true
      <FirstLoadig setLoadingComplete={handleLoadingComplete} />
    ) : (
    <>
      <Navbar />
      <div className="HomeParentMain">
        <div className="headergrid">
          <div className="headerbox1 headerbox">
            <div className="childMain">
              <img className="homemainimg" alt="loading" src={img1.img_url || 'fallback-image-url'} />
              <div className="homeblankdiv">
                <h2>{img1.title}</h2>
                <p>{img1.description}</p>
              </div>
            </div>
          </div>
          <div className="headerbox2 headerbox">
            <div className="childMain2">
              <img className="homemainimg" alt="loading" src={img2.img_url} />
              <div className="homeblankdiv">
                <h2>{img2.title}</h2>
                <p>{img2.description}</p>
              </div>
            </div>
          </div>
          <div className="headerbox3 headerbox">
            <div className="childMain3">
              <img className="homemainimg" alt="loading" src={img3.img_url} />
              <div className="homeblankdiv">
                <h2>{img3.title}</h2>
                <p>{img3.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homelatestpage">
        <div className="homeheading">
          <h1>The Latest</h1>
          <div className="homeheadunderline"></div>
        </div>
        <div className="Bollywoodmain home3latest">
          <div className="ChildMain">
            {/* {data.slice(random, random + 3).map((item) => (
              <>
                <div className="BollyMainMovie">
                  <Link to={`/details/${item.id}`}>
                    <img
                      src={item.img_url}
                      alt="Bollywood movie"
                      className="BollyMainimg"
                    />
                    <h3 className="Title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                  </Link>
                </div>
              </>
            ))} */}
            {data && data.length > 0 && data.slice(random, random + 3).map((item,index) => (
              <>
                <div className="BollyMainMovie" key={index}>
              <Link to={`/details/${item.id}`} key={item.id}>
                <img src={item.img_url || 'fallback-image-url'} alt="Bollywood movie" className="BollyMainimg" />
                <h3 className="Title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </Link>
              </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="storypost">
        <div className="topstories">
          <div className="homeheading">
            <h1>Top Stories</h1>
            <div className="homeheadunderline"></div>
          </div>
          {data.slice(0, 16).map((item) => (
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
            <Link to={`/details/${data[random].id}`} className="mainpost">
              <img src={data[random].img_url} />
              <p>{data[random].description}</p>
            </Link>
          </div>
          <div className="normalpost">
            {data.slice(12, 16).map((item) => (
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
              {AdData.map((item,index) => (
                <>
                  <img key={index}
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

      <Footer />
    </>
    )}
    </>
  );
};

export default Home;

import React, { useEffect, useContext, useState } from "react";
import Navbar from "./Navbar";
import DataContext from "../Api/DataContext";
import "./Blog.css";
import { Link } from "react-router-dom";
import BannerAd from "./BannerAd";
import Footer from "./Footer";

const Fitness = () => {
  const [isloading, setIsloading] = useState(true);
  const [load, setload] = useState(2);
  const [visible, setvisible] = useState(1);
  const [limit, setlimit] = useState(true);

  const handleload = () => {
    setload((prev) => prev + 3);
    setvisible((prev) => prev + 6);
    if (load >= 5) {
      setlimit(false);
    }
  };

  useEffect(() => {
    const loader = () => {
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    };
    loader();
  }, []);

  const data = useContext(DataContext);
  const Fitness = data.filter((item) => item.category == "Fitness");

  const random = Math.round(Math.random() * (Fitness.length - 2));

  return (
    <>
      <Navbar />
      {isloading ? (
        <div class="loader"></div>
      ) : (
        <>
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
              {Fitness.slice(0, load).map((item) => (
                <>
                  <Link className="storydata" to={`/details/${item.id}`}>
                    <div className="storyimg">
                      <img
                        className="imagestory"
                        src={item.img_url}
                        alt="data"
                      />
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
                <Link
                  to={`/details/${Fitness[random].id}`}
                  className="mainpost"
                >
                  <img src={Fitness[random].img_url} />
                  <p>{Fitness[random].description}</p>
                </Link>
              </div>
              <div className="normalpost">
                {Fitness.slice(0, visible).map((item) => (
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

              {/* <div className="advertisement">
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
          </div> */}
            </div>
          </div>
          {limit && (
            <button className="loadmorebtn" onClick={handleload}>
              Load More
            </button>
          )}
          <BannerAd />
          <Footer />
        </>
      )}
    </>
  );
};

export default Fitness;

import React, { useContext } from "react";
import Navbar from "./Navbar";
import DataContext from "../Api/DataContext";
import "./Blog.css";

const Home = () => {
  const data = useContext(DataContext);
  const SelectedArray = [
    1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 31, 32, 35, 36,
    45, 51, 53, 62, 65, 66, 67, 69, 70, 73, 75, 76, 77, 83, 84,
  ];


    const img1 = data.find((item) => item.id === parseInt(SelectedArray[Math.round(Math.random() * SelectedArray.length)]));
    console.log(img1, "img1");
    const img2 = data.find((item) => item.id === parseInt(SelectedArray[Math.round(Math.random() * SelectedArray.length)]));
    console.log(img2, "img2");
    const img3 = data.find((item) => item.id === parseInt(SelectedArray[Math.round(Math.random() * SelectedArray.length)]));
    console.log(img3, "img3");
    
  

  return (
    <>
      <Navbar />
 
        <div className="HomeParentMain">
          <div className="headergrid">
            <div className="headerbox1 headerbox">
              <div className="childMain">
                <img className="homemainimg" alt="loading" src={img1.img_url} />
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
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;

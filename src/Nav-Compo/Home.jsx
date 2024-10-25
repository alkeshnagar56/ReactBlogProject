import React, { useContext } from "react";
import Navbar from "./Navbar";
import DataContext from "../Api/DataContext";
import "./Blog.css";

const Home = () => {
  const data = useContext(DataContext);
  const SelectedArray = [
    1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 31, 32, 34, 35, 36,
    45, 51, 53, 62, 65, 66, 67, 69, 70, 73, 75, 76, 77, 83, 84,
  ];
  let img1, img2, img3;

  setInterval(() => {
    console.log("This message appears every 2 seconds");

    let random = Math.round(Math.random() * SelectedArray.length);
    img1 = data.find((item) => item.id === parseInt(SelectedArray[random]));
    console.log(img1, "img1");
    img2 = data.find(
      (item) => item.id === parseInt(SelectedArray[random + 1])
    );
    console.log(img2, "img2");
    img3 = data.find(
      (item) => item.id === parseInt(SelectedArray[random - 1])
    );
    console.log(img3, "img3");
  }, 20000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }, 20000);

  return (
    <>
      <Navbar />
      <div className="HomeParentMain">
        <div className="headergrid">
          <div className="headerbox1 headerbox">
            <div className="childMain">
              <img
                className="homemainimg"
                alt={img1.title}
                src={img1.img_url}
              />
            </div>
          </div>
          <div className="headerbox2 headerbox">
            <div className="childMain2">
              <img
                className="homemainimg"
                alt={img2.title}
                src={img2.img_url}
              />
            </div>
          </div>
          <div className="headerbox3 headerbox">
            <div className="childMain3">
              <img
                className="homemainimg"
                alt={img3.title}
                src={img3.img_url}
              />
              {/* <div className="id">{img3.id}</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="samp">
        {data.map((item) => (
          <>
            <img className="samp" src={item.img_url} />
            <div> {item.id}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;

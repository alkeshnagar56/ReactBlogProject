import React, { useEffect, useState } from "react";
import './FirstLoad.css';

const FirstLoadig = ({ setLoadingComplete }) => {
  const [allow, setAllow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllow(false);
      setLoadingComplete();  // Let the parent component know loading is done
    }, 2500);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [setLoadingComplete]);

  return (
    <>
      {allow ? (
        <div className="heading-container">
          <h1 className="loaderheading">
            <span className="devils">Devil's</span> <span className="domain">Domain</span>
          </h1>
        </div>
      ) : null}
    </>
  );
};

export default FirstLoadig;

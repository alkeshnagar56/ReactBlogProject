import React from "react";
import "./App.css";
import RouteFile from "./RouteFile";
import { DataProvider } from "./Api/DataContext";

const App = () => {
  return (
    <>
      <DataProvider>
        <RouteFile />
      </DataProvider>
    </>
  );
};

export default App;

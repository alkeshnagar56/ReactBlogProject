import React, { useContext } from 'react'
import DataContext from '../Api/DataContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SearchResult = () => {
    const Data = useContext(DataContext)
    const { SearchText } = useParams();
    const navigate = useNavigate();

    const SearchItem = Data.filter((item)=>item.title.toLowerCase().includes(SearchText.toLowerCase()))

//   const searchData = data.filter((item) =>
//     item.title.toLowerCase().includes(searchText.toLowerCase())
//   );

  return (
    <>
     <div className="SearchResult">
      <button onClick={()=>navigate("/")}>Back</button>
      <h1>Search Result for : {SearchText}</h1>
      {SearchItem.length>0 ?(
        <div className="ResultContainer">
          {SearchItem.map((item)=>(
            <Link to={`details/${item.id}`} key={item.id}>
              <img src={item.img_url} alt={item.title}/>
              <p>{item.description.split(" ").slice(0,20).join(" ")}</p>
            </Link>
          ))}
        </div>
      ):(
        <h2>No results Found</h2>
      )}
      
     </div>
    </>
)
}

export default SearchResult
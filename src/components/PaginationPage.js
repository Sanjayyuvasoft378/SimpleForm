import React, {useState, useEffect} from 'react'
import './pagination.css'
import axios from 'axios'
import Pagination from "react-bootstrap-4-pagination";
import ReactPaginate from 'react-paginate';
function PaginationPage() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
  
  
    const getData = async() => {
        const res = await axios.get(`https://react-rails-api-demo.herokuapp.com/api/v1/posts`)
        const data = res.data;
                  const slice = data.slice(offset, offset + perPage)
                  const postData = slice.map(pd => <div key={pd.id}>
                      <p>{pd.title}</p>
                      <img src={pd.thumbnailUrl} alt=""/>
                  </div>)
                  setData(postData)
                  setPageCount(Math.ceil(data.length / perPage))
    }
    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
  };
  
   useEffect(() => {
     getData()
   }, [offset])
  
    return (
      <div className="App">
        {data}
         <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}/>
      </div>
    );
  }
  

export default PaginationPage
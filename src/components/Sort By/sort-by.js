import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function Sortby({ data, setData }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // Ensure data is an array before sorting
    if (Array.isArray(data)) {
      let sortedData = [...data];

      switch (value) {
        case "A-Z":
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z-A":
          sortedData.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "PriceLowToHigh":
          sortedData.sort((a, b) => a.price - b.price);
          break;
        case "PriceHighToLow":
          sortedData.sort((a, b) => b.price - a.price);
          break;
        case "DateOldToNew":
          sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        case "DateNewToOld":
          sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        default:
          break;
      }

      setData(sortedData);
    } else {
      console.error("Data is not an array.");
    }
  };

  return (
    <div className="sort-by">
      <h6>Sort By:</h6>
      <select
        className="form-control"
        // value={selectedOption}
        // onChange={handleSortChange}
      >
        <option value="">Sort By:</option>
        <option value="A-Z">Alphabetically, A-Z</option>
        <option value="Z-A">Alphabetically, Z-A</option>
        <option value="PriceLowToHigh">Price, Low to High</option>
        <option value="PriceHighToLow">Price, High to Low</option>
        <option value="DateOldToNew">Date, Old to New</option>
        <option value="DateNewToOld">Date, New to Old</option>
      </select>
    </div>
  );
}

export default Sortby;

// import React from 'react'
// import { Col, Row } from 'react-bootstrap'

// function Sortby() {
//     return (
//         <div className='sort-by'>

//                 <h6>Sort By:</h6>

//                     <select className="form-control">
//                         {/* <option value="default">Sort By:</option> */}
//                         <option value="A-Z">Alphabetically, A-Z</option>
//                         <option value="Z-A">Alphabetically, Z-A</option>
//                         <option value="PriceLowToHigh">Price, Low to High</option>
//                         <option value="PriceHighToLow">Price, High to Low</option>
//                         <option value="DateOldToNew">Date, Old to New</option>
//                         <option value="DateNewToOld">Date, New to Old</option>
//                     </select>

//         </div>
//     )
// }

// export default Sortby

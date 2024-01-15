import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Sortby() {
    return (
        <div className='sort-by'>
            
                <h6>Sort By:</h6>
               
                    <select className="form-control">
                        <option value="default">Sort By:</option>
                        <option value="A-Z">Alphabetically, A-Z</option>
                        <option value="Z-A">Alphabetically, Z-A</option>
                        <option value="PriceLowToHigh">Price, Low to High</option>
                        <option value="PriceHighToLow">Price, High to Low</option>
                        <option value="DateOldToNew">Date, Old to New</option>
                        <option value="DateNewToOld">Date, New to Old</option>
                    </select>
                

        </div>
    )
}

export default Sortby

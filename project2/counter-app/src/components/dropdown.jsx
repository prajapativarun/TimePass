import React, { Component } from 'react';

const DropDown = props => {
    console.log('Dropdown - Rendered');

    return ( 
        <div class="dropdown" >
          <select  
            class="btn btn-light dropdown-toggle m-2 p-2" 
            type="button" 
            id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true"  
            aria-expanded="false" >
            <option disabled value="" selected>-Mode of Payment-</option>
            <option value="Cod">CoD</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
     );
};
 
export default DropDown;
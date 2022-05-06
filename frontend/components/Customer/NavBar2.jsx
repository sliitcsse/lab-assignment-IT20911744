import React from 'react'
import {Link} from 'react-router-dom';

const Navigationbar2 = () => {
    return (
      <div>
     <table className="table">
  <thead>
    <tr>
  
    <th Scope="col">  <Link to="/viewCart">
            
           View Cart 
  
        </Link>  </th>
    
         <th Scope="col"> <Link to="/viewWlist">
            
           View Wish List
  
        </Link>  </th>
           
    </tr>
  </thead></table>
     </div>
  
     
    )
  }
  export default Navigationbar2;
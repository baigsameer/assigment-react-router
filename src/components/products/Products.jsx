import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Products() {
  return (
    <div>  
               <Link to="Vagetables" className="btn btn-primary">1Child</Link>
 
                 
              <Link to="Fruits" className="btn btn-primary">2Child</Link>
 
  
              <Link to="Meats" className="btn btn-primary">3Child</Link>
    
     <Outlet />  
  </div>

  )
}

export default Products
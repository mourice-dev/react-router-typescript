import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function BreadCrumbs() {
    const location = useLocation();
    let currentLink = '';
    
    const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb !=='')
    .map((crumb) => { currentLink+=`/${crumb}`
  return(
    <span key={crumbs}>
      <Link to={currentLink}>{crumb}</Link>
    </span>
  )});

  return (
    <div>
      <p>{crumbs}</p>
    </div>
  )
}

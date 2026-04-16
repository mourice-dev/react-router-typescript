import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function BreadCrumbs() {
    const location = useLocation();
    let currentLink = '';
    
    const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb !=='')
    .map((crumb) => { currentLink+=`/${crumb}`
      return(
    <span key={crumb}>
      <Link to={currentLink}>{crumb}</Link>
        </span>
  )});

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}

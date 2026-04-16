import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function BreadCrumbs() {
    const location = useLocation();
    let currentLink = '';
    
    const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb !=='')
    .map((crumb) => { currentLink+=`/${crumb}`
      return(
        <span className="crumb" key={crumb}>
          <Link to={currentLink} className={isLast ? 'active-crumb' : ''}>
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
          </Link>
          {!isLast && <span className="crumb-separator">›</span>}
        </span>
      )
    });

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}

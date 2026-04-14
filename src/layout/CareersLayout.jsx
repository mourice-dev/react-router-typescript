import {NavLink ,Outlet } from "react-router-dom"
export function CareersLayout() {
    return (<div>
        <NavLink to='/careers'>careers</NavLink>
        <h2>Careers</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
        
        <Outlet />
    </div>)
}
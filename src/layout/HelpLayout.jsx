/** @format */

import { NavLink, Outlet } from "react-router-dom";

export function HelpLayout() {
  return (




    <main className='help-layout'>
     
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi accusantium fuga quae voluptatem dicta placeat reiciendis recusandae eius iure voluptatum quidem qui quibusdam perspiciatis non eligendi totam, hic unde?</p>
      <nav>
        <NavLink to='service'>Service</NavLink>
        <NavLink to='faq'>FAQ</NavLink>
      </nav>
      <Outlet />
    </main>


  );
}

import { NavLink } from "react-router";

export default function MainMenu() {
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/form'>Submit</NavLink>
            <NavLink to='/bloglist'>Blogs</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    )
}
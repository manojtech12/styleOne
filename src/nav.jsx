    import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
    import { NavLink } from "react-router-dom"
export default function Nav() {
    return (
        <header>
            <div className="nav-bar">
                <div className="shop-title"><p>StyleOne</p></div>

                <div className='info-menu'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <a href="/contact">Contact</a>
                </div>

                <div className="menu-icons">
                    <FaSearch />
                    <FaUser />
                    <FaShoppingCart />
                </div>
            </div>
        </header>
    )
}
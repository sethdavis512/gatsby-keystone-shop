import React, { useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import useSiteMetaData from '../hooks/useSiteMetaData'
import useCart from '../hooks/useCart'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuClick = () => setIsOpen(!isOpen)

    const { menuLinks, title } = useSiteMetaData()
    const { hasItems, totalQuantity } = useCart()

    const mappedLinks = menuLinks.map(menuLink => (
        <Link
            key={`menu-link-${menuLink.label.toLowerCase()}`}
            to={menuLink.url}
            className="navbar-item"
        >
            {menuLink.label}
        </Link>
    ))

    const openCondition = {
        'is-active': isOpen
    }
    const burgerClassName = classnames('navbar-burger', openCondition)
    const menuClassName = classnames('navbar-menu', openCondition)

    return (
        <header>
            <nav
                className="navbar is-dark"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            {title}
                        </Link>
                        <a
                            role="button"
                            className={burgerClassName}
                            aria-label="menu"
                            aria-expanded="false"
                            onClick={handleMenuClick}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className={menuClassName}>
                        <div className="navbar-start">
                            <Link to="/shop" className="navbar-item">
                                Shop
                            </Link>
                            {hasItems && (
                                <Link to="/cart" className="navbar-item">
                                    Cart
                                    <span
                                        className="tag is-primary is-rounded"
                                        style={{ marginLeft: '8px' }}
                                    >
                                        {totalQuantity}
                                    </span>
                                </Link>
                            )}
                        </div>
                        <div className="navbar-end">{mappedLinks}</div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

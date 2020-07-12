import React, { useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

interface HeaderProps {
    siteTitle: string
    isOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuClick = () => setIsOpen(!isOpen)

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
                            {siteTitle}
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
                        <div className="navbar-start"></div>
                        <div className="navbar-end">
                            <Link to="/about" className="navbar-item">
                                About
                            </Link>
                            <Link to="/contact" className="navbar-item">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

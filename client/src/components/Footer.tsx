import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">© {new Date().getFullYear()}</div>
        </footer>
    )
}

export default Footer

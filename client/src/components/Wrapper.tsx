import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <section className="section">
            <div className="container">{children}</div>
        </section>
    )
}

export default Wrapper

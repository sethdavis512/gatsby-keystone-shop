import React from 'react'
import Columns from '../components/Columns'

const Wrapper = ({ children, hasColumns = true, columnClassName = '' }) => {
    const wrapperChildren = hasColumns ? (
        <Columns>
            <Columns.Column className={columnClassName}>
                {children}
            </Columns.Column>
        </Columns>
    ) : (
        children
    )

    return (
        <section className="section">
            <div className="container">{wrapperChildren}</div>
        </section>
    )
}

export default Wrapper

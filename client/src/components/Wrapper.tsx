import React from 'react'
import classnames from 'classnames'
import Columns from './Columns'

const Wrapper = ({ children, size = 'full' }) => {
    const wrapperColumnClassName = classnames({
        [`is-${size}`]: size
    })

    return (
        <section className="section">
            <div className="container">
                <Columns className="is-centered">
                    <Columns.Column className={wrapperColumnClassName}>
                        {children}
                    </Columns.Column>
                </Columns>
            </div>
        </section>
    )
}

export default Wrapper

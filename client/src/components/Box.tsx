import React from 'react'
import classnames from 'classnames'

const Box = ({ className, children, ...rest }) => {
    const boxClassName = classnames('box', className)
    return (
        <div className={boxClassName} {...rest}>
            {children}
        </div>
    )
}

export default Box

import React, { ReactNode } from 'react'
import classnames from 'classnames'

interface BoxProps {
    className?: string
    children: ReactNode
    style: any
}

const Box: React.FC<BoxProps> = ({ className, children, ...rest }) => {
    const boxClassName = classnames('box', className)
    return (
        <div className={boxClassName} {...rest}>
            {children}
        </div>
    )
}

export default Box

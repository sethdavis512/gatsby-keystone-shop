import React, { ReactNode } from 'react'
import Columns from '../components/Columns'

interface WrapperProps {
    children: ReactNode
    isCentered?: boolean
    hasColumns?: boolean
    columnClassName?: string
}

const Wrapper: React.FC<WrapperProps> = ({
    children,
    isCentered,
    hasColumns = true,
    columnClassName = ''
}) => {
    const wrapperChildren = hasColumns ? (
        <Columns className={`${isCentered && 'is-centered'}`}>
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

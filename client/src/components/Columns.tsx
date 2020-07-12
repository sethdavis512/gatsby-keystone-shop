import React, { ReactNode } from 'react'
import classnames from 'classnames'

interface ColumnsProps {
    centered?: boolean
    children: ReactNode
    className?: string
}

const Columns = ({ centered, children, className }: ColumnsProps) => {
    const columnsClassName = classnames('columns', className, {
        'is-centered': centered
    })
    return <div className={columnsClassName}>{children}</div>
}

interface ColumnProps {
    children: ReactNode
    className?: string
}

Columns.Column = ({ children, className }: ColumnProps) => {
    const columnClassName = classnames('column', className)
    return <div className={columnClassName}>{children}</div>
}

export default Columns

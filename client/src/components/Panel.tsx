import React, { ReactNode } from 'react'
import classnames from 'classnames'

interface PanelProps {
    className?: string
    children: ReactNode
}

const Panel = ({ children, className }: PanelProps) => {
    const panelClassName = classnames('panel', className)
    return <nav className={panelClassName}>{children}</nav>
}

interface PanelBlockProps {
    className?: string
    children: ReactNode
}

Panel.Block = ({ className, children }: PanelBlockProps) => {
    const panelBlockClassName = classnames('panel-block', className)
    return <div className={panelBlockClassName}>{children}</div>
}

interface PanelLinkProps {
    className?: string
    children: ReactNode
    url: string
}

Panel.Link = ({ className, children, url }: PanelLinkProps) => {
    const panelLinkClassName = classnames('panel-block', className)
    return (
        <a href={url} className={panelLinkClassName}>
            {children}
        </a>
    )
}

export default Panel

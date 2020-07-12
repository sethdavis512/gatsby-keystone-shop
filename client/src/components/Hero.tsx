import React, { ReactNode } from 'react'
import classnames from 'classnames'

interface HeroProps {
    centered?: boolean
    className?: string
    children?: ReactNode
    type?: string
    size?: string
}

const Hero: React.FC<HeroProps> = ({
    centered = false,
    children,
    className,
    type = 'dark',
    size
}) => {
    const heroClassName = classnames('hero', className, {
        [`is-${type}`]: type,
        [`is-${size}`]: size
    })

    const containerClassName = classnames('container', {
        'has-text-centered': centered
    })

    return (
        <section className={heroClassName}>
            <div className="hero-body">
                <div className={containerClassName}>{children}</div>
            </div>
        </section>
    )
}

export default Hero

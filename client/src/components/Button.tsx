import React from 'react'

interface ButtonProps {
    className?: string
    disabled?: boolean
    handleClick?: any
    text: string
    type?: 'button' | 'submit'
}

const Button = ({
    className = '',
    disabled = false,
    handleClick = () => {},
    text = 'Button',
    type = 'button',
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={`button ${className}`}
            disabled={disabled}
            onClick={handleClick}
            type={type}
            {...rest}
        >
            {text}
        </button>
    )
}

export default Button

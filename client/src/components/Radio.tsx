import React, { ReactNode } from 'react'

interface RadioProps {
    children: ReactNode
}

const Radio: React.FC<RadioProps> = ({ children }) => {
    return <div>{children}</div>
}

export default Radio

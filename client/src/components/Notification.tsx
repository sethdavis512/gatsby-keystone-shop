import React, { ReactNode } from 'react'

interface NotificationProps {
    children: ReactNode
    handleClick: (event: any) => void
}

const Notification: React.FC<NotificationProps> = ({
    children,
    handleClick
}) => {
    return (
        <div className="notification">
            <button onClick={handleClick} className="delete"></button>
            {children}
        </div>
    )
}

export default Notification

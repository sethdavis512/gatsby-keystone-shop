import React, { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
}

interface ImageProps {
    alt?: string
    ratio?: string
    src?: string
}

interface ContentProps {
    children?: ReactNode
    description: string
    title: string
}

type CardComponent = {
    Image: React.FC<ImageProps>
    Content: React.FC<ContentProps>
}

const Card: React.FC<CardProps> & CardComponent = ({ children }) => {
    return <div className="card">{children}</div>
}

const Image: React.FC<ImageProps> = ({
    alt = 'Placeholder image',
    src = 'https://bulma.io/images/placeholders/1280x960.png',
    ratio = '4by3'
}) => {
    return (
        <div className="card-image">
            <figure className={`image is-${ratio}`}>
                <img src={src} alt={alt} />
            </figure>
        </div>
    )
}
Card.Image = Image

const Content: React.FC<ContentProps> = ({ description, title }) => (
    <div className="card-content">
        <div className="content">
            <p className="title is-4">{title}</p>
            <p>{description}</p>
        </div>
    </div>
)
Card.Content = Content

export default Card

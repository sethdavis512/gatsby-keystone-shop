import React, { ReactNode } from 'react'
import numeral from 'numeral'

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
    price: number
}

type CardComponent = {
    Image: React.FC<ImageProps>
    Content: React.FC<ContentProps>
}

const Card: React.FC<CardProps> & CardComponent = ({ children, ...rest }) => {
    return (
        <div className="card" {...rest}>
            {children}
        </div>
    )
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

const Content: React.FC<ContentProps> = ({ description, title, price }) => {
    const formatted = numeral(price / 100).format()
    const formattedPrice = formatted.split('.')

    return (
        <div className="card-content">
            <div className="content">
                <p className="title is-4">{title}</p>
                <p className="title is-4">
                    {formattedPrice[0]}
                    <span
                        style={{
                            fontSize: '.75rem',
                            position: 'relative',
                            bottom: '.5rem'
                        }}
                    >
                        {formattedPrice[1]}
                    </span>
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}
Card.Content = Content

export default Card

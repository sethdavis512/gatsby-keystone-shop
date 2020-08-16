import React from 'react'
import { Link } from 'gatsby'
import Wrapper from '../components/Wrapper'

const CancelContainer = () => {
    return (
        <Wrapper>
            <p>Your order has been cancelled.</p>
            <Link className="button" to="/shop">
                Continue Shopping
            </Link>
        </Wrapper>
    )
}

export default CancelContainer

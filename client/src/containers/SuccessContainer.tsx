import React from 'react'
import { Link } from 'gatsby'
import Wrapper from '../components/Wrapper'

const SuccessContainer = () => {
    return (
        <Wrapper>
            <p>Your order has been successfully processed!</p>
            <Link className="button" to="/shop">
                Continue Shopping
            </Link>
        </Wrapper>
    )
}

export default SuccessContainer

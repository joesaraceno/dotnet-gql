import React from 'react';
import styled from 'styled-components';

import './ProductReview.scss'

export const ProductReview = (props) => {
    return (
        <div className="customer-review__container">
            <div className="customer-review__title">
                {props.review.title}
            </div>
            <div className="customer-review__description">
                {props.review.review}
            </div>
        </div>
    )
}

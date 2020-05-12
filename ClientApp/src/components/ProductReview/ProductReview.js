import React from 'react';
import styled from 'styled-components';

export const ProductReview = (props) => {
    return (
        <div>
            <div>
                {props.review.title}
            </div>
            <div>
                {props.review.review}
            </div>
        </div>
    )
}

import React, {useState} from 'react';
import { ADD_COMMENT_MUTATION } from '../../../mutations/CustomerReviewMutation';
import { Button, TextArea, InputText } from '@healthwise-ui/core';
import {useMutation} from 'react-apollo-hooks';

import './CreateReview.scss'


export const CreateReview = (props) => {
    const productId = props.productId;
    const mutationObject = {
        title: 'Hello',
        review: 'review',
        productId: 1
    }
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewDescription, setReviewDescription] = useState("");
    const [validReview, setValidReview] = useState(false);
    const [addReview, {loading}] = useMutation(ADD_COMMENT_MUTATION, {
        variables: {
            review: "lets try this"
        }
    });
    
    return (
        <form className="review__container" onSubmit={addReview}>
            <InputText type='text' placeholder="Title"></InputText>
            <TextArea placeholder='Please leave review here...' />
            <Button type='submit' value='submit'/>
        </form>
    )
}

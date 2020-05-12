import React from 'react';

import './CreateReview.scss'

import { Button, TextArea, InputText } from '@healthwise-ui/core';


export const CreateReview = (props) => {
    
    
    return (
        <form className="review__container">
            <InputText type='text' placeholder="Title"></InputText>
            <TextArea placeholder='Please leave review here...' />
            <Button>
                Submit
            </Button>
        </form>
    )
}

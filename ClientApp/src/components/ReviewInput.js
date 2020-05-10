import React from 'react';


import CREATE_REVIEW_MUTATION from '../queries/ProductReviewsQuery';
// TODO - pipe in the mutation from productReviewsQuery
// figure out a way to useMutation from apollo client and pipe your form object into it.
//https://www.apollographql.com/docs/react/api/react-hooks/#usemutation
export default function ReviewInput(props) {
    return (
        <div>
            <form>
    
                <select type ="number">
                    {/* product Id - get these from the products list query */}
                </select>
                <input>
                    {/* review Title - this shoudl be free text*/}
                </input>
                <input>
                    {/* review Text - this should be free text, not required */}
                </input>
            </form>
            
        </div>
    )
}
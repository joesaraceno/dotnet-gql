using CarvedRock.Api.Data.Entities;
using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockMutation : ObjectGraphType
    {
        public CarvedRockMutation(ProductReviewRepository _reviewRepository)
        {
            FieldAsync<ProductReviewType>(
                "createReview",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<ProductReviewInputType>> {Name = "review"}), 
                resolve: async context =>
                {
                    var review = context.GetArgument<ProductReview>("review");
                    return await context.TryAsyncResolve(
                        async c => await _reviewRepository.AddReview(review));
                });
        }
    }
}

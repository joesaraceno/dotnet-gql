
using System.Security.Claims;
using CarvedRock.Api.Data.Entities;
using CarvedRock.Api.Repositories;
using GraphQL.Types;
using GraphQL.DataLoader;

namespace CarvedRock.Api.GraphQL.Types
{
    // provides metatdata for the Entities
    public class ProductType: ObjectGraphType<Product>
    {
        public ProductType(ProductReviewRepository _reviewRepository, IDataLoaderContextAccessor _dataLoaderAccessor)
        {
            // graphql can infer the type here
            Field(t => t.Id);
            Field(t => t.Name).Description("The name of the product");
            Field(t => t.Description);
            Field(t => t.IntroducedAt).Description("When the product was first introduced in the catalog");
            Field(t => t.PhotoFileName).Description("The file name of the photo so the client can render it");
            Field(t => t.Price);
            Field(t => t.Rating).Description("The (max 5) star customer rating");
            Field(t => t.Stock);
            Field<ProductTypeEnumType>("Type", "The type of product");

            Field<ListGraphType<ProductReviewType>>(
                "reviews",
                resolve: context =>
                {

                    var user = (ClaimsPrincipal) context.UserContext;
                    // _reviewRepository.GetForProduct(context.Source.Id) - WITHOUT DATA LOADER
                    var loader =                                         // WITH DATA LOADER FOR CACHING
                        _dataLoaderAccessor.Context.GetOrAddCollectionBatchLoader<int, ProductReview>(
                            "GetReviewsByProductId", _reviewRepository.GetForProducts);
                    return loader.LoadAsync(context.Source.Id);
                }
            );
        }
    }
}

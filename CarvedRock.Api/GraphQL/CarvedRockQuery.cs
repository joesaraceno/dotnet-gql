using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockQuery: ObjectGraphType
    {
        public CarvedRockQuery(ProductRepository productRepository)
        {
            // even List is a special graphtype
            Field<ListGraphType<ProductType>>(
                "products",  // give the field a name
                resolve: context => productRepository.GetAll() // define the behavior of this resolver
                // returns a task that we don't have to await (graphql handles the await)
            );
        }
    }
}

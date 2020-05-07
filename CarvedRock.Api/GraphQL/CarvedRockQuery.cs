using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockQuery: ObjectGraphType
    {
        public CarvedRockQuery(ProductRepository _productRepository)
        {
            // even List is a special graphtype
            Field<ListGraphType<ProductType>>(
                "products",  // give the field a name
                resolve: context => _productRepository.GetAll() // define the behavior of this resolver
                // returns a task that we don't have to await (graphql handles the await)
            );
            Field<ProductType>(
                "product",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>>
                    {Name = "id"}),
                resolve: context => {
                    var id = context.GetArgument<int>("id");
                    return _productRepository.GetSingle(id);
                }
            );
        }
    }
}

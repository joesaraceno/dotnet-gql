using GraphQL;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockSchema: Schema
    {
        // must contain a value for at least one of the properties: Query, Mutation, or Subscription
        public CarvedRockSchema(IDependencyResolver resolver): base(resolver)
        {   
            // When the query type is passed in, this will act   
            Query = resolver.Resolve<CarvedRockQuery>();
            Mutation = resolver.Resolve<CarvedRockMutation>();
        }
    }
}

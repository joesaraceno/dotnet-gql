This project was built to bring a stateful, reactive front end to a multiplatform Dotnet API.

Docker allows the different application pieces to be comprised of portable, multiplatform microservices

GraphQL plus Apollo Hooks makes querying a total breeze.

Styled components make writing inline css more declarative, and conditional styling of the components is much easier and readable.

The backend is meant to feel familiar for my organization, with tools like Dotnet and Entity and MSSQL making up the basis of the data layer, but with the added benefit of GraphQL resolvers for front end ease.

## Technologies Used

* Docker
* Dotnet Core 2.1
* Entity Framework
* MSSQL
* ReactJS
* GraphQL
* Apollo
* StyledComponents

## Future Goals

* Containerize the ~backend and~ front end into separate concerns
* Build out some ui elements to show data and state passing around the application
* Make more backend models, to show the different GraphQL types and how to query them
* Enhance the GraphQL layer to support subscriptions, instead of just queries
* Make some sort of CMS to show apollo mutations
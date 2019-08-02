
## Description

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
* React, with hooks
* GraphQL
* Apollo
* StyledComponents

## Setup
1. Clone this monorepo
2. Get a Connection string like 
      ```
      {
          "ConnectionStrings": {
              "CarvedRock": "Server=tcp:[your database ip],1433;Initial Catalog=CarvedRock;Persist Security Info=False;User ID=[your user name];Password=[your password];MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
          }
      }
      ```
      and put it into the backend root

3. Get a db admin to allow access from your ip
4. Make sure you have docker and docker-compose installed
5. from the root of the monorepo, run `docker-compose up`
6. Navigate to `localhost:3001` in your browser

## Future Goals

~~* Containerize the backend and front end into separate concerns~~

~~* Push the dockerized images up to a docker repository~~

~~* Build out some ui elements to show data and state passing around the application~~

* Make more backend models, to show the different GraphQL types and how to query them

* Enhance the GraphQL layer to support subscriptions, instead of just queries

* Make some sort of CMS to show apollo mutations

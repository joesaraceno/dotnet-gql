using System.Collections.Generic;
using System.Threading.Tasks;
using CarvedRock.Api.Data;
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Repositories
{
    public class ProductRepository
    {
        private readonly CarvedRockDbContext _dbContext;

        public ProductRepository(CarvedRockDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<List<Product>> GetAll()
        {
            // the basic Entity Framework implementation of a query to get all results
            return _dbContext.Products.ToListAsync(); 
        }
        
        public Task<Product> GetSingle(int id)
        {
            // The basic Entity Framework implementation of a query to get a single object by primary key
            return _dbContext.Products.FindAsync(id);
        }
    }
}

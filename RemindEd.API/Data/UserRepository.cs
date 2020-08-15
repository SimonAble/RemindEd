using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public class UserRepository: IUserRepository
    {
        private readonly DataContext context;

        public UserRepository(DataContext context)
        {
            this.context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);

            if(user == null)
            {
                throw new Exception("User not found");
            }

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await context.Users.Include(p => p.Photos).ToListAsync();

            if (users == null)
            {
                throw new Exception("User not found");
            }

            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await context.SaveChangesAsync() > 0;
        }
    }
}

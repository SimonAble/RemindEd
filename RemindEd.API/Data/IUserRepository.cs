using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public interface IUserRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}

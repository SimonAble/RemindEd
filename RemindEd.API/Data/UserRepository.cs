using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using RemindEd.API.DTO;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public class UserRepository: IUserRepository
    {
        private readonly DataContext context;
        private readonly IMapper mapper;

        public UserRepository(DataContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
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

        public async Task<User> GetUserContext(string username)
        {
            var user = await context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Username == username);

            if (user == null)
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

        public async Task<Photo> GetPhoto(int id)
        {
            var photo = await context.Photos.FirstOrDefaultAsync(p => p.ID == id);

            return photo;
        }

        public async Task<User> SaveUser(int id, User user)
        {
            var userFromDb = await this.context.Users.FirstOrDefaultAsync(u => u.Id == id);
            userFromDb.FirstName = user.FirstName;
            userFromDb.LastName = user.LastName;
            userFromDb.DateOfBirth = user.DateOfBirth;
            userFromDb.ProfessionalTitle = user.ProfessionalTitle;
            userFromDb.ProfessionalDescription = user.ProfessionalDescription;
            userFromDb.Language = user.Language;
            userFromDb.TwitterLink = user.TwitterLink;
            userFromDb.FacebookLink = user.FacebookLink;
            userFromDb.LinkedinLink = user.LinkedinLink;
            userFromDb.YoutubeLink = user.YoutubeLink;
            userFromDb.UdemyLink = user.UdemyLink;
            userFromDb.CourseraLink = user.CourseraLink;
            userFromDb.LastActive = DateTime.Now;
            user.LastUpdatedDate = DateTime.Now;


            await context.SaveChangesAsync();

            return userFromDb;
        }

        // //Table Utility
        // public DateTime LastActive { get; set; }
        // public DateTime CreatedDate { get; set; }
        // public DateTime LastUpdatedDate { get; set; }
    }
}

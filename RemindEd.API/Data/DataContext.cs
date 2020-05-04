using Microsoft.EntityFrameworkCore;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}

        public DbSet<Value> Values { get; set; }
    }
}
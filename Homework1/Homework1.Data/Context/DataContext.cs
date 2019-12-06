using Homework1.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace Homework1.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<Homeworknote> Homeworknotes { get; set; }
    }
}
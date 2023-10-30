using Microsoft.EntityFrameworkCore;
using Entities;
using People.Api.Data.Mappings;

namespace People.Api.Data;

public class PersonContext : DbContext
{
    public PersonContext(DbContextOptions<PersonContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new PersonMap());
    }

    public DbSet<Person> People { get; set; }
}

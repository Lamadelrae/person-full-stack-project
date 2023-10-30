using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace People.Api.Data.Mappings;

public class PersonMap : IEntityTypeConfiguration<Person>
{
    public void Configure(EntityTypeBuilder<Person> builder)
    {
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Name)
        .IsRequired()
        .HasMaxLength(100);

        builder.Property(p => p.BirthDate)
        .IsRequired();

        builder.Property(p => p.Address)
        .IsRequired()
        .HasMaxLength(200);
    }
}
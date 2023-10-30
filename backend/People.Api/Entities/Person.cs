using People.Api.Contracts;

namespace Entities;

public class Person
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public DateTime BirthDate { get; set; }
    public string Address { get; set; } = null!;

    private Person() { }

    public static Person From(CreatePersonRequest request)
    {
        return new Person
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            BirthDate = request.BirthDate,
            Address = request.Address
        };
    }

    public static Person From(UpdatePersonRequest request)
    {
        return new Person
        {
            Id = request.Id ?? Guid.NewGuid(),
            Name = request.Name,
            BirthDate = request.BirthDate,
            Address = request.Address
        };
    }

    public Person With(UpdatePersonRequest request)
    {
        Name = request.Name;
        BirthDate = request.BirthDate;
        Address = request.Address;
        return this;
    }
}
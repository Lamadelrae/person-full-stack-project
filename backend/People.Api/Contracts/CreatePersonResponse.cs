using Entities;

namespace People.Api.Contracts;

public class CreatePersonResponse
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public DateTime BirthDate { get; set; }
    public string Address { get; set; } = null!;

    public static CreatePersonResponse From(Person person) => new()
    {
        Id = person.Id,
        Name = person.Name,
        BirthDate = person.BirthDate,
        Address = person.Address
    };
}

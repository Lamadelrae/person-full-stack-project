using Entities;

namespace People.Api.Contracts;

public class GetPersonResponse
{
    public Guid Id { get; set; }
    public string Name { get; set;} = null!;
    public DateTime BirthDate { get; set; }
    public string Address { get; set; } = null!;

    public static GetPersonResponse From(Person person)
    {
        return new GetPersonResponse
        {
            Id = person.Id,
            Name = person.Name,
            BirthDate = person.BirthDate,
            Address = person.Address
        };
    }
}

namespace People.Api.Contracts;

public class CreatePersonRequest
{
    public string Name { get; set; } = null!;
    public DateTime BirthDate { get; set; }
    public string Address { get; set; } = null!;
}

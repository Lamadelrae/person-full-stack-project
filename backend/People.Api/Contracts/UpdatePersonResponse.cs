namespace People.Api.Contracts;

public class UpdatePersonResponse
{
    public Guid? Id { get; set; }
    public string Name { get; set; } = null!;
    public DateTime BirthDate { get; set; }
    public string Address { get; set; } = null!;
}

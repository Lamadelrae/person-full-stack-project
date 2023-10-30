using Microsoft.AspNetCore.Mvc;
using Entities;
using People.Api.Data;
using People.Api.Contracts;
using Microsoft.EntityFrameworkCore;

namespace People.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController : ControllerBase
{
    private readonly PersonContext _context;

    public PersonController(PersonContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var people = await _context.People.ToListAsync();
        var response = people.Select(GetPersonResponse.From);
        return Ok(response);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(Guid id)
    {
        var person = await _context.People.FindAsync(id);
        if (person == null)
        {
            return NotFound();
        }

        return Ok(GetPersonResponse.From(person));
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreatePersonRequest request)
    {
        var person = Person.From(request);
        _context.People.Add(person);
        await _context.SaveChangesAsync();

        return Created("/person/" + person.Id, GetPersonResponse.From(person));
    }

    [HttpPut]
    public async Task<IActionResult> Put([FromBody] UpdatePersonRequest request)
    {
        var person = await _context.People.FindAsync(request.Id);

        if (person == null)
        {
            person = Person.From(request);
            _context.People.Add(person);
            await _context.SaveChangesAsync();

            return Created("/person/" + person, GetPersonResponse.From(person));
        }

        _context.People.Update(person.With(request));
        await _context.SaveChangesAsync();

        return Ok(GetPersonResponse.From(person));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var person = _context.People.Find(id);

        if (person == null)
        {
            return NotFound();
        }

        _context.People.Remove(person);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
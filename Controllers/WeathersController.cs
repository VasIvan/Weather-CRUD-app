using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Fullstack.Models;
using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore.Internal;

namespace Fullstack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeathersController : ControllerBase
    {
        private readonly WeatherContext _context;

        public WeathersController(WeatherContext context)
        {
            _context = context;
        }

        // GET: api/Weathers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Weather>>> GetWeathers()
        {
            return await _context.Weathers.ToListAsync();
        }

        // GET: api/Weathers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Weather>> GetWeather(int id)
        {
            var weather = await _context.Weathers.FindAsync(id);

            if (weather == null)
            {
                return NotFound();
            }

            return weather;
        }

        // GET: api/Weathers/Helsinki
        [HttpGet("city/{city}")]
        public async Task<ActionResult<List<Weather>>> GetWeather(string city)
        {
            var result = await _context.Weathers.Where(x => x.City == city).ToListAsync();
            if (!result.Any())
            {
                return NotFound("Weather Data for this city doesn't exists!");
            }
            else
            {
                return result;
            }
        }

        // GET: api/Weathers/Helsinki&2020-10-29T13:34:00
        [HttpGet("{city}&{date}")]
        public async Task<ActionResult<Weather>> GetWeather(string city, DateTime date)
        {
            var result = await _context.Weathers.FirstOrDefaultAsync(x => x.City == city && x.Day == date);
            if (result is null)
            {
                return NotFound("Forecast for this day and city doesn't exists!");
            }
            else
            {
                return result;
            }
        }

        // PUT: api/Weathers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWeather(int id, Weather weather)
        {
            if (id != weather.Id)
            {
                return BadRequest();
            }

            _context.Entry(weather).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeatherExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Weathers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Weather>> PostWeather(Weather weather)
        {
            if (_context.Weathers.Any(x => (x.Day == weather.Day && x.City == weather.City))) 
            {
                return BadRequest("Forecast for this day and city exists!");
            }
            else
            {
                _context.Weathers.Add(weather);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetWeather", new { id = weather.Id }, weather);
            }
        }

        // DELETE: api/Weathers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Weather>> DeleteWeather(int id)
        {
            var weather = await _context.Weathers.FindAsync(id);
            if (weather == null)
            {
                return NotFound();
            }

            _context.Weathers.Remove(weather);
            await _context.SaveChangesAsync();

            return weather;
        }

        private bool WeatherExists(int id)
        {
            return _context.Weathers.Any(e => e.Id == id);
        }
    }
}

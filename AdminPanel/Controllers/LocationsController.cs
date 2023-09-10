using DAL.Data.IDataModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdminPanel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : Controller
    {
        private readonly ILocationData _data;
        private readonly ILogger<LocationsController> _logger;


        public LocationsController(ILogger<LocationsController> logger, ILocationData data)
        {

            _logger = logger;
            _data = data;
        }
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll(int userid)
        {
            _logger.LogInformation("Getting all data...");
            var result = await _data.GetAll(userid);

            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpGet("GetById")]
        public async Task<IActionResult> GetById(int id)
        {
            _logger.LogInformation("Getting data by ID...");
            var result = await _data.GetById(id);
            if (result == null) return NotFound();
            return Ok(result);
        }
    }
}

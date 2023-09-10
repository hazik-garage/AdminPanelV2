using DAL.Data.IDataModel;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdminPanel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryData _data;
        private readonly ILogger<CategoryController> _logger;
        private readonly IWebHostEnvironment _env;

        public CategoryController(ILogger<CategoryController> logger, ICategoryData data, IWebHostEnvironment env)
        {

            _logger = logger;
            _data = data;
            _env = env;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll(int locationId)
        {
            _logger.LogInformation("Getting all data...");
            var result = await _data.GetAll(locationId);

            if (result == null) return NotFound();
            return Ok(result);
        }


        [HttpPost("insert")]
        public async Task<IActionResult> Insert(Category model)
        {
            _logger.LogInformation("Saving data...");
            await _data.SaveData(model, _env);
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            _logger.LogInformation("Getting all data...");
            var result = await _data.GetById(id);

            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpPost("update")]
        public async Task<IActionResult> Update(Category model)
        {
            _logger.LogInformation("Saving data...");
            await _data.UpdateData(model, _env);
            return Ok();
        }

        [HttpPost("delete")]
        public async Task<IActionResult> Delete([FromBody] IEnumerable<int> CategoryID)
        {
            //asdasd
            _logger.LogInformation("Saving data...");
            foreach (int Catgoryid in CategoryID)
            {
                await _data.DeleteDataById(Catgoryid);
            }
            return Ok();
        }

        [HttpPost("deleteById")]
        public async Task<IActionResult> DeleteByID(int CategoryID)
        {
            //asdasd
            _logger.LogInformation("Saving data...");
            await _data.DeleteDataById(CategoryID);
            return Ok();
        }
    }
}

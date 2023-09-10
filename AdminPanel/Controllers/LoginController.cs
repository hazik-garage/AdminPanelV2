using DAL.Data.IDataModel;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdminPanel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<LoginController> _logger;
        private readonly IAuthData _authService;

        public LoginController(IConfiguration configuration, ILogger<LoginController> logger, IAuthData authService)
        {
            _configuration = configuration;
            _logger = logger;
            _authService = authService;
        }

        [HttpGet("{email}/{password}")]
        public async Task<IActionResult> ValidateUser(string email, string password)
        {
            //return Ok("Success");
            _logger.LogInformation("Getting all data...");
            var result = await _authService.GetDataforUserAuth(email, password);

            if (result == null) return Unauthorized("Invalid credentials.");

            LoginModel loginModel = new()
            {
                Email = email,
                Password = password,
                ID = result.UserID,
                UserName = result.FirstName + ' ' + result.LastName,
            };

            return Ok(loginModel);
        }

    }
}

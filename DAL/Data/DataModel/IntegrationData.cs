using DAL.Models;
using DAL.Services.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data.DataModel
{
    public class IntegrationData
    {
        private readonly IGenericService _services;
        public IntegrationData(IGenericService services)
        {
            _services = services;
        }
        public Task<IEnumerable<Integration>> GetAll(int UserID) =>
            _services.LoadData<Integration, dynamic>("[dbo].[sp_getUserIntegration]", new { UserID = UserID });
    }
}

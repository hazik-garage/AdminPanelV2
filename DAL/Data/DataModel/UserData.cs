using DAL.Data.IDataModel;
using DAL.Models;
using DAL.Services.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data.DataModel
{
    public class UserData : IUserData
    {
        private readonly IGenericService _services;

        public UserData(IGenericService services)
        {
            _services = services;
        }
        public Task<IEnumerable<Users>> GetAll() =>
            _services.LoadDataQuery<Users, dynamic>("select * from Users", new { });


        public async Task<Users?> GetById(int Id)
        {
            var result = await _services.LoadData<Users, dynamic>(
                "dbo.sp_GetUserBy_Id",
                new { id = Id });
            return result.FirstOrDefault();
        }
        public async Task<Users?> GetDataforAuth(string email, string password)
        {
            var result = await _services.LoadData<Users, dynamic>(
                "dbo.sp_GetUser_Auth",
                new { email, password });
            return result.FirstOrDefault();
        }

        public Task DeleteData(int Id) =>
            _services.SaveData("dbo.DeleteUser", new { ParamTable1 = Id });

    }
}

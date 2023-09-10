using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Services.IService;
using DAL.Data.IDataModel;
using DAL.Models;

namespace DAL.Data.DataModel
{
    public class LocationData : ILocationData
    {
        private readonly IGenericService _services;
        public LocationData(IGenericService services)
        {
            _services = services;
        }

        public Task<IEnumerable<Location>> GetAll(int Userid) =>
            _services.LoadData<Location, dynamic>("dbo.sp_getLocation_User", new { UserID = Userid });

        public async Task<Location?> GetById(int Id)
        {
            var result = await _services.LoadData<Location, dynamic>(
                "dbo.sp_getLocation_User",
                new { id = Id });
            return result.FirstOrDefault();
        }
        public async Task<Location?> GetDataforAuth(string email, string password)
        {
            var result = await _services.LoadData<Location, dynamic>(
                "dbo.sp_GetLocation_Auth",
                new { email, password });
            return result.FirstOrDefault();
        }


        public Task SaveData(Location Location)
        {
            return _services.SaveData("dbo.sp_insertLocation_Admin",
                new
                {
                    //Location.Username,
                    //Location.Name,
                    //Location.Image,
                    //Location.Email,
                    //Location.Password,
                    //Location.CompanyURl,
                    //Location.Address,
                    //Location.StatusID,
                    //Location.Currency,
                    //Location.BusinessKey,
                    //Location.LastUpdateBy,
                    //Location.LastUpdatedDate,
                    //Location.LocationID
                });
        }

        public Task UpdateData(Location Location)
        {
            return _services.SaveData("dbo.sp_updateLocation_Admin",
                new
                {
                    //Location.Username,
                    //Location.Name,
                    //Location.Image,
                    //Location.Email,
                    //Location.Password,
                    //Location.CompanyURl,
                    //Location.Address,
                    //Location.StatusID,
                    //Location.Currency,
                    //Location.BusinessKey,
                    //Location.LastUpdateBy,
                    //Location.LastUpdatedDate,
                    //Location.LocationID
                });
        }

        public Task DeleteData(int Id) =>
            _services.SaveData("dbo.DeleteLocation", new { ParamTable1 = Id });

    }
}
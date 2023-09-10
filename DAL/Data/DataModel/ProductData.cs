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
    public class ProductData : IProductData
    {
        private readonly IGenericService _services;
        public ProductData(IGenericService services)
        {
            _services = services;
        }

        public Task<IEnumerable<Product>> GetAll(int LocationID) =>
            _services.LoadData<Product, dynamic>("dbo.sp_GetProductsByLocation", new { locationID = LocationID });

        public async Task<Product?> GetById(int Id)
        {
            var result = await _services.LoadData<Product, dynamic>(
                "dbo.sp_getLocation_User",
                new { id = Id });
            return result.FirstOrDefault();
        }


        public Task SaveData(Product Product)
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

        public Task UpdateData(Product Product)
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Data.IDataModel;
using DAL.Services.IService;
using DAL.Models;
using DAL.Services;
using Microsoft.AspNetCore.Hosting;
using DAL.Data.ImageUpload;

namespace DAL.Data.DataModel
{
    public class CategoryData : ICategoryData
    {
        private readonly IGenericService _services;
        public CategoryData(IGenericService services)
        {
            _services = services;
        }

        public Task<IEnumerable<Category>> GetAll(int locationId) =>
            _services.LoadData<Category, dynamic>("[dbo].[sp_getCategory]", new { LocationId = locationId });


        public async Task<Category?> GetById(int Id)
        {
            var result = await _services.LoadData<Category, dynamic>(
                "dbo.sp_GetCategoryById",
                new { categoryid = Id });
            return result.FirstOrDefault();
        }


        public Task SaveData(Category Category, IWebHostEnvironment _env)
        {
            var ImageView = new uploadImage();
            Category.Image = ImageView.UploadImage(Category.Image, "Items", _env);
            return _services.SaveData("dbo.sp_InsertCategory",
                new
                {
                    Category.RowID,
                    Category.Name,
                    Category.AlternateName,
                    Category.Description,
                    Category.Image,
                    Category.DisplayOrder,
                    Category.LastUpdatedBy,
                    Category.StatusID,
                    Category.LocationID

                });
        }


        public Task UpdateData(Category Category, IWebHostEnvironment _env)
        {
            var ImageView = new uploadImage();
            Category.Image = ImageView.UploadImage(Category.Image, "Items", _env);

            return _services.SaveData("dbo.sp_updateCategory",
                new
                {
                    Category.RowID,
                    Category.Name,
                    Category.AlternateName,
                    Category.Description,
                    Category.DisplayOrder,
                    Category.StatusID,
                    Category.CategoryID,
                    Category.Image,
                    //Category.SortByAlpha,
                    Category.LastUpdatedBy,
                    //Category.LastUpdatedDate,
                    Category.LocationID
                });
        }


        public Task<IEnumerable<Category>> DeleteDataById(int categoryId) =>
            _services.Save<Category, dynamic>("dbo.sp_DeleteCategory", new { CategoryID = categoryId });

    }
}

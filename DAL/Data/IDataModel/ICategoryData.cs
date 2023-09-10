using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
using DAL.Services.Service;
using Microsoft.AspNetCore.Hosting;

namespace DAL.Data.IDataModel
{
    public interface ICategoryData
    {
        Task<IEnumerable<Category>> DeleteDataById(int CategoryId);
        Task<IEnumerable<Category>> GetAll(int locationId);
        Task<Category?> GetById(int Id);
        Task SaveData(Category Category, IWebHostEnvironment _env);
        Task UpdateData(Category Category, IWebHostEnvironment _env);
    }
}

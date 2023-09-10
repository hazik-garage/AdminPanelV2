using DAL.Models;

namespace DAL.Data.IDataModel
{
    public interface IProductData
    {
        Task DeleteData(int Id);
        Task<IEnumerable<Product>> GetAll(int Userid);
        Task<Product?> GetById(int Id);
        Task SaveData(Product Product);
        Task UpdateData(Product Product);
    }
﻿
}
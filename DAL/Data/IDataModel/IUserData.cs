using DAL.Models;
using System.Collections.Generic;

namespace DAL.Data.IDataModel
{
    public interface IUserData
    {
        Task<IEnumerable<Users>> GetAll();
        Task<Users?> GetById(int Id);
        //Task SaveData(Users User);
        //Task UpdateData(Users User);
    }
}

using DAL.Models;

namespace DAL.Data.IDataModel
{
    public interface ILocationData
    {
        Task DeleteData(int Id);
        Task<IEnumerable<Location>> GetAll(int Userid);
        Task<Location?> GetById(int Id);
        Task<Location?> GetDataforAuth(string email, string password);
        Task SaveData(Location Location);
        Task UpdateData(Location Location);
    }

}
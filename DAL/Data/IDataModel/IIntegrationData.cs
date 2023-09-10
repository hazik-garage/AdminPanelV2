using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data.IDataModel
{
    public interface IIntegrationData
    {
        Task<IEnumerable<Integration>> GetAll(int UserID);
    }
}

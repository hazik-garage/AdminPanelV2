using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services.IService
{
    public interface IGenericService
    {
        Task<IEnumerable<T>> LoadData<T, U>(string SP, U parameters);

        Task SaveData<T>(string SP, T parameters);

        Task<IEnumerable<T>> Save<T, U>(string SP, U parameters);

        Task<IEnumerable<T>> LoadDataQuery<T, U>(string Query, U parameters);

        Task SaveDataQuery<T>(string Query, T parameters);
        Task Update<T>(string SP, T parameters);
    }
}


﻿using DAL.Models;

namespace DAL.Data.IDataModel
{
    public interface IAuthData
    {
        Task<Users?> GetDataforUserAuth(string email, string password);
        Task<Users?> GetDataforUser();
        Task<Users?> GetDataforSubUserAuth(string email, string password);
    }

}
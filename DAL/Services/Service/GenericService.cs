using DAL.Services.IService;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services.Service
{
    public class GenericService : IGenericService
    {

        private readonly IConfiguration _config;
        public GenericService(IConfiguration config)
        {
            _config = config;
        }

        // Generic Get All Using SP

        public async Task<IEnumerable<T>> LoadData<T, U>(
            string SP,
            U parameters)
        {
            using (IDbConnection con = new SqlConnection(_config.GetConnectionString("Default")))
            {
                if (con.State != ConnectionState.Open) con.Open();

                return await con.QueryAsync<T>(
                    SP, parameters, commandType: CommandType.StoredProcedure);
            }
        }


        public async Task<IEnumerable<T>> Save<T, U>(
                string SP,
                U parameters)
        {
            using (IDbConnection con = new SqlConnection(_config.GetConnectionString("Default")))
            {
                if (con.State != ConnectionState.Open) con.Open();

                return await con.QueryAsync<T>(
                    SP, parameters, commandType: CommandType.StoredProcedure);
            }
        }
        // Generic Update & delete Using SP

        public async Task SaveData<T>(
                string SP,
                T parameters)
        {
            using (IDbConnection con = new SqlConnection(_config.GetConnectionString("Default")))
            {
                if (con.State != ConnectionState.Open) con.Open();

                await con.ExecuteAsync(
                    SP, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        // Generic Get All Using Query

        public async Task<IEnumerable<T>> LoadDataQuery<T, U>(
            string SP,
            U parameters)
        {
            using (IDbConnection con = new SqlConnection(_config.GetConnectionString("Default")))
            {
                if (con.State != ConnectionState.Open) con.Open();

                return await con.QueryAsync<T>(
                    SP, parameters, commandType: CommandType.Text);
            }
        }



        // Generic Update & delete Using Query

        public async Task SaveDataQuery<T>(
            string SP,
            T parameters)
        {
            using (IDbConnection con = new SqlConnection(_config.GetConnectionString("Default")))
            {
                if (con.State != ConnectionState.Open) con.Open();

                await con.ExecuteAsync(
                    SP, parameters, commandType: CommandType.Text);
            }
        }


        public async Task Update<T>(string SP, T parameters)
        {

            using (IDbConnection con = new SqlConnection(_config.GetConnectionString("Default")))
            {
                if (con.State != ConnectionState.Open) con.Open();

                await con.ExecuteAsync(
                    SP, parameters, commandType: CommandType.Text);
            }

        }
    }
}

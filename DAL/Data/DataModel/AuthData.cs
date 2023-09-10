using DAL.Data.IDataModel;
using DAL.Models;
using DAL.Services.IService;


namespace DAL.Data.DataModel
{
	public class AuthData : IAuthData
	{
		private readonly IGenericService _service;

		public AuthData(IGenericService service)
		{
			_service = service;
		}
		public async Task<Users?> GetDataforUserAuth(string email, string password)
		{
			var EPassword = new Cryptography.clsCryption().EncryptDecrypt(password, "encrypt");
			var pass = "BLNN/ob0XC+SIgpTtvptNA==";
			var DPassword = new Cryptography.clsCryption().EncryptDecrypt(pass, "decrypt");
			var result = await _service.LoadData<Users, dynamic>(
				"[dbo].[sp_AuthenticateUser]",
				new { email = email, pass = EPassword });

			return result.FirstOrDefault();
		}

		public async Task<Users?> GetDataforUser()
		{
			//var EPassword = new Cryptography.clsCryption().EncryptDecrypt(password, "encrypt");
			//var pass = "BLNN/ob0XC+SIgpTtvptNA==";
			//var DPassword = new Cryptography.clsCryption().EncryptDecrypt(pass, "decrypt");
			var result = await _service.LoadData<Users, dynamic>(
				"[dbo].[sp_AuthenticateUser]",
				new {});

			return result.FirstOrDefault();
		}

		public async Task<Users?> GetDataforSubUserAuth(string email, string password)
		{
			var result = await _service.LoadData<Users, dynamic>(
				"[dbo].[sp_AuthenticateSubUser]",
				new { id = email, pass = password });

			return result.FirstOrDefault();
		}
	}
}

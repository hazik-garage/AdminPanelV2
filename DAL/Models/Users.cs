using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Users
	{
		public int UserID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? UserImage { get; set; }
        public string? Email { get; set; }
        //public string? Password { get; set; }
        public int? TimeZone { get; set; }
        public int? TimeZoneID { get; set; }
        public string? Type { get; set; }
        public string? Contact { get; set; }
        public string? Address { get; set; }
        public string? CountryID { get; set; }
        public int? CityID { get; set; }
        public string? Website { get; set; }
    }
}
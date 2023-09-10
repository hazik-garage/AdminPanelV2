using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Location
    {
        public int LocationID { get; set; }
        public string Name { get; set; }
        public string ArabicName { get; set; }
        public string ArabicDescription { get; set; }
        public string Descripiton { get; set; }
        public string Address { get; set; }
        public string ArabicAddress { get; set; }
        public string ContactNo { get; set; }
        public string Email { get; set; }
        public double? MinOrderAmount { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public int? LandmarkID { get; set; }
        public string LastUpdatedBy { get; set; }
        public string LastUpdatedDate { get; set; }
        public int StatusID { get; set; }
        public int? CustomerStatusID { get; set; }
        public string ImageURL { get; set; }
        public string Gmaplink { get; set; }

        public string Amenities { get; set; }
        public string Service { get; set; }

        public bool? IsFeatured { get; set; }

        public List<string> ImagesSource { get; set; }
    }
}

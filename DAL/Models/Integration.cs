using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Integration
    {
        public int IntegrationID { get; set; }
        public string Name { get; set; }
        public string IntegrationKey { get; set; }
        public string Token { get; set; }
        public string Value { get; set; }
        public int StatusID { get; set; }
        public int UserID { get; set; }
        public string URL { get; set; }

    }
}

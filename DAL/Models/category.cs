
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Category
    {
        public int CategoryID { get; set; }
        public int RowID { get; set; }
        public string Name { get; set; }
        public string AlternateName { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int DisplayOrder { get; set; }
        public int SortByAlpha { get; set; }
        public string LastUpdatedBy { get; set; }
        public int StatusID { get; set; }
        public Nullable<int> LocationID { get; set; }
        
    }
}


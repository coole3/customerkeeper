using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular5.Models.Requests
{
    public class AppointPaging
    {
        public int PageSize { get; set; }
        public int PageNum { get; set; }
        public string SortDir { get; set; }
        public string SortCol { get; set; }
        public string UserId { get; set; }
        public string CustFNameFilter { get; set; }
        public string CustLNameFilter { get; set; }
        public string AppointFilter { get; set; }
    }
}

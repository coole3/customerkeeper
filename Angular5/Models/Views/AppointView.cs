using Angular5.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular5.Models.Requests
{
    public class AppointView
    {
        public List<AppointDom> appointList { get; set; }
        public int appointTotal { get; set; }
    }
}

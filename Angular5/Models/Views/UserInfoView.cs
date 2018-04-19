using Angular5.Models.Domain;
using Angular5.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular5.Models.Views
{
    public class UserInfoView
    {
        public AppointView appointView { get; set; }
        public List<ProfileDom> profDom { get; set; }
    }
}

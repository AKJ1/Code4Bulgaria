using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HackathonBackend.Models
{
    public class CreateSignalBindingModel
    {
        [Required]
        public string Text { get; set; }

        //public Dictionary<string, byte[]> Images { get; set; }

        //These are all optional properties that can be included but arent nessecarily needed
        //public GeoLocation SignalLocation { get; set; }

        public string City { get; set; }

        public string Address { get; set; }

        public int InstitutionId { get; set; }

        //public Dictionary<string, string> SignalData { get; set; }

    }
}
namespace HackathonBackend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    [ComplexType]
    public class GeoLocation
    {
        public double Longtitude { get; set; }

        public double Latitude { get; set; }

        public int Accuracy { get; set; }

        public double Altitude { get; set; }

        public int AltitudeAccuracy { get; set; }
    }
}

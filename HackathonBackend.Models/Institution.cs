namespace HackathonBackend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    public class Institution
    {
        public Institution()
        {
            this.keywords = new List<string>();
        }
        private ICollection<string> keywords;

        [Key]
        public int Id                       { get; set; }

        public string InstitutionName       { get; set; }

        public ICollection<string> Keywords { get; set; }

        public string InstitutionUrl        { get; set; }
    }
}

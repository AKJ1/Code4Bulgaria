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
            this.Keywords = new List<Keyphrase>();
            this.RequiredFields = new List<string>();
            this.Signals = new List<Signal>();
        }

        [Key]
        public int Id                       { get; set; }

        public string InstitutionName       { get; set; }

        public string Description { get; set; }

        public string Text { get; set; }

        public virtual ICollection<Keyphrase> Keywords { get; set; }

        public ICollection<string> RequiredFields{ get; set; } 

        public string InstitutionUrl        { get; set; }

        public virtual ICollection<Signal> Signals  { get; set; }

        public bool AllowAnonymous          { get; set; }
    }
}

using System;

namespace HackathonBackend.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    public class Keyphrase
    {
        [Key]
        public int Id { get; set; }

        public string Phrase { get; set; }

        public virtual IDictionary<Institution, int> InstitutionsByRelevance { get; set; }

    }
}

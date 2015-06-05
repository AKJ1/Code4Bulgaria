using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace HackathonBackend.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    public class Keyphrase
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Phrase { get; set; }

        public virtual Institution Institution { get; set; }

        public int KeywordScore { get; set; }

        [Required]
        [Column("Institution")]
        public int  InstitutionId { get; set; }

    }
}

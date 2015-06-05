using System;

namespace HackathonBackend.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class Signal
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public virtual User User { get; set; }

        [Required]
        [ForeignKey("User")]
        public string UserId { get; set; }

        [Required]
        public string Text { get; set; }

        public Dictionary<string, byte[]> Images { get; set; }

        //These are all optional properties that can be included but arent nessecarily needed
        public GeoLocation SignalLocation { get; set; }

        public string City { get; set; }

        public string Address { get; set; }

        [Required]
        public virtual Institution AssignedInstitution { get; set; }

        [Required]
        [ForeignKey("Institution")]
        public int InstitutionId { get; set; }

        public Dictionary<string, string> SignalData { get; set; }

        public DateTime SubmittedOn { get; set; }
    }
}
i
namespace HackathonBackend.Models
{
    using System;
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
        [ForeignKey("AssignedInstitution")]
        public int AssignedInstitutionId { get; set; }

        public Dictionary<string, string> SignalData { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime SubmittedOn { get; set; }

        public long SolveTime { get; set; }

        public bool IsResolved { get; set; }

        public bool IsAnonymous { get; set; }

        public void SetSolveLength(TimeSpan ts)
        {
            this.SolveTime = ts.Ticks;
        }

        public TimeSpan GetSolveLength()
        {
            return TimeSpan.FromTicks(this.SolveTime);
        }
    }
}
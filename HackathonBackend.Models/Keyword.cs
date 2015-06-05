using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackathonBackend.Models
{
    class Keyphrase
    {

        public string Phrase { get; set; }

        public IDictionary<Institution, int> InstitutionsByRelevance { get; set; }

    }
}

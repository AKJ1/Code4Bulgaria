using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HackathonBackend.Data.UnitOfWork;

namespace HackathonBackend.Controllers
{
    public class KeyphraseController : ApiController
    {
        HackathonData data = new HackathonData();
        [HttpGet]
        [Route("api/Keyphrase/")]
        public IHttpActionResult GetAllKeyphrases()
        {
            var keyphrases = data.Keyphrases.All().Select(kp => new
            {
                Phrase = kp.Phrase,
                Institution = kp.InstitutionId,
                Score = kp.KeywordScore,
                Id = kp.Id

            });

            return Json(keyphrases);
        }

        [HttpGet]
        [Route("api/Keyphrase/{Id}")]
        public IHttpActionResult GetKeyphraseById(int Id)
        {
            var kp = data.Keyphrases.GetById(Id);

            return Json(new
            {
                Phrase = kp.Phrase,
                Institution = kp.InstitutionId,
                Score = kp.KeywordScore,
                Id = kp.Id
            });
        }
    }
}

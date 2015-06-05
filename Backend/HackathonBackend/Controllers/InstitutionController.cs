using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HackathonBackend.Data.UnitOfWork;

namespace HackathonBackend.Controllers
{
    public class InstitutionController : ApiController
    {
        private HackathonData data = new HackathonData();

        [HttpGet]
        [Route("api/Institution")]
        public IHttpActionResult GetAllInstitutions()
        {
            var institutions = data.Institutions.All()
                .OrderBy(i => i.InstitutionName)
                .Select(i => new
                {
                    InstitutionName = i.InstitutionName,
                    InstitutionId = i.Id,
                    InstitutionKeywords = i.Keywords.Select(kw => kw.Phrase),
                });
            return Json(institutions);
        }

        [HttpGet]
        [Route("api/Institution/{Id}")]
        public IHttpActionResult GetInstitutionById(int Id)
        {
            var institution = data.Institutions.GetById(Id);
            return Json(new
            {
                InstitutionName = institution.InstitutionName,
                InstitutionId = institution.Id,
                InstitutionKeywords = institution.Keywords.Select(kw => kw.Phrase),
                AllowAnonymous = institution.AllowAnonymous,
                RequiredFields = institution.RequiredFields
            });
        }

        [HttpGet]
        [Route("api/Institution/keyword={keyword}")]
        public IHttpActionResult GetInstitutionByKeyword([FromUri]string keyword)
        {
            var institutions = data.Institutions.Find(i => i.Keywords.Any(k => k.Phrase.Contains(keyword)))
                 .OrderBy(i => i.InstitutionName)
                 .Select(i => new
                 {
                     InstitutionName = i.InstitutionName,
                     InstitutionId = i.Id,
                     InstitutionKeywords = i.Keywords.Select(kw => kw.Phrase),
                     AllowAnonymous = i.AllowAnonymous,
                     RequiredFields = i.RequiredFields
                 });
            return Json(institutions); 
        }
    }
}

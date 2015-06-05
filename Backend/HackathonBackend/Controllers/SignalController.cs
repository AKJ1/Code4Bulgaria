﻿namespace HackathonBackend.Controllers
{
    using System;
    using System.Linq;
    using System.Web.Http;
    using HackathonBackend.Data.UnitOfWork;
    using HackathonBackend.Models;
    using Microsoft.AspNet.Identity;
    public class SignalController : ApiController
    {
        private HackathonData data = new HackathonData();
        [HttpPost]
        [Authorize]
        [Route("api/Signal/Create")]

        //TODO : FIX
        public IHttpActionResult CreateSignal([FromBody]CreateSignalBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Signal submittedSignal = new Signal();
            //submittedSignal.City = model.City;
            //submittedSignal.Address = model.Address;
            ////submittedSignal.SignalLocation = model.SignalLocation;
            //submittedSignal.UserId = User.Identity.GetUserId();
            //submittedSignal.AssignedInstitutionId = model.InstitutionId;
            ////submittedSignal.Images = model.Images;
            ////submittedSignal.SignalData = model.SignalData;
            //submittedSignal.Text = model.Text;

            data.Signals.Add(submittedSignal);
            return Ok(new {message = "Sucessful Submission!"});
        }

        [HttpPost]
        [Route("api/Signal/Resolve/{id}")]
        public IHttpActionResult ResolveSignal(int id)
        {

            var signal = data.Signals.GetById(id);
            if (signal != null && signal.UserId == User.Identity.GetUserId())
            {
                data.Signals.Update(id).IsResolved = true;
                return Ok();
            }
            else if (signal != null)
            {
                return Unauthorized();
            }
            else
            {
                return NotFound();    
            }
        }

        [HttpGet]
        [Authorize]
        [Route("api/Signal/My")]
        public IHttpActionResult GetSignalsByUser()
        {
            try
            {
                var userId = User.Identity.GetUserId();
                var userSignals = data.Signals.Find(s => s.UserId == userId)
                            .OrderBy(s => s.SubmittedOn)
                            .Select(s => new
                            {
                                DateAdded = s.SubmittedOn,
                                Institution = s.AssignedInstitution,
                                Content = s.Text,
                                HasPictures = s.Images.Any(),
                                HasExtraData = s.SignalData.Any(),
                                HasLocation = s.SignalLocation != null
                            })
                            .ToList();

                return Json(userSignals);
            }
            catch (Exception)
            {
                
                throw;
            }
        }
        [HttpGet]
        [Authorize]
        [Route("api/Signal/{Id}")]
        public IHttpActionResult GetSignalById(int id)
        {
            var wantedSignal = data.Signals.GetById(id);

            if (wantedSignal.UserId == User.Identity.GetUserId())
            {
                return Json(new
                {
                    DateAdded = wantedSignal.SubmittedOn,
                    Institution = wantedSignal.AssignedInstitution,
                    Content = wantedSignal.Text,
                    Pictures = wantedSignal.Images,
                    ExtraData = wantedSignal.SignalData,
                    Location = wantedSignal.SignalLocation
                });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
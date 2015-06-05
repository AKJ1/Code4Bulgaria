
using System;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace HackathonBackend.Data.Migrations
{
    using System.Data.Entity.Migrations;
    using System.Collections.Generic;
    using System.Linq;
    using HackathonBackend.Models;
    class HackathonMigrationsConfiguration : DbMigrationsConfiguration<HackathonDbContext>
    {
        public HackathonMigrationsConfiguration()
        {
            this.AutomaticMigrationDataLossAllowed = true;
            this.AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(HackathonDbContext context)
        {
            
            if (!context.Institutions.Any())
            {
                CreateInstitutions(context); 
            }
            if (!context.Users.Any())
            {
                CreateUsers(context);               
            }
            if (!context.Signals.Any())
            {
                CreateSignals(context); 
            }
            if (!context.Keyphrases.Any())
            {
                CreateKeyphrases(context);
            }
            

            base.Seed(context);
        }
        private void CreateUsers(HackathonDbContext context)
        {
            UserStore<User> userStore = new UserStore<User>();
            var userManager = new UserManager<User>(userStore);
 
            PasswordHasher hasher = new PasswordHasher();
            var users = new List<User>()
            {
                
                new User()
                {
                    FirstName = "Pesho",
                    MiddleName = "Peshov",
                    LastName = "Goshov",
                    Adress = "22nd Internet Street",
                    Email = "Goshov@abv.bg",
                    UserName = "Goshko_pi4a",
                    PasswordHash = hasher.HashPassword("123123")
                    
                },
                new User()
                {
                    FirstName = "Ginka",
                    MiddleName = "Gi4kova",
                    LastName = "Gi4akova",
                    Adress = " 1nd Dolno Nanagornishte street",
                    Email = "Gi4ka@gbg.bg",
                    UserName = "Ginka",
                    PasswordHash = hasher.HashPassword("123123")
                    
                },
                new User()
                {
                    FirstName = "Penka",
                    MiddleName = "Penova",
                    LastName = "Penarkova",
                    Adress = "1 Softuni Lane",
                    Email = "penka@softuni.bg",
                    UserName = "penarkova",
                    PasswordHash = hasher.HashPassword("123123")
                    
                }

            };
            foreach (var user in users)
            {
                context.Users.Add(user);
            }
            context.SaveChanges();
        }

        private void CreateInstitutions(HackathonDbContext context)
        {
            var Institutions = new List<Institution>()
            {
                new Institution()
                {
                    AllowAnonymous  = false, 
                    InstitutionName = "Министертво на Образованието",
                    InstitutionUrl  = "http://mon.bg",
                    Keywords        = new HashSet<Keyphrase>(),
                    Signals         = new List<Signal>(),
                    RequiredFields  = new List<string>()
                    {
                        "first-name", "last-name", "middle-name", "description", "question", "problem"
                    }
                },
                new Institution()
                {
                    AllowAnonymous  = true, 
                    InstitutionName = "Министертво на Културата",
                    InstitutionUrl  = "http://mon.bg",
                    Keywords        = new HashSet<Keyphrase>(),
                    Signals         = new List<Signal>(),
                    RequiredFields  = new List<string>()
                    {
                        "first-name", "last-name", "question", "problem"
                    }
                },
                new Institution()
                {
                    AllowAnonymous  = true, 
                    InstitutionName = "Министертво на Истината",
                    InstitutionUrl  = "http://mon.bg",
                    Keywords        = new HashSet<Keyphrase>(),
                    Signals         = new List<Signal>(),
                    RequiredFields  = new List<string>()
                    {
                        "first-name", "description", "question", "problem"
                    }
                }
            };
            Institutions.ForEach(i => context.Institutions.Add(i));
            context.SaveChanges();
        }

        private void CreateKeyphrases(HackathonDbContext context)
        {
            var institution = context.Institutions.First();
            var list = new List<Keyphrase>()
            {
                new Keyphrase()
                {
                    Phrase = "Learning",
                    InstitutionId = institution.Id
                },
                new Keyphrase()
                {
                    Phrase = "Not Learning",
                   InstitutionId = institution.Id
                },
                new Keyphrase()
                {
                    Phrase = "Learning More",
                    InstitutionId = institution.Id
                },
            };
            foreach (var item in list)
            {
                institution.Keywords.Add(item);
                context.Keyphrases.Add(item);
            }
            context.SaveChanges();
        }
        private void CreateSignals(HackathonDbContext context)
        {
            var user = context.Users.First();
            var institution = context.Institutions.First();
            var Signals = new List<Signal>()
            {
                new Signal()
                {
                   Text                  = "My Cat is Missing! - Not Resolved - Anonymous - No Extra Data - No Location",
                   Address               = "San Andreas Church",
                   AssignedInstitutionId = institution.Id,
                   City                  = "Sofia",
                   IsAnonymous           = true,
                   IsResolved            = false,
                   SubmittedOn           = DateTime.Now,
                   UserId                = user.Id,
                   SignalLocation        = new GeoLocation(),
                   
                   AssignedInstitution = institution,
                   
                },
                new Signal()
                {
                   Text                  = "My Cat is not Missing! - Resolved - Anonymous - No Extra Data - No Location",
                   Address               = "San Andreas Church",
                   AssignedInstitutionId = institution.Id,
                   City                  = "Sofia",
                   IsAnonymous           = true,
                   IsResolved            = true,
                   SubmittedOn           = DateTime.Now - TimeSpan.FromDays(7),
                   ResolveTime             = TimeSpan.FromDays(7).Ticks,
                   UserId                = user.Id,
                   SignalLocation        = new GeoLocation(),
                   
                   AssignedInstitution   = institution,

                },
                new Signal()
                {
                   Text                  = "My Cat is not Missing! - Resolved - Non-Anonymous - Extra Data - Location",
                   Address               = "San Andreas Church",
                   AssignedInstitutionId = institution.Id,
                   City                  = "Sofia",
                   IsAnonymous           = false,
                   IsResolved            = true,
                   SubmittedOn           = DateTime.Now - TimeSpan.FromDays(7),
                   ResolveTime           = TimeSpan.FromDays(7).Ticks,
                   UserId                = user.Id,
                   AssignedInstitution   = institution,
                   SignalData = new Dictionary<string, string>()
                   {
                       {"thing", "thang"},
                       {"age", "12"},
                       {"key", "value"}
                   },
                   SignalLocation = new GeoLocation()
                   {
                       Accuracy = 100,
                       Altitude =  200.20,
                       AltitudeAccuracy = 100,
                       Latitude = 10.10,
                       Longtitude = 10.10
                   }
                   


                }
            };
            Signals.ForEach(s => institution.Signals.Add(s));
            Signals.ForEach(s => context.Signals.Add(s));
            context.SaveChanges();
        }
        
            
    }
}

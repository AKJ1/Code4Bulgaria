using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HackathonBackend.Data.Contracts;
using HackathonBackend.Data.Migrations;
using HackathonBackend.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace HackathonBackend.Data
{
    public class HackathonDbContext : IdentityDbContext<User>, IHackathonDbContext
    {
        #region Constructors
        public HackathonDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<HackathonDbContext, HackathonMigrationsConfiguration>());
        }
        
        public static HackathonDbContext Create()
        {
            return new HackathonDbContext();
        }
        #endregion

        #region Overriden Methods
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public IDbSet<T> Set<T>() where T : class
        {
            return base.Set<T>();
        }
        #endregion

        #region Tables

        #endregion
    }
    
}

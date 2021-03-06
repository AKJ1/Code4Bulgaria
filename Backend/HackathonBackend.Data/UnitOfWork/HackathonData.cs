﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HackathonBackend.Data.Contracts;
using HackathonBackend.Data.Repositories;
using HackathonBackend.Models;

namespace HackathonBackend.Data.UnitOfWork
{
    public class HackathonData : IHackathonData
    {
        #region Private Fields
        private HackathonDbContext context;

        private IDictionary<Type, object> repositories;
        #endregion

        #region Constructors

        public HackathonData()
            :this(new HackathonDbContext())
        {
            
        }
        public HackathonData(HackathonDbContext context)
        {
            this.context = context;
            this.repositories = new Dictionary<Type, object>();
        }
        #endregion

        #region Repositories

        public IRepository<User> Users
        {
            get { return this.GetRepository<User>(); }
        }
        public IRepository<Signal> Signals
        {
            get { return this.GetRepository<Signal>(); } 
        }

        public IRepository<Institution> Institutions
        {
            get { return this.GetRepository<Institution>(); }
        }

        public IRepository<Keyphrase> Keyphrases
        {
            get { return this.GetRepository<Keyphrase>(); }
        }

        #endregion

        #region Methods

        public int SaveChanges()
        {
            return this.context.SaveChanges();
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            var type = typeof(T);

            if (!this.repositories.ContainsKey(type))
            {
                var typeOfRepo = typeof(GenericRepository<T>);
                var repo = Activator.CreateInstance(typeOfRepo, this.context);
                this.repositories.Add(type, repo);
            }

            return (IRepository<T>)this.repositories[type];
        }
        #endregion
    }
}

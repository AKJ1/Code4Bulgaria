﻿namespace HackathonBackend.Data.Contracts
{
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using HackathonBackend.Models;
    public interface IHackathonDbContext
    {
        IDbSet<User> Users { get; set; } 

        int SaveChanges();

        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;

        IDbSet<T> Set<T>() where T : class;
    }
}

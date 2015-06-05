using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HackathonBackend.Models;

namespace HackathonBackend.Data.Contracts
{
    interface IHackathonData
    {
        IRepository<User> Users { get; }
        int SaveChanges();
    }
}

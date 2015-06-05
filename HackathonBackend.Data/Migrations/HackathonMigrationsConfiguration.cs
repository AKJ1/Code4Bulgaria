namespace HackathonBackend.Data.Migrations
{
    using System.Data.Entity.Migrations;
    class HackathonMigrationsConfiguration : DbMigrationsConfiguration<HackathonDbContext>
    {
        public HackathonMigrationsConfiguration()
        {
            this.AutomaticMigrationDataLossAllowed = true;
            this.AutomaticMigrationsEnabled = true;
        }
    }
}

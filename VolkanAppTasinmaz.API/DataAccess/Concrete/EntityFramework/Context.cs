using Core.Entities.Concrete;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.Concrete;

namespace DataAccess.Concrete.EntityFramework
{
    public class Context : DbContext
    {
        public Context()
        {
            Database.Migrate();
        }

        public Context(DbContextOptions<Context> options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseNpgsql("Server=localhost;Port=5432;Database=VolkanAppTasinmaz;User Id=postgres;Password=12345;");
        }
        public DbSet<User> Users { get; set; }

        public DbSet<OperationClaim> OperationClaims { get; set; }

        public DbSet<Tasinmaz> Tasinmazlar { get; set; }

        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }

        public DbSet<Il> Il { get; set; }
        public DbSet<Ilce> Ilce { get; set; }

        public DbSet<Mahalle> Mahalle { get; set; }

        public DbSet<Log> Log { get; set; }

    }
}

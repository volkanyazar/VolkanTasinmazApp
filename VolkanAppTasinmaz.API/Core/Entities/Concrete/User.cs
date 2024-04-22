using Core.Entities.Abstract;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VolkanAppTasinmaz.API.Core.Entities.Concrete
{
    [Table("tblusers")]
    public class User : IEntity
    {
        [Key, Column("userid")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
 
        [Required, Column("firstname"), StringLength(30)]
        public string FirstName { get; set; }
        
        [Required, Column("lastname"), StringLength(30)]
        public string LastName { get; set; }
        
        [Required, Column("email"), StringLength(80)]
        public string Email { get; set; }
        
        [Column("passwordsalt")]
        public byte[] PasswordSalt { get; set; }
        
        [Column("passwordhash")]
        public byte[] PasswordHash { get; set; }

        [Column("newpassword")]
        public virtual string NewPassword { get; set; }

        [Column("status"),DefaultValue(true)]
        public bool Status { get; set; }

        [Required, Column("role"), StringLength(30)]
        public string Role { get; set; }

        [Column("adres"), StringLength(80)]
        public string Adres { get; set; }
    }
}

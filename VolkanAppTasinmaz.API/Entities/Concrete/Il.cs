using Core.Entities;
using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Entities.Concrete
{
    [Table("tbliller")]
    public class Il:IEntity
    {
        [Key, Column("il_id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IlId { get; set; }

        [Required, Column("il_adi"), StringLength(30)]
        public string IlName { get; set; }
    }
}

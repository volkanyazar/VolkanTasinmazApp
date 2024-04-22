using Core.Entities;
using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    [Table("tblilceler")]
    public class Ilce:IEntity
    {
        [Key, Column("ilce_id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IlceId { get; set; }
        [Required, Column("ilce_adi"), StringLength(30)]
        public string IlceName { get; set; }

        [Required, Column("il_id")]
        public int IlId { get; set; }

        [ForeignKey("IlId")]
        public virtual Il Il { get; set; }

   
    }
}

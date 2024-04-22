using Core.Entities;
using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    [Table("tblmahalleler")]
    public class Mahalle:IEntity
    {
        [Key, Column("mahalle_id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MahalleId { get; set; }

        [Required, Column("mahalle_adi"), StringLength(30)]
        public string MahalleName { get; set; }

        [Required, Column("ilce_id")]
        public int IlceId { get; set; }

        [ForeignKey("IlceId")]
        public virtual Ilce Ilce { get; set; }

        
    }
}

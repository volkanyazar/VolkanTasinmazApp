using Core.Entities;
using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    [Table("tbllogs")]
    public class Log :IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int logid { get; set; }
        public Boolean durum { get; set; }
        public string  islemtipi { get; set; }
        public string aciklama { get; set; }

        public DateTime tarih { get; set; }

        public string logip { get; set; }

        public int userid { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Entities.Concrete;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;

namespace VolkanAppTasinmaz.API.Entities.DTOs
{
    public class TasinmazModel : IDto
    {
        public int TasinmazId { get; set; }
        public int Il { get; set; }
        public int Ilce { get; set; }
        public int MahalleId { get; set; }
        public string Ada { get; set; }
        public string Parsel { get; set; }
        public string Nitelik { get; set; }

        public string Adres { get; set; }
        public int UserId { get; set; }
        public string coorX { get; set; }
        public string coorY { get; set; }
    }
}
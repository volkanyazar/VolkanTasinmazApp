using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace VolkanAppTasinmaz.API.Entities.DTOs
{
    public class TasinmazDetailDto : IDto
    {
        public int TasinmazId { get; set; }
        public int Il { get; set; }
        public int Ilce { get; set; }


        public int UserId { get; set; }
        public string CoorX { get; set; }

        public int CoorY { get; set; }

    }
}

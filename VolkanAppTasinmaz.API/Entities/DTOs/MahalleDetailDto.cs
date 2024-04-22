using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace VolkanAppTasinmaz.API.Entities.DTOs
{
    public class MahalleDetailDto : IDto
    {
        public int Kid { get; set; }

        public int Iid { get; set; }

        public string Kname { get; set; }
    }
}

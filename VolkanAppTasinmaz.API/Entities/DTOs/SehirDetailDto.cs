using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace VolkanAppTasinmaz.API.Entities.DTOs
{
    public class SehirDetailDto : IDto
    {
        public int Sid { get; set; }
        public string Sname { get; set; }

    }

}

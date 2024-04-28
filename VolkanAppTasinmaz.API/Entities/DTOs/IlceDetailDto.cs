using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace VolkanAppTasinmaz.API.Entities.DTOs
{
    public class IlceDetailDto : IDto
    {
        public int IlceId { get; set; }
        public string IlceAdi { get; set; }
        public int IlId { get; set; }
    }
}

using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace VolkanAppTasinmaz.API.Entities.DTOs
{
    public class UserUpdateDto : IDto
    {
        public int UserId { get; set; }


        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public string ActivePassword { get; set; }
        public string NewPassword { get; set; }
    }
}
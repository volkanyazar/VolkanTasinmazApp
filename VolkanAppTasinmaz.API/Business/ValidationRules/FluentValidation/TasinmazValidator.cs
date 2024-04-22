using Entities.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
using VolkanAppTasinmaz.API.Entities.Concrete;

namespace Business.ValidationRules.FluentValidation
{
    public class TasinmazValidator:AbstractValidator<Tasinmaz>
    {
        public TasinmazValidator()
        {
            //RuleFor(p => p.Adres).NotEmpty();
            //RuleFor(p => p.Il).MinimumLength(2);
            RuleFor(p => p.Il).NotEmpty();
           
        }
    }
}

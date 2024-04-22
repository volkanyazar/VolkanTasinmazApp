using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities.Concrete;
using Entities.Concrete;
using FluentValidation;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;

namespace Business.ValidationRules.FluentValidation
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            //RuleFor(p => p.Adres).NotEmpty();
            //RuleFor(p => p.Il).MinimumLength(2);
            //RuleFor(p => p.Il).NotEmpty();

        }
    }
}

using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.Utilities;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using VolkanAppTasinmaz.API.Business.Abstract;
using VolkanAppTasinmaz.API.DataAccess.Abstract;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace VolkanAppTasinmaz.API.Business.Concrete
{
    public class TasinmazManager : ITasinmazService
    {
        private readonly ITasinmazDal _tasinmazDal;
        ILogDal _logDal;

        public TasinmazManager(ITasinmazDal tasinmazDal, ILogDal logDal)
        {
            _tasinmazDal = tasinmazDal;
            _logDal = logDal;

        }
        [ValidationAspect(typeof(TasinmazValidator))]

        public IResult Add(Tasinmaz tasinmaz)
        {
            _tasinmazDal.Add(tasinmaz);
            return new SuccessResult("Taşınmaz Başarıyla Eklendi");
        }

        public IResult AddLog(Log log)
        {
            _logDal.Add(log);
            return new SuccessResult("Taşınmaz Log Eklendi");
        }

        public IResult Delete(int tasinmazId)
        {
            var tasinmazToDelete = _tasinmazDal.Get(p => p.TasinmazId == tasinmazId);

            if (tasinmazToDelete == null)
            {
                return new ErrorResult("Taşınmaz Bulunamadı");
            }

            _tasinmazDal.Delete(tasinmazToDelete);
            return new SuccessResult("Taşınmaz Başarıyla Silindi...");
        }

        public IDataResult<List<Tasinmaz>> GetAll()
        {
            return new SuccessDataResult<List<Tasinmaz>>(_tasinmazDal.GetAll(), "Taşınmazlar Başarıyla Listelendi...");
        }
        public IDataResult<List<Tasinmaz>> GetByUserId(int userId)
        {
            return new SuccessDataResult<List<Tasinmaz>>(_tasinmazDal.GetList(p => p.UserId == userId).ToList());
        }

        public IDataResult<List<TasinmazDetailDto>> GetTasinmazDetails()
        {
            return new SuccessDataResult<List<TasinmazDetailDto>>(_tasinmazDal.GetTasinmazDetails());
        }

        public IDataResult<List<Log>> GetAllLog()
        {
            return new SuccessDataResult<List<Log>>(_logDal.GetAll(), "Bütün Taşınmaz Logları Listelendi");
        }
        public IDataResult<Tasinmaz> GetById(int tasinmazId)
        {
            return new SuccessDataResult<Tasinmaz>(_tasinmazDal.Get(p => p.TasinmazId == tasinmazId));
        }
        public IResult Update(Tasinmaz tasinmaz)
        {

            _tasinmazDal.Update(tasinmaz);
            return new SuccessResult("Taşınmaz Başarıyla Güncellendi...");
        }

        public IDataResult<List<Tasinmaz>> GetListByIl(int Sid)
        {
            throw new NotImplementedException();
        }
    }
}

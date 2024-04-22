using Business.Abstract;
using Core.Utilities;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class LogManager : ILogService
    {
        ILogDal _logDal;

        public LogManager(ILogDal logDal)
        {
            _logDal = logDal;
        }
        public IResult Add(Log log)
        {              

            _logDal.Add(log);
            return new SuccessResult("Log Başarıyla Eklendi");

        }

        public IDataResult<List<Log>> GetAll()
        {
            return new SuccessDataResult<List<Log>>(_logDal.GetAll(), "Log Kayıtları Başarıyla Listelendi...");

        }
    }


}

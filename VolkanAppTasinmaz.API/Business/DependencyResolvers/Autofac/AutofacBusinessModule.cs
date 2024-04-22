using Autofac;
using Autofac.Extras.DynamicProxy;
using Business.Abstract;
using Business.Concrete;
using Castle.DynamicProxy;
using Core.Utilities.Interceptors;
using Core.Utilities.Security.JWT;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using VolkanAppTasinmaz.API.Business.Abstract;
using VolkanAppTasinmaz.API.Business.Concrete;
using VolkanAppTasinmaz.API.DataAccess.Abstract;

namespace Business.DependencyResolvers.Autofac
{
    public class AutofacBusinessModule :Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<TasinmazManager>().As<ITasinmazService>().SingleInstance();
            builder.RegisterType<EfTasinmaz>().As<ITasinmazDal>().SingleInstance();

            builder.RegisterType<UserManager>().As<IUserService>();
            builder.RegisterType<EfUserDal>().As<IUserDal>();

            builder.RegisterType<AuthManager>().As<IAuthService>();
            builder.RegisterType<JwtHelper>().As<ITokenHelper>();

            builder.RegisterType<IlManager>().As<IIlService>().SingleInstance();
            builder.RegisterType<EfIl>().As<IIlDal>().SingleInstance();

            builder.RegisterType<IlceManager>().As<IIlceService>().SingleInstance();
            builder.RegisterType<EfIlce>().As<IIlceDal>().SingleInstance();

            builder.RegisterType<MahalleManager>().As<IMahalleService>().SingleInstance();
            builder.RegisterType<EfMahalle>().As<IMahalleDal>().SingleInstance();

            builder.RegisterType<UserOperationClaimManager>().As<IUserOperationClaimService>().SingleInstance();
            builder.RegisterType<EfUserOperationClaim>().As<IUserOperationClaimDal>().SingleInstance();


            builder.RegisterType<LogManager>().As<ILogService>().SingleInstance();
            builder.RegisterType<EfLog>().As<ILogDal>().SingleInstance();



            var assembly = System.Reflection.Assembly.GetExecutingAssembly();

            builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
                .EnableInterfaceInterceptors(new ProxyGenerationOptions()
                {
                    Selector = new AspectInterceptorSelector()
                }).SingleInstance();
        }
    }
}

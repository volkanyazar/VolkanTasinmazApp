using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities.Abstract;

namespace Core.Entities.Concrete
{
    public class UserOperationClaim :IEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int OperationClaimId { get; set; }
        
        [ForeignKey("OperationClaimId")]
        public virtual OperationClaim OperationClaim { get; set; }
    }
}

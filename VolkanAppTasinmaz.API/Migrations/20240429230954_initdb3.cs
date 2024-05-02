using Microsoft.EntityFrameworkCore.Migrations;

namespace VolkanAppTasinmaz.API.Migrations
{
    public partial class initdb3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_UserOperationClaims_OperationClaimId",
                table: "UserOperationClaims",
                column: "OperationClaimId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserOperationClaims_OperationClaims_OperationClaimId",
                table: "UserOperationClaims",
                column: "OperationClaimId",
                principalTable: "OperationClaims",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserOperationClaims_OperationClaims_OperationClaimId",
                table: "UserOperationClaims");

            migrationBuilder.DropIndex(
                name: "IX_UserOperationClaims_OperationClaimId",
                table: "UserOperationClaims");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace VolkanAppTasinmaz.API.Migrations
{
    public partial class initdb2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "x",
                table: "tbltasinmaz",
                maxLength: 155,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "y",
                table: "tbltasinmaz",
                maxLength: 155,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "x",
                table: "tbltasinmaz");

            migrationBuilder.DropColumn(
                name: "y",
                table: "tbltasinmaz");
        }
    }
}

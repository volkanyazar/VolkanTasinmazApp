using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace VolkanAppTasinmaz.API.Migrations
{
    public partial class initdb1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OperationClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperationClaims", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tbliller",
                columns: table => new
                {
                    il_id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    il_adi = table.Column<string>(maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbliller", x => x.il_id);
                });

            migrationBuilder.CreateTable(
                name: "tbllogs",
                columns: table => new
                {
                    logid = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    durum = table.Column<bool>(nullable: false),
                    islemtipi = table.Column<string>(nullable: true),
                    aciklama = table.Column<string>(nullable: true),
                    tarih = table.Column<DateTime>(nullable: false),
                    logip = table.Column<string>(nullable: true),
                    userid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbllogs", x => x.logid);
                });

            migrationBuilder.CreateTable(
                name: "tblusers",
                columns: table => new
                {
                    userid = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    firstname = table.Column<string>(maxLength: 30, nullable: false),
                    lastname = table.Column<string>(maxLength: 30, nullable: false),
                    email = table.Column<string>(maxLength: 80, nullable: false),
                    passwordsalt = table.Column<byte[]>(nullable: true),
                    passwordhash = table.Column<byte[]>(nullable: true),
                    newpassword = table.Column<string>(nullable: true),
                    status = table.Column<bool>(nullable: false),
                    role = table.Column<string>(maxLength: 30, nullable: false),
                    adres = table.Column<string>(maxLength: 80, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblusers", x => x.userid);
                });

            migrationBuilder.CreateTable(
                name: "UserOperationClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(nullable: false),
                    OperationClaimId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserOperationClaims", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblilceler",
                columns: table => new
                {
                    ilce_id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ilce_adi = table.Column<string>(maxLength: 30, nullable: false),
                    il_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblilceler", x => x.ilce_id);
                    table.ForeignKey(
                        name: "FK_tblilceler_tbliller_il_id",
                        column: x => x.il_id,
                        principalTable: "tbliller",
                        principalColumn: "il_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblmahalleler",
                columns: table => new
                {
                    mahalle_id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    mahalle_adi = table.Column<string>(maxLength: 30, nullable: false),
                    ilce_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblmahalleler", x => x.mahalle_id);
                    table.ForeignKey(
                        name: "FK_tblmahalleler_tblilceler_ilce_id",
                        column: x => x.ilce_id,
                        principalTable: "tblilceler",
                        principalColumn: "ilce_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tbltasinmaz",
                columns: table => new
                {
                    tasinmazid = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    il = table.Column<int>(nullable: false),
                    ilce = table.Column<int>(nullable: false),
                    mahalleid = table.Column<int>(nullable: false),
                    ada = table.Column<string>(maxLength: 30, nullable: false),
                    parsel = table.Column<string>(maxLength: 30, nullable: false),
                    nitelik = table.Column<string>(maxLength: 30, nullable: false),
                    adres = table.Column<string>(maxLength: 60, nullable: false),
                    userid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbltasinmaz", x => x.tasinmazid);
                    table.ForeignKey(
                        name: "FK_tbltasinmaz_tblmahalleler_mahalleid",
                        column: x => x.mahalleid,
                        principalTable: "tblmahalleler",
                        principalColumn: "mahalle_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tbltasinmaz_tblusers_userid",
                        column: x => x.userid,
                        principalTable: "tblusers",
                        principalColumn: "userid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblilceler_il_id",
                table: "tblilceler",
                column: "il_id");

            migrationBuilder.CreateIndex(
                name: "IX_tblmahalleler_ilce_id",
                table: "tblmahalleler",
                column: "ilce_id");

            migrationBuilder.CreateIndex(
                name: "IX_tbltasinmaz_mahalleid",
                table: "tbltasinmaz",
                column: "mahalleid");

            migrationBuilder.CreateIndex(
                name: "IX_tbltasinmaz_userid",
                table: "tbltasinmaz",
                column: "userid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperationClaims");

            migrationBuilder.DropTable(
                name: "tbllogs");

            migrationBuilder.DropTable(
                name: "tbltasinmaz");

            migrationBuilder.DropTable(
                name: "UserOperationClaims");

            migrationBuilder.DropTable(
                name: "tblmahalleler");

            migrationBuilder.DropTable(
                name: "tblusers");

            migrationBuilder.DropTable(
                name: "tblilceler");

            migrationBuilder.DropTable(
                name: "tbliller");
        }
    }
}

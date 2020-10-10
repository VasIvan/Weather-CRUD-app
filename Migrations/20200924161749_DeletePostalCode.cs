using Microsoft.EntityFrameworkCore.Migrations;

namespace Fullstack.Migrations
{
    public partial class DeletePostalCode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PostalCode",
                table: "City");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PostalCode",
                table: "City",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}

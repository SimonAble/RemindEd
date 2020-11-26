using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RemindEd.API.Migrations
{
    public partial class CourseDescriptionAttribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LastViewedDate",
                table: "CourseUserDetails",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "CourseDescription",
                table: "Courses",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastViewedDate",
                table: "CourseUserDetails");

            migrationBuilder.DropColumn(
                name: "CourseDescription",
                table: "Courses");
        }
    }
}

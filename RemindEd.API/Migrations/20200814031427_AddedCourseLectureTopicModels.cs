using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RemindEd.API.Migrations
{
    public partial class AddedCourseLectureTopicModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    CourseID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserID = table.Column<int>(nullable: false),
                    CourseTitle = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    CreatedByID = table.Column<int>(nullable: false),
                    LastUpdatedDate = table.Column<DateTime>(nullable: false),
                    LastUpdatedByID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.CourseID);
                });

            migrationBuilder.CreateTable(
                name: "Lectures",
                columns: table => new
                {
                    LectureID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CourseID = table.Column<int>(nullable: false),
                    LectureName = table.Column<string>(nullable: true),
                    LectureViewed = table.Column<bool>(nullable: true),
                    LectureCompleted = table.Column<bool>(nullable: true),
                    LectureLocked = table.Column<bool>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    CreatedByID = table.Column<int>(nullable: false),
                    LastUpdatedDate = table.Column<DateTime>(nullable: false),
                    LastUpdatedByID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lectures", x => x.LectureID);
                    table.ForeignKey(
                        name: "FK_Lectures_Courses_CourseID",
                        column: x => x.CourseID,
                        principalTable: "Courses",
                        principalColumn: "CourseID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Topics",
                columns: table => new
                {
                    TopicID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    LectureID = table.Column<int>(nullable: false),
                    TopicTabName = table.Column<string>(nullable: true),
                    TopicTypeCode = table.Column<int>(nullable: false),
                    TopicTitle = table.Column<string>(nullable: true),
                    TopicContents = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Topics", x => x.TopicID);
                    table.ForeignKey(
                        name: "FK_Topics_Lectures_LectureID",
                        column: x => x.LectureID,
                        principalTable: "Lectures",
                        principalColumn: "LectureID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Lectures_CourseID",
                table: "Lectures",
                column: "CourseID");

            migrationBuilder.CreateIndex(
                name: "IX_Topics_LectureID",
                table: "Topics",
                column: "LectureID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Topics");

            migrationBuilder.DropTable(
                name: "Lectures");

            migrationBuilder.DropTable(
                name: "Courses");
        }
    }
}

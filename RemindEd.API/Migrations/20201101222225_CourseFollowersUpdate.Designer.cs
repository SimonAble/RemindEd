﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RemindEd.API.Data;

namespace RemindEd.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20201101222225_CourseFollowersUpdate")]
    partial class CourseFollowersUpdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0");

            modelBuilder.Entity("RemindEd.API.Models.Course", b =>
                {
                    b.Property<int>("CourseID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CourseTitle")
                        .HasColumnType("TEXT");

                    b.Property<int>("CreatedByID")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("LastUpdatedByID")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("LastUpdatedDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserID")
                        .HasColumnType("INTEGER");

                    b.HasKey("CourseID");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("RemindEd.API.Models.CourseFollower", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CourseId")
                        .HasColumnType("INTEGER");

                    b.HasKey("UserId", "CourseId");

                    b.HasIndex("CourseId");

                    b.ToTable("CourseFollower");
                });

            modelBuilder.Entity("RemindEd.API.Models.Lecture", b =>
                {
                    b.Property<int>("LectureID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CourseID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CreatedByID")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("LastUpdatedByID")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("LastUpdatedDate")
                        .HasColumnType("TEXT");

                    b.Property<bool?>("LectureCompleted")
                        .HasColumnType("INTEGER");

                    b.Property<bool?>("LectureLocked")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LectureName")
                        .HasColumnType("TEXT");

                    b.Property<bool?>("LectureViewed")
                        .HasColumnType("INTEGER");

                    b.HasKey("LectureID");

                    b.HasIndex("CourseID");

                    b.ToTable("Lectures");
                });

            modelBuilder.Entity("RemindEd.API.Models.Photo", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsProfileBackground")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsProfilePicture")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PublicId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Url")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.HasIndex("UserId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("RemindEd.API.Models.Question", b =>
                {
                    b.Property<int>("QuestionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Autograde")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("PictureID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("QuestionAnswer")
                        .HasColumnType("INTEGER");

                    b.Property<string>("QuestionText")
                        .HasColumnType("TEXT");

                    b.Property<int>("QuestionType")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.Property<int>("TopicId")
                        .HasColumnType("INTEGER");

                    b.HasKey("QuestionId");

                    b.HasIndex("PictureID");

                    b.HasIndex("TopicId");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("RemindEd.API.Models.QuestionOptions", b =>
                {
                    b.Property<int>("QuestionOptionsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsCorrectAnswer")
                        .HasColumnType("INTEGER");

                    b.Property<string>("OptionText")
                        .HasColumnType("TEXT");

                    b.Property<int>("QuestionId")
                        .HasColumnType("INTEGER");

                    b.HasKey("QuestionOptionsId");

                    b.HasIndex("QuestionId");

                    b.ToTable("QuestionsOptions");
                });

            modelBuilder.Entity("RemindEd.API.Models.Topic", b =>
                {
                    b.Property<int>("TopicID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("LectureID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("TopicContents")
                        .HasColumnType("TEXT");

                    b.Property<string>("TopicTabName")
                        .HasColumnType("TEXT");

                    b.Property<string>("TopicTitle")
                        .HasColumnType("TEXT");

                    b.Property<int>("TopicTypeCode")
                        .HasColumnType("INTEGER");

                    b.HasKey("TopicID");

                    b.HasIndex("LectureID");

                    b.ToTable("Topics");
                });

            modelBuilder.Entity("RemindEd.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CourseraLink")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("TEXT");

                    b.Property<string>("FacebookLink")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Language")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("LastActive")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("LastUpdatedDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("LinkedinLink")
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("ProfessionalDescription")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProfessionalTitle")
                        .HasColumnType("TEXT");

                    b.Property<string>("TwitterLink")
                        .HasColumnType("TEXT");

                    b.Property<string>("UdemyLink")
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.Property<string>("YoutubeLink")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("RemindEd.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ValueName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("RemindEd.API.Models.CourseFollower", b =>
                {
                    b.HasOne("RemindEd.API.Models.Course", "Course")
                        .WithMany("CourseFollowers")
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("RemindEd.API.Models.User", "User")
                        .WithMany("CourseFollowers")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("RemindEd.API.Models.Lecture", b =>
                {
                    b.HasOne("RemindEd.API.Models.Course", null)
                        .WithMany("Lectures")
                        .HasForeignKey("CourseID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("RemindEd.API.Models.Photo", b =>
                {
                    b.HasOne("RemindEd.API.Models.User", "User")
                        .WithMany("Photos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("RemindEd.API.Models.Question", b =>
                {
                    b.HasOne("RemindEd.API.Models.Photo", "Picture")
                        .WithMany()
                        .HasForeignKey("PictureID");

                    b.HasOne("RemindEd.API.Models.Topic", null)
                        .WithMany("Questions")
                        .HasForeignKey("TopicId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("RemindEd.API.Models.QuestionOptions", b =>
                {
                    b.HasOne("RemindEd.API.Models.Question", null)
                        .WithMany("QuestionOptions")
                        .HasForeignKey("QuestionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("RemindEd.API.Models.Topic", b =>
                {
                    b.HasOne("RemindEd.API.Models.Lecture", null)
                        .WithMany("Topics")
                        .HasForeignKey("LectureID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

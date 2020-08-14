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
    [Migration("20200814031427_AddedCourseLectureTopicModels")]
    partial class AddedCourseLectureTopicModels
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

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("Username")
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

            modelBuilder.Entity("RemindEd.API.Models.Lecture", b =>
                {
                    b.HasOne("RemindEd.API.Models.Course", null)
                        .WithMany("Lectures")
                        .HasForeignKey("CourseID")
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

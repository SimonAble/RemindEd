import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../CoreModels/Course.model';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { Router } from '@angular/router';
import { LeftMenuModel, MenuItem } from 'src/app/CoreComponents/LeftMenu/LeftMenuModel';
import { MatDialog } from '@angular/material';
import { ConfirmationModalComponent } from 'src/app/CoreComponents/ConfirmationModal/ConfirmationModal.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public courses: CourseModel[] = [];
  public leftMenuItems: LeftMenuModel = new LeftMenuModel();
  public activeItemIndex: number = 0;
  public dashboardMenu = DashboardMenu;

  constructor(private courseService: CourseService, private router:Router, public dialog: MatDialog, private titleService: Title) { }

  ngOnInit() {
    this.getCoursesForUser();
    this.setLeftMenu();
  }

  deleteCourse(courseId: number, index: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: {title: "Confirm Course Deletion", confirmationText: "Are you sure you would like to delete this course?"}
    });

    dialogRef.afterClosed().subscribe(hasConfirmed => {
      console.log('The dialog was closed');
      if(hasConfirmed) {
        console.log("Deleting Course");
        this.courseService.deleteCourseById(courseId);
        this.courses.splice(index, 1);
      }
      else {
        console.log("Canceled Course Deletion");
      }
    });
  }

  getCoursesForUser() {
    this.courseService.getCoursesByUserId()
      .subscribe( res => {
        this.courses = res;
        console.log(JSON.stringify(this.courses));
      })
  }

  toggleLeftMenu(event) {
    console.log("Toggling left menu: ", event);
    this.leftMenuCollapsed = event;
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['create/course/' + courseId]);
  }

  setLeftMenu() {
    this.leftMenuItems.leftMenuTitle = "Dashboard";
    this.leftMenuItems.menuItems.push(new MenuItem('Overview', true, 'Overview', 'dashboard', true));
    this.leftMenuItems.menuItems.push(new MenuItem('My Teaching', false, 'My Teaching','post_add', true));
    this.leftMenuItems.menuItems.push(new MenuItem('My Learning', false, 'My Learning', 'library_books', true));
    this.leftMenuItems.menuItems.push(new MenuItem('Articles', false, 'Articles', 'library_books', true));
    this.leftMenuItems.menuItems.push(new MenuItem('Student Portal', false, 'Look forward to this feature in a future update!', 'assignment_ind', false));
    this.leftMenuItems.menuItems.push(new MenuItem('Grading Portal', false, 'Look forward to this feature in a future update!', 'grade', false));
  }

  changeLeftMenuTab(index: number) {
    console.log("Toggling left menu tab: ", index);
    for(let i = 0; i < this.leftMenuItems.menuItems.length; i ++) {
      if(index == i) {
        this.leftMenuItems.menuItems[i].itemActive = true;
        this.activeItemIndex = i;
      }
      else {
        this.leftMenuItems.menuItems[i].itemActive = false;
      }
    }
  }

  viewCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId])
  }

}

export enum DashboardMenu {
  Overview,
  MyTeaching,
  MyLearning,
  Articles,
  StudentPortal,
  GradingPortal
}

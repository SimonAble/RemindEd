import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../CreateView/CreateLectureLayout/Course.model';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { Router } from '@angular/router';
import { LeftMenuModel, MenuItem } from 'src/app/CoreComponents/LeftMenu/LeftMenuModel';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public leftmenuItems = [
    "My Courses",
    "Grading",
    "Discussions",
    "Learners",
    "Following"
  ];
  public courses: any = [];
  public leftMenuItems: LeftMenuModel = new LeftMenuModel();

  constructor(private courseService: CourseService, private router:Router) { }

  ngOnInit() {
    this.getCoursesForUser();
    this.setLeftMenu();
  }

  getCoursesForUser() {
    this.courseService.getCoursesByUserId()
      .subscribe( res => {
        this.courses = res;
        console.log(JSON.stringify(this.courses));
      })
  }

  public toggleLeftMenu(event) {
    console.log("Toggling left menu: ", event);
    this.leftMenuCollapsed = event;
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['create/course/' + courseId]);
  }

  navigateToDashboard() {

  }

  setLeftMenu() {
    this.leftMenuItems.leftMenuTitle = "Dashboard";
    this.leftMenuItems.menuItems.push(new MenuItem('Overview', true, 'Overview', 'dashboard', true));
    this.leftMenuItems.menuItems.push(new MenuItem('Created Courses', false, 'Created Courses','post_add', true));
    this.leftMenuItems.menuItems.push(new MenuItem('Followed Courses', false, 'Followed Courses', 'library_books', true));
    this.leftMenuItems.menuItems.push(new MenuItem('Student Portal', false, 'Look forward to this feature in a future update!', 'assignment_ind', false));
    this.leftMenuItems.menuItems.push(new MenuItem('Grading Portal', false, 'Look forward to this feature in a future update!', 'grade', false));
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';
import { Project }           from '../classes/Project';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  projects:Array<Project> = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects():void {
    this.projects = this.dataService.projects;
  }

}

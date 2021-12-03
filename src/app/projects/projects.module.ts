import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { ProjectsRoutingModule } from './projects-routing.module';

// Components
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { TemporalComponent } from './temporal/temporal.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';

@NgModule({
  declarations: [
    MainComponent,
    DetailsComponent,
    TemporalComponent,
    ListProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }

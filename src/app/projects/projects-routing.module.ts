import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'details',  component: DetailsComponent       },
      { path: 'list',     component: ListProjectsComponent  },
      { path: '**',       redirectTo: 'details' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

import { ResultComponent } from './homepage/result/result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { FormComponent } from './homepage/form/form.component';
import { QuestionComponent } from './homepage/question/question.component';


const routes: Routes = [
 { path:'', component: HomeComponent },
 { path:':form', component: FormComponent },
 { path:':form/question', component: QuestionComponent },
  {path:':form/question/result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


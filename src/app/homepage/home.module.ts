import { ScrollDirective } from './result/scroll-directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms"
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from '@angular/material/input'
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ResultComponent } from './result/result.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    ScrollingModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    VirtualScrollerModule,
    RouterModule,
    MatDividerModule,
  ],
  declarations: [ResultComponent, QuestionComponent, HomeComponent, FormComponent, ScrollDirective ],
  providers: [
    ResultComponent,
  ]
})
export class HomeModule { }

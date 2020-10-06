import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('question', {static: true}) questionComponent: QuestionComponent;

  public form: FormGroup;
  qst = 1;

  nome: string;

  constructor() {
    this.form = new FormGroup ({
      name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      age: new FormControl(null),
    });
   }

  ngOnInit(): void {
  }

  next(): void {
    this.nome = this.form.controls.name.value;
    this.qst++;
  }

}

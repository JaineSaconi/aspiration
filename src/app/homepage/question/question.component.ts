
import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {


  question = 1;
  air = 0;
  fire = 0;
  water = 0;
  earth = 0;
  answerNow = 0;
  xQuestionAir = 0;
  xQuestionFire = 0;
  xQuestionEarth = 0;
  xQuestionWater = 0;

  result = 0;

  constructor() { }

  answer(answerCliked: number): void {

    if (this.question === 1 || this.question === 5 || this.question === 9 || this.question === 13 || this.question === 17) {
      this.air += answerCliked;

      if (this.question === 5)
        this.xQuestionAir = answerCliked;
    }

    if (this.question === 2 || this.question === 6 || this.question === 10 || this.question === 14 || this.question === 18) {
      this.fire += answerCliked;

      if (this.question === 10)
        this.xQuestionFire = answerCliked;
    }

    if (this.question === 3 || this.question === 7 || this.question === 11 || this.question === 15 || this.question === 19) {
      this.water += answerCliked;

      if (this.question === 11)
        this.xQuestionWater = answerCliked;
    }

    if (this.question === 4 || this.question === 8 || this.question === 12 || this.question === 16 || this.question === 20) {
      this.earth += answerCliked;

      if (this.question === 8)
        this.xQuestionEarth = answerCliked;
    }

    this.answerNow = answerCliked;
    this.question++;
    console.log('ar', this.air);
    console.log('fogo', this.fire);
    console.log('agua', this.water);
    console.log('terra', this.earth);

    // fire = depressão
    // air = ansiedade
    // earth = cansaço
    // water = stress
    if (this.question > 20) {

      if ((this.air > this.fire) && (this.air > this.water) && (this.air > this.earth))
        this.result = 1; // ansiedade

      else if ((this.fire > this.air) && (this.fire > this.water) && (this.fire > this.earth))
        this.result = 2; // depressão

      else if ((this.water > this.fire) && (this.water > this.air) && (this.water > this.earth))
        this.result = 3; // stress

      else if ((this.earth > this.fire) && (this.earth > this.water) && (this.earth > this.air))
        this.result = 4; // cançaso


      else if ((this.water == this.air) && (this.water > this.fire) && (this.water > this.earth) && (this.air > this.fire) && (this.air > this.earth))
        this.result = 5; // stress == ansiedade

      else if ((this.water == this.earth) && (this.water > this.fire) && (this.water > this.air) && (this.earth > this.fire) && (this.earth > this.air))
        this.result = 6; // stress == cansaço

      else if ((this.fire == this.earth) && (this.fire > this.air) && (this.fire > this.water) && (this.earth > this.air) && (this.earth > this.water))
        this.result = 7; // depressão == cansaço

      else if ((this.fire == this.air) && (this.fire > this.earth) && (this.fire > this.water) && (this.air > this.earth) && (this.air > this.water))
        this.result = 8; // depressão == ansiedade

      else if ((this.fire == this.water) && (this.fire > this.earth) && (this.fire > this.air) && (this.water > this.earth) && (this.water > this.air))
        this.result = 9; // depressão  == stress

      else if ((this.air == this.earth) && (this.air > this.fire) && (this.air > this.water) && (this.earth > this.fire) && (this.earth > this.water))
        this.result = 10; // ansiedade == cansaço


      else if (this.fire == this.air && this.fire == this.water && this.fire > this.earth)
        this.result = 11; // depressão = ansiedade = stress

      else if (this.water == this.air && this.water == this.earth && this.water > this.fire)
        this.result = 12; // stress = ansiedade = cansaço

      else if (this.water == this.fire && this.water == this.earth && this.water > this.air)
        this.result = 13; // stress = depressão = cansaço

      else if (this.fire == this.air && this.fire == this.earth && this.fire > this.water)
        this.result = 14; // depressão = ansiedade = cansaço

      else if (this.fire == this.air && this.fire == this.earth && this.fire == this.water)
        this.result = 15; // stress = ansiedade = cansaço = depressão

      this.question = 21;
    }

  }

  return(): void {
    this.question--;

    if (this.question != 0) {
      if (this.question === 1 || this.question === 5 || this.question === 9 || this.question === 13 || this.question === 17)
        this.air = this.air === 0 ? 0 : this.air - this.answerNow;

      if (this.question === 2 || this.question === 6 || this.question === 10 || this.question === 14 || this.question === 18)
        this.fire = this.fire === 0 ? 0 : this.fire - this.answerNow;

      if (this.question === 3 || this.question === 7 || this.question === 11 || this.question === 15 || this.question === 19)
        this.water = this.water === 0 ? 0 : this.water - this.answerNow;

      if (this.question === 4 || this.question === 8 || this.question === 12 || this.question === 16 || this.question === 20)
        this.earth = this.earth === 0 ? 0 : this.earth - this.answerNow;
    } else {
      this.question = 1;
    }

    console.log('question: ', this.question);
    console.log('ar', this.air);
    console.log('fogo', this.fire);
    console.log('agua', this.water);
    console.log('terra', this.earth);
  }
}

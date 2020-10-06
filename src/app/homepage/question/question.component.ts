
import { ngModuleJitUrl } from '@angular/compiler';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() nome: string;

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
  percent = 0;

  result = 0;

  constructor() { }

  answer(answerCliked: number): void {
    if (this.question < 6) {
      if (this.question === 1) {
        this.xQuestionAir = answerCliked === 3 ? 4 : answerCliked;
        this.air += answerCliked === 3 ? 4 : answerCliked;
      }
      else
        this.air += answerCliked;
    }

    if (this.question > 5 && this.question < 11) {
      if (this.question === 8) {
        this.xQuestionFire = answerCliked === 3 ? 4 : answerCliked;
        this.fire += answerCliked === 3 ? 4 : answerCliked;
      } else
        this.fire += answerCliked;
    }

    if (this.question > 10 && this.question < 16) {
      if (this.question === 13) {
        this.xQuestionWater = answerCliked === 3 ? 4 : answerCliked;
        this.water += answerCliked === 3 ? 4 : answerCliked;
      } else
        this.water += answerCliked;
    }

    if (this.question > 15 && this.question < 21) {
      if (this.question === 17) {
        this.xQuestionEarth = answerCliked === 3 ? 4 : answerCliked;
        this.earth += answerCliked === 3 ? 4 : answerCliked;
      } else
        this.earth += answerCliked;
    }

    this.answerNow = answerCliked;
    this.question++;

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
    }

    this.progressBar();

  }

  return(): void {
    this.question--;

    if (this.question != 0) {
      if (this.question < 6) {
        if (this.question === 1 && this.answerNow === 3)
          this.air = this.air - 4;
        else
          this.air = this.air === 0 ? 0 : this.air - this.answerNow;
      }

      if (this.question > 5 && this.question < 11) {
        if (this.question === 8 && this.answerNow === 3)
          this.fire = this.fire - 4;
        else
          this.fire = this.fire === 0 ? 0 : this.fire - this.answerNow;
      }

      if (this.question > 10 && this.question < 16) {

        if (this.question === 13 && this.answerNow === 3)
          this.water = this.water - 4;
        else
          this.water = this.water === 0 ? 0 : this.water - this.answerNow;
      }

      if (this.question > 15 && this.question < 21) {
        if (this.question === 17 && this.answerNow === 3)
          this.earth = this.earth - 4;
        else
          this.earth = this.earth === 0 ? 0 : this.earth - this.answerNow;
      }

    } else {
      this.question = 1;
    }

    this.progressBar();

  }

  progressBar(): void {
    switch (this.question) {
      case 1:
        document.getElementById("progressBar").style.width = "2.18em";
        this.percent = 5;
        break;

      case 2:
        document.getElementById("progressBar").style.width = "4.205em";
        this.percent = 10;
        break;

      case 3:
        document.getElementById("progressBar").style.width = "6.385em";
        this.percent = 15;        
        break;

      case 4:
        document.getElementById("progressBar").style.width = "8.565em";
        this.percent = 20;
        break;

      case 5:
        document.getElementById("progressBar").style.width = "10.748em";
        this.percent = 25;
        break;

      case 6:
        document.getElementById("progressBar").style.width = "12.925em";
        this.percent = 30;
        break;

      case 7:
        document.getElementById("progressBar").style.width = "15.105em";
        this.percent = 35;
        break;

      case 8:
        document.getElementById("progressBar").style.width = "17.285em";
        this.percent = 40;
        break;

      case 9:
        document.getElementById("progressBar").style.width = "19.465em";
        this.percent = 45;
        break;

      case 10:
        document.getElementById("progressBar").style.width = "21.645em";
        this.percent = 50;
        break;

      case 11:
        document.getElementById("progressBar").style.width = "23.825em";
        this.percent = 55;
        break;

      case 12:
        document.getElementById("progressBar").style.width = "24em";
        this.percent = 60;
        break;

      case 13:
        document.getElementById("progressBar").style.width = "26.185em";
        this.percent = 65;
        break;

      case 14:
        document.getElementById("progressBar").style.width = "28.365em";
        this.percent = 70;
        break;

      case 15:
        document.getElementById("progressBar").style.width = "30.545em";
        this.percent = 75;
        break;

      case 16:
        document.getElementById("progressBar").style.width = "32.725em";
        this.percent = 80;
        break;
       
      case 17:
        document.getElementById("progressBar").style.width = "37.085em";
        this.percent = 85;
        break;

      case 18:
        document.getElementById("progressBar").style.width = "39.525em";
        this.percent = 90;
        break;

      case 19:
        document.getElementById("progressBar").style.width = "41.445em";
        this.percent = 95;
        break;

      case 20:
        document.getElementById("progressBar").style.width = "43.625em";
        this.percent = 100;
        break;
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() result: number;
  @Input() xQuestionWater: number;
  @Input() xQuestionEarth: number;
  @Input() xQuestionFire: number;
  @Input() xQuestionAir: number;

  resultFinal = '';
  text: string;

  constructor() { }

  ngOnInit(): void {

    if (this.result == 1)
      this.resultFinal = 'de ansiedade';

    if (this.result == 2)
      this.resultFinal = 'de depressão';

    if (this.result == 3)
      this.resultFinal = 'de stress';

    if (this.result == 4)
      this.resultFinal = 'de cansaço';

    if (this.result == 5) {
      if (this.xQuestionWater > this.xQuestionAir) {
        this.resultFinal = 'de água';
      } else {
        this.resultFinal = 'de ansiedade';
      }
    }

    if (this.result == 6) {
      if (this.xQuestionWater > this.xQuestionEarth) {
        this.resultFinal = 'de stress';
      } else {
        this.resultFinal = 'de cansaço';
      }
    }

    if (this.result == 7) {
      if (this.xQuestionFire > this.xQuestionEarth) {
        this.resultFinal = 'de depressão';
      } else {
        this.resultFinal = 'de cansaço';
      }
    }

    if (this.result == 8) {
      if (this.xQuestionFire > this.xQuestionEarth) {
        this.resultFinal = 'de depressão';
      } else {
        this.resultFinal = 'de cansaço';
      }
    }

    if (this.result == 9) {
      if (this.xQuestionFire > this.xQuestionWater) {
        this.resultFinal = 'de depressão';
      } else {
        this.resultFinal = 'de stress';
      }
    }

    if (this.result == 10) {
      if (this.xQuestionAir > this.xQuestionEarth) {
        this.resultFinal = 'de ansiedade';
      } else {
        this.resultFinal = 'de cansaço';
      }
    }

    if (this.result == 11) {
      if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionWater)
        this.resultFinal = 'de depressão';
      else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = 'de stress';
      else
        this.resultFinal = 'de cansaço';
    }

    if (this.result == 12) {
      if (this.xQuestionWater >= this.xQuestionAir && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = 'de stress'
      else if (this.xQuestionAir > this.xQuestionWater && this.xQuestionAir >= this.xQuestionEarth)
        this.resultFinal = 'de ansiedade';
      else
        this.resultFinal = 'de cansaço';
    }

    if (this.result == 13) {
      if (this.xQuestionFire >= this.xQuestionWater && this.xQuestionFire >= this.xQuestionEarth)
        this.resultFinal = "de depressão";
      else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = "de stress";
      else
        this.resultFinal = "cansaço";
    }

    if (this.result == 14) {
      if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionEarth)
        this.resultFinal = "de drepresão";
      else if (this.xQuestionAir > this.xQuestionFire && this.xQuestionAir >= this.xQuestionEarth)
        this.resultFinal = "de ansiedade";
      else
        this.resultFinal = "de cansaço";
    }

    if (this.result == 15) {
      if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionWater && this.xQuestionFire >= this.xQuestionEarth)
        this.resultFinal = "de depressão";
      else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionAir && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = "de stress";
      else if (this.xQuestionAir > this.xQuestionFire && this.xQuestionAir > this.xQuestionWater && this.xQuestionAir >= this.xQuestionEarth)
        this.resultFinal = "de ansiedade";
      else
        this.resultFinal = "de cansaço";
    }

  }

}

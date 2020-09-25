import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

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
  fogo = 'de fogo';
  ar = 'de ar';
  terra = 'de terra';
  agua = 'de água';
  ponto: boolean;

  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  this.ponto = false;

    if (this.result == 1)
      this.resultFinal = this.ar;

    if (this.result == 2)
      this.resultFinal = this.ar;

    if (this.result == 3)
      this.resultFinal = this.agua;

    if (this.result == 4)
      this.resultFinal = this.terra;

    if (this.result == 5) {
      if (this.xQuestionWater > this.xQuestionAir) {
        this.resultFinal = this.agua;
      } else {
        this.resultFinal = this.ar;
      }
    }

    if (this.result == 6) {
      if (this.xQuestionWater > this.xQuestionEarth) {
        this.resultFinal = this.agua;
      } else {
        this.resultFinal = this.terra;
      }
    }

    if (this.result == 7) {
      if (this.xQuestionFire > this.xQuestionEarth) {
        this.resultFinal = this.ar;
      } else {
        this.resultFinal = this.terra;
      }
    }

    if (this.result == 8) {
      if (this.xQuestionFire > this.xQuestionEarth) {
        this.resultFinal = this.ar;
      } else {
        this.resultFinal = this.terra;
      }
    }

    if (this.result == 9) {
      if (this.xQuestionFire > this.xQuestionWater) {
        this.resultFinal = this.ar;
      } else {
        this.resultFinal = this.agua;
      }
    }

    if (this.result == 10) {
      if (this.xQuestionAir > this.xQuestionEarth) {
        this.resultFinal = this.ar;
      } else {
        this.resultFinal = this.terra;
      }
    }

    if (this.result == 11) {
      if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionWater)
        this.resultFinal = this.fogo;
      else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = this.agua;
      else
        this.resultFinal = this.terra;
    }

    if (this.result == 12) {
      if (this.xQuestionWater >= this.xQuestionAir && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = this.agua;
      else if (this.xQuestionAir > this.xQuestionWater && this.xQuestionAir >= this.xQuestionEarth)
        this.resultFinal = this.ar;
      else
        this.resultFinal = this.terra;
    }

    if (this.result == 13) {
      if (this.xQuestionFire >= this.xQuestionWater && this.xQuestionFire >= this.xQuestionEarth)
        this.resultFinal = this.fogo;
      else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = this.agua;
      else
        this.resultFinal = this.terra;
    }

    if (this.result == 14) {
      if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionEarth)
        this.resultFinal = this.fogo;
      else if (this.xQuestionAir > this.xQuestionFire && this.xQuestionAir >= this.xQuestionEarth)
        this.resultFinal = this.ar;
      else
        this.resultFinal = this.terra;
    }

    if (this.result == 15) {
      if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionWater && this.xQuestionFire >= this.xQuestionEarth)
        this.resultFinal = this.fogo;
      else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionAir && this.xQuestionWater >= this.xQuestionEarth)
        this.resultFinal = this.agua;
      else if (this.xQuestionAir > this.xQuestionFire && this.xQuestionAir > this.xQuestionWater && this.xQuestionAir >= this.xQuestionEarth)
        this.resultFinal = this.ar;
      else
        this.resultFinal = this.terra;
    }

  }

  expand(): void {
    this.ponto === false ? true : false ;
    this.cdRef.detectChanges();
    this.cdRef.markForCheck();
  }

}

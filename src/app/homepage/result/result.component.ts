import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';

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
  @Input() nome:string 

  resultFinal = '';
  text: string;
  fogo = 'de fogo';
  ar = 'de ar';
  terra = 'de terra';
  agua = 'de água';
  ponto: boolean;

  textTerra = '';
  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.textTerra = `Integrar cabeça, coração e colocar as mãos na massa. É sair do mundo das idéias e partir para a prática, fazer-se acontecer.    Comprometimento. Deixar o sentimento e motivação emergir e corporificar esta vontade.
    No elemento TERRA, o cromoterápico Lilás é importante e deverá estar presente em seu ambiente ou em pequenos objetos ou 
    acessórios e roupas que possa usar e ser estimulado ou impactado pela cor. Os óleos essenciais no elemento terra, transbordam
    luminosidade com notas cítricas e frutadas do LIMÃO SICILIANO. O corpo amadeirado exala personalidade e sofisticação com o óleo 
    essencial de CANELA. As notas de fundo criam nuances calorosas e adocicadas que equilibram e transmitem calma com óleo essencial
    de HORTELÃ PIPERITA. O elemento TERRA busca harmonizar pensamentos e sentimentos, auxiliando na falta de foco e nos padrões emocionais
    causadores de conflitos. Atuam nas sensações de variações de humor e cansaço, baixa estima e melhoram a motivação. 
    Sensação de bem-estar, de qualidades positivas, ser consistente, perseverante, pontual, cauteloso, responsável, firme, 
    confiável, sóbrio, respeitoso e realista.
    Principais componentes dos óleos essenciais: mentol, aldeído cinâmico, acetato de mentila, d-limoneno, beta-pineno, mentona e outros.
    Os chás conseguem traduzir bem a beleza pela simplicidade. Num gesto modesto incorporamos a natureza em água quente e daí poderemos desfrutar 
    esta magia pelas cores em tons delicados, pelo cheiro simples e o sabor peculiar de cada erva. Permitir acessar nossa memória e ter as boas lembranças.
    Cada planta escolhida tem seu propósito. Na TERRA escolhemos para você o Guaraná, a Canela-da-China e o Hortelã-pimenta. }`

    if (this.result == 1)
      this.resultFinal = this.ar;

    if (this.result == 2)
      this.resultFinal = this.fogo;

    if (this.result == 3)
      this.resultFinal = this.agua;

    if (this.result == 4)
      this.resultFinal = this.terra;

    if (this.result == 5) {
      if (this.xQuestionWater >= this.xQuestionAir) {
        this.resultFinal = this.agua;
      } else {
        this.resultFinal = this.ar;
      }
    }

    if (this.result == 6) {
      if (this.xQuestionWater >= this.xQuestionEarth) {
        this.resultFinal = this.agua;
      } else {
        this.resultFinal = this.terra;
      }
    }

    if (this.result == 7) {
      if (this.xQuestionFire >= this.xQuestionEarth) {
        this.resultFinal = this.fogo;
      } else {
        this.resultFinal = this.terra;
      }
    }

    if (this.result == 8) {
      if (this.xQuestionFire >= this.xQuestionAir) {
        this.resultFinal = this.fogo;
      } else {
        this.resultFinal = this.ar;
      }
    }

    if (this.result == 9) {
      if (this.xQuestionFire >= this.xQuestionWater) {
        this.resultFinal = this.fogo;
      } else {
        this.resultFinal = this.agua;
      }
    }

    if (this.result == 10) {
      if (this.xQuestionAir >= this.xQuestionEarth) {
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
    var  texto = $('#campoTexto');

    var div = $('#sizeDiv');

    if( div.hasClass('text-size-hidden')){
        div.removeClass('text-size-hidden');
        div.addClass('text-size-expand');
    } else {
      div.removeClass('text-size-expand');
      div.addClass('text-size-hidden');
    }

    if( texto.hasClass('hidden-text')) {
      texto.removeClass('hidden-text');
      texto.addClass('show-text');
    } else {
      texto.removeClass('show-text');
      texto.addClass('hidden-text');
    }    
  }

}

import { Directive, HostListener, Input , ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[track-scroll]',
  exportAs : 'trackScroll'
})
export class ScrollDirective {

    constructor(public el: ElementRef, private renderer: Renderer2) { 

    }

   @Input("track-scroll")
   private name;

    @HostListener('click', ['$event'])
    checkScroll() {
       this.scroll();
    }

   scroll(){
       console.log("scoll started");
       let anchor = this.el.nativeElement.top = 500;
       
       //style.top =100;

      // this.el.nativeElement.style.top = 100;
       window.scrollTo({top: anchor, left: 0, behavior: 'smooth'});
   }

}
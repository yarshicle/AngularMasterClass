import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  // tslint:disable-next-line:no-input-rename
  @Input('appInputFormat') format;

  // @HostListener('focus') onFocus() {
  //   console.log('On focus');
  // }
  @HostListener('blur') onBlur() {
    // console.log('On blur');
    const value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}

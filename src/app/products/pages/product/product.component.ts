import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Siempre que queramos llamar a un Hook/método debemos implementarlo, sino no hacemos no lo detecta y no lo llama

  constructor() {}

  // ? ngOnInit - Primera carga

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // ? ngOnChanges - para determinar los cambios y reaccionar

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  // ? ngDoCheck

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // ? ngAfterContentInit

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // ? ngAfterContentChecked

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // ? ngAfterViewInit

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // ? ngAfterViewChecked

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // ? ngOnInit

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}

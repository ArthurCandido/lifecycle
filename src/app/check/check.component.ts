import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  public name: string="Check";
  public age: number = 0;

  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");

  }

  ngDoCheck(): void {
    console.log("ngDoCheck");

  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");

  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");

  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");

  }


}

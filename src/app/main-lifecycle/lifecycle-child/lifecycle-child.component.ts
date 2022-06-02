import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent{
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input()  name!: string;
  @Input()  food!: string;
  @Input()  age!: number;

  public events: LifeCycleEvent[] = [];
  nextEventId: number = 0;

  colors: string []= ["accent", "warn", "primary"];

  constructor() {
    console.log(this.name + " - constructor");
    this.newEvent("constructor");

   }


  ngOnDestroy() {
    console.log(this.name + " - ngOnDestroy");
    this.newEvent("ngOnDestroy");

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.name + " - ngOnChanges");
    this.newEvent("ngOnChanges");

   
  }

  ngOnInit(): void {
    console.log(this.name + " - ngOnInit");
    this.newEvent("ngOnInit");

  }

  ngAfterContentInit(): void {
    console.log(this.name + " - ngAfterContentInit");
    this.newEvent("ngAfterContentInit");

    
  }

  ngAfterViewInit(): void {
    console.log(this.name + " - ngAfterViewInit");
    this.newEvent("ngAfterViewInit");

  }

  newEvent(name: string){
   let id = this.nextEventId ++; 
   this.events.push(
     {id: id,
     color: this.colors[id % this.colors.length] ,
      name:name})
      setTimeout(() =>{
        let idx = this.events.findIndex((e) => e.id == id);
        if(idx >= 0)
        this.events.splice(idx, 1);
      }, 3000 + this.events.length*2000);
  }

}

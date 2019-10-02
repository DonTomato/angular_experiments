import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'ae-nested-hook',
  templateUrl: './nested-hook.component.html'
})
export class NestedHookComponent implements OnInit, OnChanges {

  @Input()
  name: string;

  ngOnChanges(): void {
    console.log('On Change');
  }
  
  ngOnInit(): void {
    console.log('On Init');
  }
} 
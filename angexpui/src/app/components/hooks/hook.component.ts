import { Component } from '@angular/core';

@Component({
  selector: 'ae-hook',
  templateUrl: 'hook.component.html'
})
export class HookComponent {
  
  name: string;
  
  changeName(): void {
    if (!this.name) {
      this.name = "Init";
    } else {
      this.name = this.name + ' !';
      console.log(this.name);
    }
  }
}
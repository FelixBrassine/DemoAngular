import {Component} from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent{
  seconds: number =0;
  private _timer!: number;
  private _running: boolean = false;
  play(): void {
    if (!this._running) {
      this._running = true;
      this._timer = window.setInterval(()=> {
        if (this._running){
          this.seconds++;
        };
      },1000)
    }
  }
  stop(){
    this._running = false;
    clearInterval(this._timer);
  }
  reset(){
    this._running = false;
    this.seconds =0;
    clearInterval(this._timer);
  }
}

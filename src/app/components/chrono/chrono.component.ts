import {Component} from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent{


  private _minutes: number =0;
  private _hours : number =0;
  private _timer: number =0;
  private _seconds: number =0;
  private _running: boolean = false;
  timerView!:string ;

  play(): void {
    if (!this._running) {
      this._running = true;
      this._timer = window.setInterval(()=> {
        if (this._running){
          this._seconds++;
          this.convert();
        };
      },1000)
    }
  }
  format(value: number): string {
    return value.toString().padStart(2, '0');
  }
  convert() : void {
    if (this._seconds > 59) {
      this._minutes++;
      this._seconds = 0;
    }
    if (this._minutes > 59) {
      this._hours++;
      this._minutes = 0;
    }
    if (this._hours > 59)
      this._hours =0;
    this.timerView = this.format(this._hours) + " : " + this.format(this._minutes) + " : " + this.format(this._seconds);
  }
  stop(){
    this._running = false;
    clearInterval(this._timer);
  }
  reset(){
    this._running = false;
    clearInterval(this._timer);
    this.timerView = this.format(0) + " : " + this.format(0) + " : " + this.format(0);
    this._hours =0;
    this._minutes =0;
    this._seconds = 0;
  }
}

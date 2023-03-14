import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer_format'
})
export class TimerFormaterPipe implements PipeTransform {
  transform(value: number): string {
    if (value == 0){
      return ""
    }else{
      let seconds = value % 60;
      let minutes = Math.floor((value /60) % 60);
      let hours = Math.floor(value / 3600);
      return this.format(hours) + " : " + this.format(minutes) + " : " + this.format(seconds);
    }
  }
  format(value: number): string {
    return value.toString().padStart(2, '0');
  }
}

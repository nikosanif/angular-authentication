import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  transform(date: Date = new Date()): string {
    const hour = date.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'odia' })
export class OdiaNumberPipe implements PipeTransform {
  numbersObject: { [x: string]: string } = {
    '1': '୧',
    '2': '୨',
    '3': '୩',
    '4': '୪',
    '5': '୫',
    '6': '୬',
    '7': '୭',
    '8': '୮',
    '9': '୯',
    '0': '୦',
    P: 'ପି',
    M: 'ଏମ୍',
    A: 'ଏ',
  };

  transform(n: number | string | null): string {
    if (n == null) return '';
    if (document.documentElement.lang == 'en-US') return n?.toString();
    if (n === null || n === undefined) return '';
    n = n + ''; // to make it a string if it was a number
    let newString = '';
    for (let i = 0; i < n.length; i++) {
      if (this.numbersObject[n.charAt(i)])
        newString += this.numbersObject[n.charAt(i)];
      else newString += n.charAt(i);
    }
    return newString;
  }
}

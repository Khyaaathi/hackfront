import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusOdia' })
export class StatusPipe implements PipeTransform {
  numbersObject: { [x: string]: string } = {
    Open: 'ଖୋଲା',
    Found: 'ମିଳିଲା',
    Returned: 'ଫେରସ୍ତ',
    Attended: 'ଧ୍ୟାନ ଦିଆଯାଇଥିବା',
  };

  transform(n: number | string | null): string {
    if (n == null) return '';
    if (document.documentElement.lang == 'en-US') return n?.toString();
    if (n === null || n === undefined) return '';
    let newString = '';
    switch (n.toString()) {
      case 'Open':
        newString = this.numbersObject['Open'];
        break;
      case 'Found':
        newString = this.numbersObject['Found'];
        break;
      case 'Returned':
        newString = this.numbersObject['Returned'];
        break;
      case 'Attended':
        newString = this.numbersObject['Attended'];
        break;
    }
    return newString;
  }
}

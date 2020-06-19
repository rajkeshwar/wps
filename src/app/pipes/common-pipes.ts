import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'objectKeys'
})
class ObjectKeysPipe implements PipeTransform {
  transform(object: any = {}): any {
    return Object.keys(object);
  }
}


@Pipe({
  name: 'titleCase'
})
class TitleCasePipe implements PipeTransform {
  transform(camelCase: string = ''): string {
    return camelCase.replace(/^\w|[A-Z]/g, t => ` ${t.toUpperCase()}`);
  }
}

@Pipe({
  name: 'localeDate'
})
class DateFormatPipe implements PipeTransform {
  transform(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}

@NgModule({
  declarations: [
    ObjectKeysPipe,
    TitleCasePipe,
    DateFormatPipe
  ],
  exports: [
    ObjectKeysPipe,
    TitleCasePipe,
    DateFormatPipe
  ]
})
export class CommonPipeModule { }
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



@NgModule({
  declarations: [
    ObjectKeysPipe,
    TitleCasePipe
  ],
  exports: [
    ObjectKeysPipe,
    TitleCasePipe
  ]
})
export class CommonPipeModule { }
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
    let tranformed = camelCase.replace(/[A-Z]/g, t => ` ${t}`);
    tranformed = tranformed.charAt(0).toUpperCase() + tranformed.slice(1);
    return tranformed;
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
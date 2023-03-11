import { NgModule } from '@angular/core';

// tslint:disable-next-line: typedef
export function DynamicNgModule(annotation: object) {
  // tslint:disable-next-line: ban-types
  return (target: Function) => {
    const ngModule = new NgModule(annotation);
    NgModule(ngModule)(target);
  };
}

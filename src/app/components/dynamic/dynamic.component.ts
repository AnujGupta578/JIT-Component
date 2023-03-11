import { Component } from '@angular/core';

// tslint:disable-next-line: typedef
export function DynamicComponent(annotation: object) {
  // tslint:disable-next-line: ban-types
  return (target: Function) => {
    const component = new Component(annotation);
    Component(component)(target);
  };
}

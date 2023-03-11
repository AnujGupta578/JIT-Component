import { Compiler, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafeHtml } from '@angular/platform-browser';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { DynamicNgModule } from '../dynamic/dynamic.module';

interface DialogData {
  type?: string;
  email?: string;
  source?: string;
}


@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogComponent implements OnInit {

  @ViewChild('modalContent', { read: ViewContainerRef }) entry!: ViewContainerRef;
  email: string;
  constructor(
    public dialogRef: MatDialogRef<AppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private compiler: Compiler
  ) {
    this.email = 'hello@gmail.com';
  }

  ngOnInit(): void {
    console.log(this.data, 'data');

    this.renderModalContent(this.getModalTemplate());
  }

  public renderModalContent(template: string): void {
    @DynamicComponent({
      selector: 'modal-sub-content',
      template,
    })
    class ModalContentComponent { }

    @DynamicNgModule({
      declarations: [ModalContentComponent]
    })
    class ModalContentModule { }

    this.compiler.compileModuleAndAllComponentsAsync(ModalContentModule)
      .then((factories) => {
        const factory = factories.componentFactories.find((comp) =>
          comp.componentType === ModalContentComponent
        );
        // tslint:disable-next-line: no-non-null-assertion
        const cmpRef = this.entry.createComponent(factory!);

        if (cmpRef.instance && cmpRef.instance.email) {
          cmpRef.instance.email = this.email;
        }
      });

  }

  getModalTemplate(): string {

    return '<p>Hello Dynamic word {{email}}</p>';
  }

}

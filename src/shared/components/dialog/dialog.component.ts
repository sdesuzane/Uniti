import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() message = '';
  @Input() confirm = '';
  @Input() cancel = '';
  @Output() onconfirm = new EventEmitter<void>();
  @Output() oncancel = new EventEmitter<void>();

  public onConfirm() {
    this.onconfirm.emit();
  }

  public onCancel() {
    this.oncancel.emit();
  }

}

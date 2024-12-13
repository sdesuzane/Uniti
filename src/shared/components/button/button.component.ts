import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title = ''
  @Input() buttonStyle: 'full-primary-500' | 'full-primary-100' = 'full-primary-500'
  @Input() simpleButtonGray = false;
  @Output() clickButton = new EventEmitter
  @Input() disabled = false;
  @Input() image = ''
  @Input() alt = ''
  @Input() height?: string;

  public emitFunction() {
      this.clickButton.emit();
  }
}

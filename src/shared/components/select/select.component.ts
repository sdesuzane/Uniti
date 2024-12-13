import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label = 'Selecione';
  @Input() data: Array<{ value: string; label: string }> = [];
  @Input() multiple = false;
  @Input() placeholder = 'Selecione uma opção';
  @Input() showError = false;
  public isFocused = false;

  public value: string | string[] = this.multiple ? [] : '';

  private onChange: (value: string | string[]) => void = () => {};
  private onTouched: () => void = () => {};

  public writeValue(value: string | string[]): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onSelectionChange(event: MatSelectChange): void {
    this.value = event.value;
    this.onChange(this.value);
  }

  public onFocus(): void {
    this.isFocused = true;
  }

  public onBlur(): void {
    this.isFocused = false;
    this.onTouched();
  }
}

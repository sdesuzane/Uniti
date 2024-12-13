import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() label = 'Label';
  @Input() type: 'email' | 'password' | 'text' | 'number' = 'text';
  @Input() showError = false;
  @Input() placeholder = ''
  @Input() hasMask = false;
  @Input() maskPattern = '';

  public value: string | number = '';
  public isFocused = false;
  private onChange: (value: string | number) => void = () => {};
  private onTouched: () => void = () => {};

  public writeValue(value: string | number): void {
    this.value = value || '';
  }

  public registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = this.type === 'number' ? +target.value : target.value;
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

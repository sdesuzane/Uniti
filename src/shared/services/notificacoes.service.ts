import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastService } from 'angular-toastify';


@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {

  constructor(
    private _snackBar: MatSnackBar,
    private toastService: ToastService
  ) {}

  public openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: 'snackbar',
    });
  }

  public showError(message: string) {
    this.toastService.error(message);
  }

  public showSuccess(message: string) {
    this.toastService.success(message);
  }
}

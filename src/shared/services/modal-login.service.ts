import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../components/modal-login/modal-login.component';
import { NovaSenhaComponent } from '../components/nova-senha/nova-senha.component';
import { Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalLoginService {
  constructor(private dialog: MatDialog) {}

  private openModal(component: Type<any>): void {
    const dialogRef = this.dialog.open(component, {
      panelClass: 'custom-dialog-container',
      disableClose: false,
    });

    dialogRef.componentInstance.init(false);
  }

  public openLoginModal(): void {
    this.openModal(ModalLoginComponent);
  }

  public openNewPasswordModal(): void {
    this.openModal(NovaSenhaComponent);
  }

  public closeModal(): void {
    this.dialog.closeAll();
  }
}

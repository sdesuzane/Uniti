import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ModalLoginService } from './modal-login.service';
import { NotificacoesService } from './notificacoes.service';

export interface LoginResponse {
  success: boolean;
  data: string;
}

export interface UserResponse {
  success: boolean;
  data: UserData;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  isFirstPassword: boolean;
  createdAt: string;
  updatedAt: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class LoginCadastroService {
  private apiPath = environment.urlBase;

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacoesService: NotificacoesService,
    private modalLoginService: ModalLoginService
  ) {}


  public clearAuthData(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  }


  public login(payload: { email: string; password: string }): Observable<HttpResponse<LoginResponse>> {
    return this.http
      .post<LoginResponse>(`${this.apiPath}login`, payload, {
        observe: 'response',
      })
      .pipe(
        tap((response: HttpResponse<LoginResponse>) => {
          const token = response.body?.data || '';
          if (token) {
            this.saveAuthToken(token);
            this.fetchUserDetails();
          } else {
            throw new Error('Token não encontrado na resposta.');
          }
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }


  private saveAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }


  private fetchUserDetails(): void {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.clearAuthData();
      return;
    }

    this.http
      .get<UserResponse>(`${this.apiPath}me`)
      .subscribe({
        next: (response: UserResponse) => {
          const userId = response.data.id;
          const userRole = response.data.roles[0];
          const isFirstPassword = response.data.isFirstPassword;
          localStorage.setItem('userRole', userRole);
          localStorage.setItem('userId', userId.toString());

          if (isFirstPassword) {
            this.modalLoginService.closeModal();
            this.modalLoginService.openNewPasswordModal();
          } else {
            this.modalLoginService.closeModal();
            this.redirectUser(userRole);
          }
        },
        error: () => {
          this.clearAuthData();
          this.notificacoesService.showError('Erro ao obter detalhes do usuário.');
        },
      });
  }


  private redirectUser(userRole: string): void {
    switch (userRole) {
      case 'ADMIN':
        this.router.navigate(['/tela-principal']);
        break;
      case 'TEACHER':
        this.router.navigate(['/tela-pdi']);
        break;
      case 'GUARDIAN':
        this.router.navigate(['/tela-responsavel']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  public changePassword(newPassword: string): Observable<void> {

    return this.http.post<void>(`${this.apiPath}change-password`, { newPassword }).pipe(
      tap(() => {
        this.notificacoesService.showSuccess('Senha alterada com sucesso!');
      }),
      catchError((error) => {
        const errorMessage = error.error?.message || 'Erro ao alterar a senha. Tente novamente.';
        this.notificacoesService.showError(errorMessage);
        return throwError(() => error);
      })
    );
  }

  public logout(): void {
    this.clearAuthData();
    this.router.navigate(['/login']);
  }


  public getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
}

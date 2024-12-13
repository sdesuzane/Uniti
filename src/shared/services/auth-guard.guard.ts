import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginCadastroService);
  const router = inject(Router);

  const requiredRoles = route.data['roles'];

  const userRole = authService.getUserRole();

  if (!userRole) {
    router.navigate(['/tela-inicial']);
    return false;
  }

  if (requiredRoles && !requiredRoles.includes(userRole)) {
    router.navigate(['/acesso-negado']);
    return false;
  }

  return true;
};

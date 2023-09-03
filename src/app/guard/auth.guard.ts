import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      // User is authenticated, allow access
      if (state.url === '/login') {
        const userRole = this.authService.getUserRole(); // Adjust this method based on your AuthService implementation
        console.log(userRole)
        if (userRole === 'Employee') {
          this.router.navigate(['/employee/home']);
        } else if (userRole === 'Manager') {
          this.router.navigate(['/manager/home']);
        } else {
          // Handle other roles or cases if needed
        }
      return true;
    } else {
      
      // User is not authenticated, redirect to login page
      return true; // Allow access to /login for unauthenticated users
    }
  }
  
  }

}
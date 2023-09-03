import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.scss']
})
export class EmployeeNavbarComponent {

  isMenuOpen = false;
  nom: any;
  prenom: any;

  constructor(private router: Router,private elementRef: ElementRef, private renderer: Renderer2,private authService: AuthService,private routes:Router) {}

  toggleMenu() {
    const subMenu = this.elementRef.nativeElement.querySelector('#subMenu');

    if (this.isMenuOpen) {
      this.renderer.removeClass(subMenu, 'open-menu');
    } else {
      this.renderer.addClass(subMenu, 'open-menu');
    }

    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
       this.nom = user.lastname;
       this.prenom = user.firstname;
       
      // Do something with the id_user value
      
    }
    
  }

  logout() {
    localStorage.clear();
    this.routes.navigate(['/login']);
    this.authService.logout().subscribe(
      () => {console.log("ggg")
        // Logout successful
      },
      (error) => {
        // Handle error
      }
    );
  }

  goToProfile(): void {
    this.routes.navigate(['/employee/profile']);
  }

}


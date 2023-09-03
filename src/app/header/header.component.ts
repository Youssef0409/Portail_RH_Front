import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  nom: any;
  prenom: any;

  constructor(private router: Router,private elementRef: ElementRef, private renderer: Renderer2,private authService: AuthService,private routes:Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
       this.nom = user.lastname;
       this.prenom = user.firstname;
       
      // Do something with the id_user value
      
    }
    
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
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


  goToProfile() {
    
    this.routes.navigate(['/manager/profile']);
    
  }
}

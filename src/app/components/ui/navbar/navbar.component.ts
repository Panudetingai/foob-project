import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{


  navbarmenu: boolean = false;
  toggleDropdown(): void{
    this.navbarmenu = !this.navbarmenu;
  }
  ngOnInit(): void {

  }
}

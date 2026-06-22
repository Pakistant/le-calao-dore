import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
//  isMenuOpen = false;
 // activeLink = 'Accueil';
 // links = ['Accueil', 'Menu', 'Témoignages', 'Horaires', 'Contact'];

  links = [
  { label: 'Accueil',      href: '#accueil' },
  { label: 'Menu',         href: '#menu' },
  { label: 'Témoignages',  href: '#temoignages' },
  { label: 'Horaires',     href: '#horaires' },
  { label: 'Contact',      href: '#contact' },
];

  activeLink = 'Accueil';
isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

setActive(label: string) {
  this.activeLink = label;
  this.isMenuOpen = false;
}
}

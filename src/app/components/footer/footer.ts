import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  annee = new Date().getFullYear();

  liens = ['Menu', 'Horaires', 'Contact'];

  reseaux = [
    { nom: 'Facebook',  icone: '📘', url: '#' },
    { nom: 'Instagram', icone: '📸', url: '#' },
    { nom: 'WhatsApp',  icone: '💬', url: '#' },
  ];
}

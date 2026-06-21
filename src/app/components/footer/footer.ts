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
    { nom: 'Facebook',  icone: 'bi bi-facebook', url: '#' },
    { nom: 'Instagram', icone: 'bi bi-instagram', url: '#' },
    { nom: 'WhatsApp',  icone: 'bi bi-whatsapp', url: '#' },
  ];
}

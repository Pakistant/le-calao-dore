import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface Dish {
id: number;
name: string;
description: string;
price: number;
category: 'entree' | 'plat' | 'dessert';
image: string;
}

@Component({
  selector: 'app-menu',
  imports: [NgClass],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
 dishes: Dish[] = [
    { id: 1, name: 'Beignets haricots', description: 'Beignets de niébé maison',
      price: 1500, category: 'entree',image: 'assets/images/menu/beignets-haricots.jpg' },
    { id: 2, name: 'Folong', description: 'Salade traditionnelle au folon',
      price: 2000, category: 'entree',image: 'assets/images/menu/folong.jpg' },
    { id: 3, name: 'Ndolè aux crevettes', description: 'Spécialité douala emblématique',
      price: 5500, category: 'plat',image: 'assets/images/menu/ndole-crevettes.jpg' },
    { id: 4, name: 'Poulet DG', description: 'Plantain mûr, légumes croquants',
      price: 6000, category: 'plat' ,image: 'assets/images/menu/poulet-dg.jpg'},
    { id: 5, name: 'Eru aux écailles', description: 'Légume forestier, viande fumée',
      price: 5000, category: 'plat',image: 'assets/images/menu/eru.jpg' },
    { id: 6, name: 'Mbongo Tchobi', description: 'Sauce noire aux épices sauvages',
      price: 5500, category: 'plat' ,image: 'assets/images/menu/mbongo-tchobi.jpg'},
    { id: 7, name: 'Pain perdu coco', description: 'Brioche, lait de coco, miel',
      price: 2500, category: 'dessert',image: 'assets/images/menu/pain-perdu-coco.jpg' },
    { id: 8, name: 'Bananes flambées', description: 'Plantain caramélisé, rhum',
      price: 2000, category: 'dessert',image: 'assets/images/menu/bananes-flambees.jpg' },
  ];
}

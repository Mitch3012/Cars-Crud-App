import { Component, inject } from '@angular/core';
import { CarService } from '../car-service';
import { Car } from '../car';

@Component({
  imports: [],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  carServ = inject (CarService);
  currentCar: Car | null = null;
  getImage(car: Car){
    this.currentCar = car;
  }
}

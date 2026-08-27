import { Component, inject } from '@angular/core';
import { CarService } from '../car-service';
import { Car } from '../car';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
  deleteCar(id:number){
    this.carServ.deleteCar(id);

}
}

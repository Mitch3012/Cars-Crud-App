import { Component, inject } from '@angular/core';
import { CarService } from '../car-service';
import { RouterLink, RouterOutlet } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Car } from '../car';

@Component({
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',

})
export class Home {
    carServ = inject (CarService);
carForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  image: new FormControl('', [Validators.required])
});
onSubmit() {
  console.log(this.carForm.value);
 
  if (this.carForm.valid) {

    const newCar: Car = {
      id: this.carServ.All().length + 1,
      name: this.carForm.value.name!,
      image: this.carForm.value.image!
    };

    this.carServ.addCar(newCar);
  }
}
}


import { Component, inject, computed} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car-service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { OnInit } from '@angular/core';
import { Car } from '../car';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-edit',
  styleUrl: './edit.css',
  templateUrl: './edit.html',
})
export class Edit implements OnInit{
  carServ = inject (CarService);
route = inject(ActivatedRoute);
updateForm() {
  const id = Number(this.getId());

  const car = this.carServ.All().find(car => car.id === id);

  if (car) {
    this.editForm.patchValue({
      name: car.name,
      image: car.image
    });
  }
}
id = toSignal(this.route.paramMap);
getId = computed(() => this.id()?.get('id'));
car = computed(() => {
  const id = Number(this.getId());

  return this.carServ.All().find(car => car.id === id);
});
editForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  image: new FormControl('', [Validators.required])
});
ngOnInit(): void {
  this.updateForm()
}
onSub() {
  console.log(this.editForm.value);
 
  if (this.editForm.valid) {

    const editCar: Car = {
      id: Number(this.getId()),
      name: this.editForm.value.name!,
      image: this.editForm.value.image!
    };

    this.carServ.updateCar(editCar);
  }
};
}

import { Service, signal, Signal, WritableSignal } from '@angular/core';
import { Car } from './car';


@Service()
export class CarService {
    All: WritableSignal<Car[]> = signal ([
        {id:1, name:"fiat", image:'https://www.media.stellantis.com/cache/d/5/0/7/c/d507c35a9708eb6b386885e817a90605e9d2e46b.jpeg'},
        {id:2, name:"toyota", image:'https://www.topgear.com/sites/default/files/cars-car/carousel/2019/04/toyota-camry-hybrid-exterior-dynamic-not-uk-spec-26.jpg'},
        {id:3, name:"ford", image:'https://m.atcdn.co.uk/a/media/w800/98575dc7ce18443289a394bf2f80812f.jpg'}
    ])
    addCar(car: Car) {
  this.All.update(cars => [...cars, car]);
}

}

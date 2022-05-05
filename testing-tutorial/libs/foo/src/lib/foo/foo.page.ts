import { Component } from '@angular/core';
import { FooService } from '../foo.service';

@Component({
  selector: 'testing-tutorial-foo',
  templateUrl: './foo.page.html',
  styleUrls: ['./foo.page.scss'],
})
export class FooPage {
  planets = this.foo.getAllPlanets();
  constructor(private foo: FooService) {}
}

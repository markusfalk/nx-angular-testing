import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooPage } from './foo/foo.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [FooPage],
  exports: [FooPage],
})
export class FooModule {}

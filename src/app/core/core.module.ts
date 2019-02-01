import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,
  ],
  entryComponents: [],
  exports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}

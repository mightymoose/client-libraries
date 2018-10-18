import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { API_BASE } from './injection-tokens';

export interface MmoaigCoreModuleConfig {
  apiBase: string;
}

@NgModule()
export class MmoaigCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: MmoaigCoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }

  static forRoot(config: MmoaigCoreModuleConfig): ModuleWithProviders {
    return {
      ngModule: MmoaigCoreModule,
      providers: [
        {provide: API_BASE, useValue: config.apiBase}
      ]
    };
  }
}

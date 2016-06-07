import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Material2DoAppComponent } from '../app/material2-do.component';

beforeEachProviders(() => [Material2DoAppComponent]);

describe('App: Material2Do', () => {
  it('should create the app',
      inject([Material2DoAppComponent], (app: Material2DoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'material2-do works!\'',
      inject([Material2DoAppComponent], (app: Material2DoAppComponent) => {
    expect(app.okButtonText).toEqual('Create task');
  }));
});

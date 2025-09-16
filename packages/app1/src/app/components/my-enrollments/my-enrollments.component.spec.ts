// Tests simples para MyEnrollmentsComponent con Jest
// Estos tests verifican la funcionalidad básica del componente de inscripciones

import { TestBed } from '@angular/core/testing';
import { MyEnrollmentsComponent } from './my-enrollments.component';
import { ApiService } from '@learn-angular20-with-nx-from-scratch/utils-common';
import { of } from 'rxjs';

describe('MyEnrollmentsComponent - Tests Simples', () => {
  let component: MyEnrollmentsComponent;
  let fixture: any;
  let apiServiceMock: any;

  beforeEach(async () => {
    // Creamos un mock simple del ApiService
    apiServiceMock = {
      getStudentEnrollmentsWithDetails: jest.fn().mockReturnValue(of([])),
      deleteEnrollment: jest.fn().mockReturnValue(of({}))
    };

    // Configuramos el módulo de testing
    await TestBed.configureTestingModule({
      imports: [MyEnrollmentsComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyEnrollmentsComponent);
    component = fixture.componentInstance;
  });

  describe('Pruebas básicas del componente', () => {
    it('debería crear el componente correctamente', () => {
      // Test: Verificamos que el componente se crea sin errores
      expect(component).toBeTruthy();
    });

    it('debería tener propiedades iniciales definidas', () => {
      // Test: Verificamos que las propiedades estén inicializadas
      expect(component.enrollments).toEqual([]);
      expect(component.loading).toBe(true);
      expect(component.error).toBe(null);
    });
  });

  describe('Métodos del componente', () => {
    it('debería tener el método cancelEnrollment', () => {
      // Test: Verificamos que el método existe
      expect(typeof component.cancelEnrollment).toBe('function');
    });

    it('debería tener el método ngOnInit', () => {
      // Test: Verificamos que implementa OnInit
      expect(typeof component.ngOnInit).toBe('function');
    });

    it('debería tener el método ngOnDestroy', () => {
      // Test: Verificamos que implementa OnDestroy
      expect(typeof component.ngOnDestroy).toBe('function');
    });
  });

  describe('Ciclo de vida del componente', () => {
    it('debería inicializar sin errores', () => {
      // Test: Verificamos que ngOnInit no causa errores
      expect(() => component.ngOnInit()).not.toThrow();
    });

    it('debería destruir sin errores', () => {
      // Test: Verificamos que ngOnDestroy no causa errores
      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });

  describe('Funcionalidad básica', () => {
    it('debería poder llamar cancelEnrollment con un string', () => {
      // Test: Verificamos que podemos llamar el método con parámetros correctos
      expect(() => component.cancelEnrollment('1')).not.toThrow();
    });

    it('debería tener la propiedad enrollments como array', () => {
      // Test: Verificamos que enrollments es un array
      expect(Array.isArray(component.enrollments)).toBe(true);
    });

    it('debería tener propiedades de estado definidas', () => {
      // Test: Verificamos que las propiedades de estado están definidas
      expect(typeof component.loading).toBe('boolean');
      expect(component.error === null || typeof component.error === 'string').toBe(true);
    });
  });
});
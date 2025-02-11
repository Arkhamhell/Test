import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  styleUrl: './edit-modal-content.component.css',
  selector: 'edit-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-edit-title">Editar Municipio</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="razonSocial" class="form-label">Nombre Municipalidad</label>
          <input type="text" id="razonSocial" [(ngModel)]="municipio.RZN_SCL_MNC" name="razonSocial" class="form-control">
        </div>
        <div class="mb-3">
          <label for="direccion" class="form-label">Dirección</label>
          <input type="text" id="direccion" [(ngModel)]="municipio.DIR_MNC" name="direccion" class="form-control">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss()">Cancelar</button>
      <button type="button" class="btn btn-primary" (click)="save()">Guardar</button>
    </div>
  `
})
export class EditModalContentComponent {
  @Input() municipio: any;

  constructor(public activeModal: NgbActiveModal) {}

  save() {
    this.activeModal.close(this.municipio);
  }
}
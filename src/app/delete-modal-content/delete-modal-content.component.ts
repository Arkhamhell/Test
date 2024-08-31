import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'delete-modal-content',
  styleUrl: './delete-modal-content.component.css'
,
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-delete-title">Eliminar Municipio</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <p>¿Está seguro de que desea eliminar el municipio <strong>{{ municipio.RZN_SCL_MNC }}</strong>?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss()">Cancelar</button>
      <button type="button" class="btn btn-danger" (click)="confirmDelete()">Eliminar</button>
    </div>
  `
})
export class DeleteModalContentComponent {
  @Input() municipio: any;

  constructor(public activeModal: NgbActiveModal) {}

  confirmDelete() {
    
    
    this.activeModal.close(this.municipio);
  }
}
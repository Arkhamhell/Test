import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MunicipiosService } from '../services/municipios.service';
import { Municipalidad } from '../models/municipalidad.interface';
import { EditModalContentComponent } from '../edit-modal-content/edit-modal-content.component';
import { DeleteModalContentComponent } from '../delete-modal-content/delete-modal-content.component';


@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrl: './municipios.component.css'
})
export class MunicipiosComponent {
  private municipioService = inject(MunicipiosService);
  private modalService = inject(NgbModal);
  municipios: any[] = [];
  selectedMunicipio: any;

  ngOnInit(): void {
    this.municipioService.getAllMunicipios().subscribe(data => {
      this.municipios = data;
    });
  }

  openEditModal(municipio: any) {
    const modalRef = this.modalService.open(EditModalContentComponent, { ariaLabelledBy: 'modal-edit-title' });
    modalRef.componentInstance.municipio = municipio;
  
    modalRef.result.then((result) => {
      if (result) {
        // Actualiza el municipio en la lista
        const index = this.municipios.findIndex(m => m.ID_CMN === result.ID_CMN);
        if (index !== -1) {
          this.municipios[index] = result;
        }
      }
    }).catch((error) => {
      console.log('Modal cerrado sin cambios', error);
    });
  }

  openDeleteModal(municipio: any) {
    const modalRef = this.modalService.open(DeleteModalContentComponent, { ariaLabelledBy: 'modal-delete-title' });
    modalRef.componentInstance.municipio = municipio;
  
    modalRef.result.then((result) => {
      if (result) {
        // Eliminar el municipio de la lista
        this.municipios = this.municipios.filter(m => m.ID_CMN !== result.ID_CMN);
      }
    }).catch((error) => {
      console.log('Modal cerrado sin eliminar', error);
    });
  }
}
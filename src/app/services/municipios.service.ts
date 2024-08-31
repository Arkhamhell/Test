import { inject, Injectable } from '@angular/core';
import { Municipalidad } from '../models/municipalidad.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {
  
  private apiUrl = '/api/getAllMunis';
  private mockData = MOCK_MUNICIPIOS;


  constructor(private http: HttpClient) { }

  getAllMunicipios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() => {
        console.log('No hay conexión al backend. Usando datos simulados.');
        return of(this.mockData);
      })
    );
  }
}

const MOCK_MUNICIPIOS: any[] = [
  {
    "RUT_MNC": "0690701006",
    "ID_CMN": 13101,
    "RZN_SCL_MNC": "MUNICIPALIDAD DE SANTIAGO",
    "DIR_MNC": "Plaza de Armas S/N",
    "ID_EST": 2
  },
  {
    "RUT_MNC": "0690707004",
    "ID_CMN": 13110,
    "RZN_SCL_MNC": "MUNICIPALIDAD DE LA FLORIDA",
    "DIR_MNC": "Américo Vespucio 6886",
    "ID_EST": 1
  },
  {
    "RUT_MNC": "0690709007",
    "ID_CMN": 13119,
    "RZN_SCL_MNC": "MUNICIPALIDAD DE MAIPU",
    "DIR_MNC": "Av. 5 de Abril 0260",
    "ID_EST": 1
  },
  {
    "RUT_MNC": "0691409007",
    "ID_CMN": 8401,
    "RZN_SCL_MNC": "MUNICIPALIDAD DE CHILLAN",
    "DIR_MNC": "Dirección: 18 de Septiembre 510",
    "ID_EST": 1
  },
  {
    "RUT_MNC": "0692550005",
    "ID_CMN": 13102,
    "RZN_SCL_MNC": "MUNICIPALIDAD DE CERILLOS",
    "DIR_MNC": "Las Hortensias #400",
    "ID_EST": 2
  },
  {
    "RUT_MNC": "0692614003",
    "ID_CMN": 13604,
    "RZN_SCL_MNC": "MUNICIPALIDAD DE PADRE HURTADO",
    "DIR_MNC": "San Alberto Hurtado Nº 3295 ( ex Camino a Melipilla )",
    "ID_EST": 1
  }
];
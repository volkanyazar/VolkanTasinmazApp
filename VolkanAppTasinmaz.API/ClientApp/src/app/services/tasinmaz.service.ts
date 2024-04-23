import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Tasinmaz } from '../models/tasinmaz';
import { catchError, map, tap } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';
import { Il } from '../models/il';
import { Ilce } from '../models/ilce';
import { Mahalle } from '../models/mahalle';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { TasinmazComponent } from '../tasinmaz/tasinmaz.component';

@Injectable({
  providedIn: 'root'
})
export class TasinmazService {
  private selectedTasinmazlar: Tasinmaz[] = [];
  private tasinmazComponent:TasinmazComponent
  private isMarked: boolean = false;
  private tasinmazlngt;
  private coordinatesSubjectD: BehaviorSubject<[number, number][]> = new BehaviorSubject<[number, number][]>([]);
  private coordinatesSubject: BehaviorSubject<[number, number]> = new BehaviorSubject<[number, number]>([null, null]);
  
  constructor(private httpClient: HttpClient,private authService:AuthService) { }
  setTasinmazComponent(component: TasinmazComponent) {
    this.tasinmazComponent = component;
  }

  setTasinmazLength(tasinmaz:number){
    this. tasinmazlngt =tasinmaz;
  }

  getTasinmazlarLength(){
    return this.tasinmazlngt;
  }
  getTasinmazComponent(): TasinmazComponent {
    return this.tasinmazComponent;
  }
  path = "https://localhost:5001/api/";

  getAll(): Observable<Tasinmaz[]> {
    return this.httpClient.get<Tasinmaz[]>(this.path + "tasinmazlar/getall");
  }

  getAllLinq(): Observable<Tasinmaz[]> {
    return this.httpClient.get<Tasinmaz[]>(this.path + "tasinmazlar/getallasc");
  }


  getTasinmazByUserId(userId:number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.path + "tasinmazlar/getbyuserid?userId="+userId);
  }

  getIller(): Observable<Il[]> {
    return this.httpClient.get<Il[]>(this.path + "iller/getall");
  }
  

  getIlceler(): Observable<Ilce[]> {
    return this.httpClient.get<Ilce[]>(this.path + "ilceler/getall");
  }

  getMahalleler(): Observable<Mahalle[]> {
    return this.httpClient.get<Mahalle[]>(this.path + "mahalleler/getall");
  }

  getIlcelerByIlId(ilId: number): Observable<Ilce[]> {
    return this.httpClient.get<Ilce[]>(this.path + `ilceler/getlistbycategory?categoryId=${ilId}`);
  }
  
  getMahallelerByIlceId(ilceId: number): Observable<Mahalle[]> {
    return this.httpClient.get<Mahalle[]>(this.path + `mahalleler/getlistbycategory?categoryId=${ilceId}`);
  }
  
  getTasinmazById(id: number): Observable<Tasinmaz> {
    return this.httpClient.get<Tasinmaz>(`${this.path}tasinmazlar/getbyid?tasinmazId=`+id);
  }
  
  addTasinmaz(tasinmaz:Tasinmaz):Observable<Tasinmaz>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json', "Authorization": `Bearer ${this.authService.token}`
      })
    } 
    return this.httpClient.post<Tasinmaz>(this.path + "tasinmazlar/add",tasinmaz, httpOptions)
      .pipe(
        tap(data =>console.log(JSON.stringify(data["data"]))),
        catchError(this.handleError))
  }

  updateTasinmaz(tasinmaz: Tasinmaz): Observable<Tasinmaz> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', "Authorization": `Bearer ${this.authService.token}`
      })
    };
    return this.httpClient.put<Tasinmaz>(this.path + "tasinmazlar/update", tasinmaz, httpOptions)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteTasinmaz(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', "Authorization": `Bearer ${this.authService.token}`
      })
    };
    return this.httpClient.delete(this.path + "tasinmazlar/delete/" + id, httpOptions)
        .pipe(
          tap(data => console.log(JSON.stringify(data))),
          catchError(this.handleError)
        );
  }

  getSelectedTasinmazlar(): Tasinmaz[] {
    return this.selectedTasinmazlar;
  }

  setSelectedTasinmazlar(tasinmazlar: Tasinmaz[]): void {
    this.selectedTasinmazlar = tasinmazlar;
  }
  
  markTasinmazlarOnMap(coordinates: [number, number][]): void {
    // Koordinatları BehaviorSubject ile yayınla
    this.coordinatesSubjectD.next(coordinates);
  }
  

// Koordinatları alma işlevi
getCoordinates(): Observable<[number, number]> {
  return this.coordinatesSubject.asObservable();
}
setIsMarked(isMarked: boolean) {
  this.isMarked = isMarked;
}

getIsMarked(): boolean {
  return this.isMarked;
}
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message
    } else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage);
  }
}

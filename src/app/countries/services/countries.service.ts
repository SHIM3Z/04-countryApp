import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiurl: string = 'https://restcountries.com/v3.1';
  constructor(private htttp: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country[]> {
    const url = `${this.apiurl}/alpha/${code}`;
    return this.htttp.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiurl}/capital/${term}`;
    return this.htttp.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiurl}/name/${term}`;
    return this.htttp.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiurl}/region/${region}`;
    return this.htttp.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}

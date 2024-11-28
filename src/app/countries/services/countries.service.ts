import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiurl: string = 'https://restcountries.com/v3.1';
  constructor(private htttp: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.htttp.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(500)
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiurl}/alpha/${code}`;
    return this.htttp.get<Country[]>(url).pipe(
      map((c) => (c.length > 0 ? c[0] : null)),
      catchError(() => of(null))
      // delay(500)
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiurl}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiurl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiurl}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}

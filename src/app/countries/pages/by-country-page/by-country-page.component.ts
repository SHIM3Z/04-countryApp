import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  private isLoading = false;
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}
  searchbyCountry(term: string) {
    this.isLoading = true;
    this.countryService.searchCountry(term).subscribe((res) => {
      this.countries = res;
      this.isLoading = false;
    });
  }

  get loading() {
    return this.isLoading;
  }
}

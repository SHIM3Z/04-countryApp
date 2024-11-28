import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  private isLoad: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchbyCapital(term: string): void {
    this.isLoad = true;
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoad = false;
    });
  }

  get loaded() {
    return this.isLoad;
  }
}

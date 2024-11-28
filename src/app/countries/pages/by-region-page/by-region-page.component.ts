import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public isLoading: boolean = false;
  public contri: Country[] = [];
  constructor(private contriserv: CountriesService) {}
  searchbyRegion(term: string) {
    this.isLoading = true;
    this.contriserv.searchRegion(term).subscribe((res) => {
      this.contri = res;
      this.isLoading = false;
    });
  }
}

import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public contri: Country[] = [];
  constructor(private contriserv: CountriesService) {}
  searchbyRegion(term: string) {
    this.contriserv.searchRegion(term).subscribe((res) => (this.contri = res));
  }
}

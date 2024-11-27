import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './countryTable.component.html',
  styleUrl: './countryTable.component.css',
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
}

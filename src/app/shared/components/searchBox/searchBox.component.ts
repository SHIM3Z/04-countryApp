import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();

  // private debouncer = new Subject<string>(); también se puede declarar asi

  @Input() public placeholder: string = '';

  @Output() public onValue = new EventEmitter<string>();

  @Output() public onDebaunce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((r) => {
      this.onDebaunce.emit(r);
    });
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
}

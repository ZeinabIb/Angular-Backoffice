import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-list-navbar',
  standalone: true,
  imports: [SearchbarComponent, FilterComponent],
  templateUrl: './list-navbar.component.html',
  styleUrl: './list-navbar.component.css'
})
export class ListNavbarComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Det her lader til at blive eksporteret til view'et, fordi 'app.component.html' har adgang hertil.
  title = 'Tour Of Heroes';
}

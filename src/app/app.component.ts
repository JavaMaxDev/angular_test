import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gestion Hotel';
  visiteurCount = 0;

  ngOnInit() {
    const count = localStorage.getItem('visiteurCount');
    if (count) {
      this.visiteurCount = parseInt(count, 10);
    }
  }

  @HostListener('window:load', ['$event'])
  onWindowLoad(event: Event) {
    this.visiteurCount++;
    localStorage.setItem('visiteurCount', this.visiteurCount.toString());
  }
}

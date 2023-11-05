import {Component, HostListener, OnInit} from "@angular/core";

@Component({
  selector: 'app-conteur',
  templateUrl: 'conteur.component.html'
})

export class ConteurComponent implements OnInit{
  countValue = 0;
  ngOnInit() {
    const count = localStorage.getItem('countValue');
    if(count){
      this.countValue = parseInt(count, 10);
    }
  }

  @HostListener('window:load',['$event'])
  onWindowLoad(event: Event){
    this.countValue++;
    localStorage.setItem('countValue',this.countValue.toString());
  }
}

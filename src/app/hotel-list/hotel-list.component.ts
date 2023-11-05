import {Component, OnInit} from "@angular/core";
import {IHotel} from "./hotel";
import {randomIntFromInterval} from "./hotel";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-liste.component.css']
})


export class HotelListComponent implements OnInit{
  ngOnInit() {
  }

  public title = "Liste hotels";
  public getDate(): Date{
    return new Date();
  };
  public loremPicture: String = "https://picsum.photos/id/2/300/200";
  public hotels: IHotel[] = [
    {
      hotelId: 1,
      hotelName: 'Buea sweet life',
      description: "Belle vue au bord de la mer",
      price: 230.5,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    },
    {
      hotelId: 2,
      hotelName: 'Luxe Paradise Resort',
      description: "Profitez du luxe absolu dans notre complexe.",
      price: 450.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    },
    {
      hotelId: 3,
      hotelName: 'Sunset Beach Hotel',
      description: "Couchers de soleil spectaculaires sur la plage.",
      price: 320.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`    },
    {
      hotelId: 4,
      hotelName: 'Mountain View Lodge',
      description: "Vue imprenable sur les montagnes environnantes.",
      price: 180.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`    },
    {
      hotelId: 5,
      hotelName: 'Cityscape Hotel',
      description: "Au cœur de la ville, avec une vue magnifique.",
      price: 275.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    },
    {
      hotelId: 6,
      hotelName: 'Nature Retreat Inn',
      description: "Échappez à la nature dans notre retraite paisible.",
      price: 210.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    },
    {
      hotelId: 7,
      hotelName: 'Oceanfront Oasis',
      description: "Directement sur la plage, une oasis de détente.",
      price: 350.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    },
    {
      hotelId: 8,
      hotelName: 'Historic Charm Hotel',
      description: "Héritage et charme dans un cadre historique.",
      price: 190.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    },
    {
      hotelId: 9,
      hotelName: 'Ski Resort Lodge',
      description: "Ski-in, ski-out dans notre lodge de montagne.",
      price: 280.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    },
    {
      hotelId: 10,
      hotelName: 'Riverside Retreat',
      description: "Au bord de la rivière, une escapade sereine.",
      price: 260.0,
      imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1,50)}/300/200`
    }
  ];

  public showBadge: boolean | undefined;

  public toggleisNewBadge(): void{
    this.showBadge = !this.showBadge;
  }
  public hotelFilter = 'mot';
}





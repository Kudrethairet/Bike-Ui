import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {this.bikes = data},
      err => console.error(err),
      () => console.log('bikes loaded')


    );
  }

  MyClickFunction(id: number){
  if(confirm("are you sure to delete this item?")){
    console.log("delete");
    this.deleteBikeReg(id);
  }
  }

  deleteBikeReg(id: number){
    this.bikeService.deleteBike(id).subscribe(
        data=> {
          this.bikes=data;
          window.location.reload();
        },
        err=>console.log(err),
        () => console.log("deleted")
        
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError, Observable  } from 'rxjs';



@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
   text2: String= 'user did not provide data';
  public bikeReg;
  public v ;
  edit: String="EDIT"
  models: string[] = [
    'Globo MTB 29 Full Suspension',
    "Globo Carbon Fiber Race Serires",
    "Globo Time Trial Blade",
  ];

 
  constructor(private bikeService: BikeService,  private route: ActivatedRoute) { }

  buttonText(){

    return this.edit;
   }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params.id);
    //.this.bikeform.controls.proof.patchValue(this.bikeReg)
   /* this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()


    });
   */
  }

  /*UpdateRegistration(id: number) {if(this.bikeform.valid){
    this.validMessage = "you bike registration has been submitted. thank you!";
    this.bikeService.UpdateBikeRegistration(id,this.bikeform.value).subscribe(
      data => {
        this.bikeform.disabled;
        return true;
      },
       error =>{
         return Observable.throw(error);
       } 
    )
  }
  else{
    this.validMessage= " please fill out the form before submitting!"
  }
    }*/
  
  


  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data=>{
        
       
        
        this.bikeReg=data;
        console.log(this.bikeReg)
        for(let v in data){
          if(data[v]==null){
            data[v]=  this.text2;
          }
        }

        for( this.v in this.bikeReg){
           if(this.bikeReg[this.v]==this.text2){
            //console.log(this.bikeReg[this.v])
           }
         }
        

      
      
      
      },
        err => console.error(err),
        () => console.log('bike loaded')
    );

  }
  
  public toggleUserNameButton: boolean =true ;
  public confirmButtonStarus=false;

  
/*
 enable(){
    this.toggleButton = false
 }

 disable(){
    this.toggleButton = true
 }
*/
enable(){
  this.toggleUserNameButton = false;
  this.confirmButtonStarus=true;
}

disable(){
  this.toggleUserNameButton = true;
  this.confirmButtonStarus=false;

}
 switchButton(toggle: boolean){
  
  if(toggle==true){
    this.enable()
    this.edit="SAVE";
  }
  else if(toggle==false){
   this.disable()

    this.edit="EDIT"
  }

 }

 switchConfirmButton(toggle: boolean){
  if(toggle==true){
    this.disable()
   
  }
  else if(toggle==false){
   this.enable()

    
  }

 }
 



}

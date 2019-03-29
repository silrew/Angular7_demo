import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from 'src/app/shared/http-service.service';
import { AuthService } from 'src/app/auth/signup/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output () featureSelected =new EventEmitter<string> ();

  constructor(private httpservice: HttpServiceService,
              private authService: AuthService) { }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
  onFetchData(){
    this.httpservice.getData();
  }

onSavedata(){
  this.httpservice.storeRecipes().subscribe(
    (response: Response)=>{
      console.log(response);
    }
  );
}
  ngOnInit() {
  }

}

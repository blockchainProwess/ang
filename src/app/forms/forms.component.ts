import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  dataForm: any = {'companydb': 'PROWESS', 'password': 'Prosap@123', 'username': 'manager','code': ' ', 'applied_leaves1': 0, 'total_leaves': 0,'fdate1': ' ', 'tdate1': ' '};
  constructor( private formbuilder:FormBuilder,private router:Router,private httpClient: HttpClient) { }
  ngOnInit(): void {

  }

  gotoHome(){
    this.router.navigate(['data']);  // define your component where you want to go
  }

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  formSubmit() { 
    console.log(this.dataForm);
    this.httpClient.post('http://ec2-34-195-240-34.compute-1.amazonaws.com:3000/bone/postdata/',this.dataForm, this.requestOptions).subscribe(res => {
      console.log(this.dataForm);
      console.log(res);
    })
  }

 
}

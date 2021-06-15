import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  dataForm: any = {'companydb': 'PROWESS', 'password': 'Prosap@123', 'username': 'manager','code': ' ', 'applied_leaves1': 2, 'total_leaves': 12,'fdate1': ' ', 'tdate1': ' ', 'applied_leaves2':4,'fdate2':'21 jul','tdate2':'22 jul'};
  constructor( private formbuilder:FormBuilder,private router:Router,private httpClient: HttpClient, public service:ConfigService) { }
  ngOnInit(): void {

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

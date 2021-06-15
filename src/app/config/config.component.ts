import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
    selector: 'app-config',
    templateUrl: './config.component.html'
})

export class ConfigComponent implements OnInit {
    @Output() public found = new EventEmitter<any>();
response:any;
  constructor(private http : HttpClient, private router: Router){ }
  
  ngOnInit(): void { }

  gotoHome(){
    this.router.navigate(['initial']);  // define your component where you want to go
    }

  dataForm: any = {'companydb': 'PROWESS', 'password': 'Prosap@123', 'username': 'manager','empcode': ''};
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

    formSubmit() {
        this.http.post('http://ec2-34-195-240-34.compute-1.amazonaws.com:3000/bone/getdata/',this.dataForm, this.requestOptions).subscribe(res => {
        console.log(this.dataForm);
        console.log(res);
        this.response = res;
      })
    }
}
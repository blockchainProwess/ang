import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html'
})

export class ConfigComponent implements OnInit {
    @Output() public found = new EventEmitter<any>();
response:any;
  constructor(private http : HttpClient){ }
  
  ngOnInit(): void {
    const dataForm = {'companydb': 'PROWESS', 'password': 'Prosap@123', 'username': 'manager','empcode': '101'};
    const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
      };
      this.http.post('http://ec2-34-195-240-34.compute-1.amazonaws.com:3000/bone/getdata/',dataForm, requestOptions).subscribe(res => {
        console.log(dataForm);
        console.log(res);
        this.response = res;
      })
    }
}
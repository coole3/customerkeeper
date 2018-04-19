import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../services/data.service';
import { Observable } from "rxjs/Observable";
import { Appoint } from '../../../models/user.model'
import { Paging } from '../../../models/user.model'
import { Http } from '@angular/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;
  data$: Observable<Array<Appoint>>;
  signinForm: FormGroup;
  model: Paging;

  constructor(private _svc: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    console.log(signinData);
  
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.http.post('api/Account/Login/', signinData).subscribe(res => { console.log(res);
     
   });
  }

  // thething(): void{
  //  this.data$ = this._svc.getUserAppoint();
  //  console.log(this.data$);
  // }

  thething(){
    this.model = new Paging;
    this.model.pageSize = 20;
    this.model.pageNum = 1;
    this.model.sortDir = 'ASC';
    this.http.post('api/api/Appoint/userinfo', this.model).subscribe(res => { console.log(res);
     
    });
    
  }
}

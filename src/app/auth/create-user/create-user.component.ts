import { Component, OnInit , Input} from '@angular/core';
import { Createuser } from './../../createuser'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
}) 
export class CreateUserComponent implements OnInit {
  @Input() createuser : Createuser;

  constructor() { }

  ngOnInit() {
  }
  submitted = false;
  model:any={};
  onSubmit() { 
    this.submitted = true;
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
   }
  }

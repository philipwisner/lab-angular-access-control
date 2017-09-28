import { Component, OnInit } from '@angular/core';
import { Log } from '../model/Log';
import { AccescontrollogService } from '../service/accescontrollog.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})

export class LogFormComponent implements OnInit {
  formModel = {
    person: 'Name',
    message: 'Hello'
  }

  Logs:Log[]=[];
  newLog:Log;
  success: boolean = false;

  constructor(private newAccescontrollogService:AccescontrollogService) {
  }

  ngOnInit() {
  }

  handleSubmitForm() {
    this.newAccescontrollogService.addAccessItem(this.formModel.person, this.formModel.message);
    this.success = true;
  }

}

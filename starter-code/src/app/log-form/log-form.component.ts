import { Component, OnInit } from '@angular/core';
import { Log } from '../model/Log';
import { AccescontrollogService } from '../service/accescontrollog.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})

export class LogFormComponent implements OnInit {
  Logs:Log[]=[];
  newLog:Log;
  person: string = "Name";
  message: string = "Hello";
  success: boolean = false;

  constructor(private newAccescontrollogService:AccescontrollogService) {
  }

  ngOnInit() {
  }

  handleSubmitForm() {
    this.newAccescontrollogService.addAccessItem(this.person, this.message);
    this.success = true;
  }

}

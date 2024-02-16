import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {


  constructor(private title : Title){}
  ngOnInit(): void {
    this.title.setTitle("Admin");
  }
}

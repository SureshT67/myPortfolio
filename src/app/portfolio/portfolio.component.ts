import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  contactName:string='';
  number:string='';

  contacts:Contact[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  addContact(){
    let contact:Contact={
      contactName:this.contactName,
      number:this.number
    }
    this.contacts.push(contact);
    //sessionStorage.setItem("users", JSON.stringify(this.users));
  }



}
interface Contact{
  contactName:string;
  number:string;
 }
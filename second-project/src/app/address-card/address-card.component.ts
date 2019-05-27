import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  isCollapse: boolean = true;
  user: any;
  // @Input('name') username: string;
  @Input('userdata') userdata: User;

  constructor() {
    // this.user = {
    //   name: 'Andrew Foo!!',
    //   title: 'Football Player',
    //   address: '1234 Main St, City, State, 10010',
    //   phone: [
    //     '123-123-1234',
    //     '456-456-4567',
    //     '789-789-7890'
    //   ]
    // };
  }

  toggleCollapse()
  {
    this.isCollapse = !this.isCollapse;
  }

  ngOnInit() {
    this.user = {
      name: this.userdata.name,
      title: this.userdata.designation,
      address: this.userdata.address,
      phone: this.userdata.phone
    };
  }

}

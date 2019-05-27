import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  inputText: string = "Initial Value";

  constructor(){
    this.user = new User();
    this.user.name = 'Andrew Foo';
    this.user.designation = 'Football Player';
    this.user.address = '1234 Main St, City, State, 10010';
    this.user.phone = [
        '123-123-1234',
        '456-456-4567',
        '789-789-7890'
    ];
  }
  
}

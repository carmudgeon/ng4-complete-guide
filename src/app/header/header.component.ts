import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login();
  }
}

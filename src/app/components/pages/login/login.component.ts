import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../shared/user.service';
import { User } from '../../../modal/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  email: string = '';
  password: string = '';

  useropj = new User();
  userarray: User[] = [];
  
  constructor(private titleservice: Title, private user: UserService){}

  ngOnInit(): void {
    this.titleservice.setTitle('Login');
    this.getuserall();
  }

  getuserall(){
    this.user.getusersapi().subscribe(res =>{
      this.userarray = res;

      console.log(this.userarray);
    }, error =>{
      console.log(error);
    })
  }



  Login(email: string, password: string){
    this.user.login(email, password).subscribe((res) =>{
      console.log('login successfully', res);
      console.log(email, password);
    }, error =>{
      console.log('error login', error);
      console.log(email, password);
    })
  }
}

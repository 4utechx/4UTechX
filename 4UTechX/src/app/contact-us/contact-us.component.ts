import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
        
      firstname:string= "";
      company:string= "";
      email:string= "";
      lastname:string= "";
      title:string= "";
      phoneNum: string= "";
      needHelp: string="";
      
      constructor() { }

      ngOnInit() {
      }

     myFunc(){
       console.log(this.firstname);
       console.log(this.company);
       console.log(this.email);
       console.log(this.lastname);
       console.log(this.title);
       console.log(this.phoneNum);
       console.log(this.needHelp);
      
     }
     
}

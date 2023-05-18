import { Component,OnInit  } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@capacitor/splash-screen';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jobcheck';
  constructor(private platform: Platform,private router: Router) {
    

  }

  ngOnInit() {

    const currentPath = localStorage.getItem('currentPath');

    if (currentPath) {
    
    this.router.navigate([currentPath]);
    
    }

   // this.hideSplashScreen();


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

 


  


}

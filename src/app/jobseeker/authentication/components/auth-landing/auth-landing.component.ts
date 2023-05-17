import { OnInit, Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Plugins } from '@capacitor/core';
import { Route, Router } from '@angular/router';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';


const { StatusBar } = Plugins;

@Component({
  selector: 'app-auth-landing',
  templateUrl: './auth-landing.component.html',
  styleUrls: ['./auth-landing.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AuthLandingComponent implements OnInit {



  options: CloudOptions = {
    height: 350,
    width:800,
    overflow: false,
    font:'Candara',
    zoomOnHover: {
      scale: 1.5,
      transitionTime: 0.3,
      delay: 0.1
    },
    realignOnResize: true,
   
  };

  data: CloudData[] = [
    {
    text:'Dope💚🦋',color:'green',external:false,weight:5
  },{
    text:'Dope💚🦋',color:'green',external:false,weight:10
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#175CD3',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#B54708',external:false,weight:25
  },
  {
    text:'Dope💚🦋',color:'#00A2E0',external:false,weight:25
  },
  {
    text:'Dope💚🦋',color:'#30728C',external:false,weight:35
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#12B76A',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#3E4784',external:false,weight:30
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:40
  },
  {
    text:'Dope💚🦋',color:'#4E5BA6',external:false,weight:30
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#EF6820',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:5
  },
  {
    text:'Dope💚🦋',color:'#364152',external:false,weight:65
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:55
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:70
  },
  {
    text:'Dope💚🦋',color:'#364152',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#B54708',external:false,weight:67
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:90
  },
  {
    text:'Dope💚🦋',color:'#4E5BA6',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#364152',external:false,weight:10
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:5
  },
  {
    text:'Dope💚🦋',color:'green',external:false,weight:5
  },{
    text:'Dope💚🦋',color:'green',external:false,weight:10
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#175CD3',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#B54708',external:false,weight:25
  },
  {
    text:'Dope💚🦋',color:'#00A2E0',external:false,weight:25
  },
  {
    text:'Dope💚🦋',color:'#30728C',external:false,weight:35
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#12B76A',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#3E4784',external:false,weight:30
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:40
  },
  {
    text:'Dope💚🦋',color:'#4E5BA6',external:false,weight:30
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#EF6820',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:5
  },
  {
    text:'Dope💚🦋',color:'#364152',external:false,weight:65
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:55
  },
  {
    text:'Dope💚🦋',color:'#027A48',external:false,weight:70
  },
  {
    text:'Dope💚🦋',color:'#364152',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#B54708',external:false,weight:67
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:90
  },
  {
    text:'Dope💚🦋',color:'#4E5BA6',external:false,weight:20
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:15
  },
  {
    text:'Dope💚🦋',color:'#364152',external:false,weight:10
  },
  {
    text:'Dope💚🦋',color:'#DC6803',external:false,weight:5
  },

];

log(eventType: string, e?: any) {
  console.log(eventType, e);
}
randomData(cnt?: number): CloudData[] {
  if (!cnt) { cnt = 0; }

  const cd: CloudData[] = [];

  for (let i = 0; i < cnt; i++) {
    let link: string='';
    let color: string='';
    let external: boolean=false;
    let weight = 2;
    let text = '';
    let rotate = 0;
    let font: string = '';

    // randomly set link attribute and external
    if (Math.random() >= 0.5) {
      link = 'http://example.org';
      if (Math.random() >= 0.5) { external = true; }
    }

    // randomly rotate some elements (less probability)
    if (Math.random() >= 0.8) {
      const plusMinus = Math.random() >= 0.5 ? '' : '-';
      rotate = Math.floor(Math.random() * Number(`${plusMinus}20`) + 1);
    }

    // randomly set color attribute
    if (Math.random() >= 0.5) {
      color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // set random weight
    weight = Math.floor((Math.random() * 5) + 1);

  let  hello=['hello', 'world']
    text = hello[i];
    const el: CloudData = {
      text: text,
      weight: weight,
      color: color,
      link: link,
      external: external,
      rotate: rotate
    };

    cd.push(el);
  }

  return cd;
}


  current = 0;
  errorMsgOfSpecialization: string;
  img_list = [
    'assets/images/deliveryboy.svg',
    'assets/images/engineer.svg',
    'assets/images/teacher.svg',
    'assets/images/Operator.svg',
    'assets/images/fresher.svg',
  ];
  userSelectedLanguages: any[] = [];
  selectedLanguages : string [] =[]
  Language: any = ' ';
  searchLanguage: string[] = [...this.Language];
  queryLanguage: string = '';
 
  errorMsgOflanguage: string;
  selectedLanguage: string="English";
  

  constructor( private router:Router) {
  // localStorage.setItem('data','hello this is data')
}

  ngOnInit(): void {





    let profileId = sessionStorage.getItem('profileID');

      setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);

    if(profileId){
      this.router.navigate(['/dashboard'])
    }

    this.toGetLanguage()
  }
  animationChange(num: number) {
    this.current = num;
  }

  onClickLanguage(e:any){
    this.selectedLanguage=e
  }

  toGetLanguage() {
   
  }

  languageSearch() {
    this.searchLanguage = this.Language.filter((data: any) => {
      return data.toLowerCase().includes(this.queryLanguage.toLowerCase());
    });
    if (this.searchLanguage.length == 0) {
      this.errorMsgOflanguage = 'assets/images/amico.svg';
    }else{
      this.errorMsgOflanguage ='';
    }

    //console.log("Search city other: " , this.searchOthCity)
  }


  
  
}

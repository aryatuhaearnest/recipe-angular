import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{
  mediaSub: Subscription
  deviceXs: boolean
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    public mediaObserver: MediaObserver
    
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.deviceXs= result.mqAlias==='xs' ? true :false;

    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}

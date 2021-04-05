import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {

    latitude: number;
    longitude: number;
    paramsSubscription: Subscription;

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe( params => {
        this.latitude = Number(params['latitude']);
        this.longitude = Number(params['longitude']);
      });
  }

  ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
  }


}

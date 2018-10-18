import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BackendUser } from 'mmoaig-core';

@Component({
  selector: 'app-test-user-list-endpoint',
  templateUrl: './test-user-list-endpoint.component.html',
  styleUrls: ['./test-user-list-endpoint.component.css']
})
export class TestUserListEndpointComponent implements OnInit {
  public users: Observable<BackendUser>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.data.pipe(pluck('users', 'data'));
  }

}

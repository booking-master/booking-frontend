import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/model/guest';
import { UserModel } from 'src/app/model/user-model';
import { GuestService } from 'src/app/service/guest.service';
import { UserHeaderComponent } from '../../header/user-header/user-header.component';
import { UserPersonalInfo } from 'src/app/model/personal-info-model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.css'],
})
export class GuestDashboardComponent implements OnInit {
  userPersonalInfo: UserPersonalInfo = new UserPersonalInfo();
  activeTab: string = 'PERSONAL_INFO';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUserInfo().subscribe((data: UserPersonalInfo) => {
      this.userPersonalInfo = data;
      console.log(data);
    });
  }

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }
}

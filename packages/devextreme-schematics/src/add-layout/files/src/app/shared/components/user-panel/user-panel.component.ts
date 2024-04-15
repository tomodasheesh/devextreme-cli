import { Component, NgModule, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxDropDownButtonModule, DxDropDownButtonComponent } from 'devextreme-angular/ui/drop-down-button';
import { UserMenuSectionModule } from '../user-menu-section/user-menu-section.component';
import { IUser } from '../../services/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode!: string;

  @Input()
  user!: IUser | null;

  @ViewChild(DxDropDownButtonComponent) dropDownBtn?: DxDropDownButtonComponent;

  onMenuItemClick() {
    this.dropDownBtn?.instance.close();
  }

  constructor() {}
}

@NgModule({
  imports: [
    DxDropDownButtonModule,
    UserMenuSectionModule,
    CommonModule,
  ],
  declarations: [ UserPanelComponent ],
  exports: [ UserPanelComponent ]
})
export class UserPanelModule { }

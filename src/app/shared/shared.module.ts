import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AbourPageComponent } from './pages/abourPage/abourPage.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent, AbourPageComponent, SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AbourPageComponent, SideBarComponent],
})
export class SharedModule {}

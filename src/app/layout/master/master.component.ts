import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

  @ViewChild('sidebar') sidebar!: SidebarComponent;
  sidebarHidden: boolean = false;

  toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
    this.sidebar.toggleSidebar(this.sidebarHidden);

     if (this.sidebarHidden) {
      document.querySelector('.sidebar-container')?.classList.add('hidden');
      document.querySelector('.main-container')?.classList.add('expanded');
    } else {
      document.querySelector('.sidebar-container')?.classList.remove('hidden');
      document.querySelector('.main-container')?.classList.remove('expanded');
    }
  }
}

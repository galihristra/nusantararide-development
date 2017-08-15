import { TimelinePage } from './../timeline/timeline';
import { NavigationPage } from './../navigation/navigation';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimelinePage;
  tab2Root = NavigationPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

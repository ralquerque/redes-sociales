import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { DatosPersonalesPage } from '../datos-personales/datos-personales';

//import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UbicacionPage;
  tab3Root = DatosPersonalesPage;

  constructor() {

  }
}

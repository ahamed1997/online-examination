import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  opened=false;
  public chartType: string = 'pie';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { 
    this.matIconRegistry.addSvgIcon(
      "listicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/import_contacts-24px.svg")
    );
      this.matIconRegistry.addSvgIcon(
        "addicon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/create-24px.svg")
      );
    this.matIconRegistry.addSvgIcon(
      "deleteicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/delete-24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "questionicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/line_weight-24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "arrowicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/keyboard_arrow_down-24px.svg")
    );
  }

  ngOnInit() {
  }

}

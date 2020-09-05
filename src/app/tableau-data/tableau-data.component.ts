declare var tableau: any;
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tableau-data',
  templateUrl: './tableau-data.component.html',
  styleUrls: ['./tableau-data.component.css']
})
export class TableauDataComponent implements AfterViewInit  {


  viz: any;
  @ViewChild("vizContainer") containerDiv: ElementRef;

  ngAfterViewInit() {
    this.initTableau();
  }

  initTableau() {
    // const containerDiv = document.getElementById("vizContainer");
    const vizUrl =
      "https://public.tableau.com/views/VacationHome/VacationHome?:embed=y&:display_count=yes";

    const options = {
      hideTabs: true,
      onFirstInteractive: () => {
        console.log("onFirstInteractive");
      },
      onFirstVizSizeKnown: () => {
        console.log("onFirstVizSizeKnown");
      }
    };
    this.viz = new tableau.Viz(
      this.containerDiv.nativeElement,
      vizUrl,
      options
    );
  }

  




}

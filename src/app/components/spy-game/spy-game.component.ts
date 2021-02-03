import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-spy-game',
  templateUrl: './spy-game.component.html',
  styleUrls: ['./spy-game.component.scss']
})
export class SpyGameComponent implements OnInit {
  totalTiles = new Array(25);
  rowHeight = '';
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    console.log(Breakpoints);
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.Large, Breakpoints.Medium,
      Breakpoints.Tablet, Breakpoints.Web, Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.rowHeight = '2:1';
        } else {
          this.rowHeight = '1:1';
        }
      });
  }

}

// Handset: "(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)"
// HandsetLandscape: "(max-width: 959.99px) and (orientation: landscape)"
// HandsetPortrait: "(max-width: 599.99px) and (orientation: portrait)"
// Large: "(min-width: 1280px) and (max-width: 1919.99px)"
// Medium: "(min-width: 960px) and (max-width: 1279.99px)"
// Small: "(min-width: 600px) and (max-width: 959.99px)"
// Tablet: "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)"
// TabletLandscape: "(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)"
// TabletPortrait: "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)"
// Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)"
// WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
// WebPortrait: "(min-width: 840px) and (orientation: portrait)"
// XLarge: "(min-width: 1920px)"
// XSmall: "(max-width: 599.99px)"

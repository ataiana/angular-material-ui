import { Component, HostBinding, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { FormControl } from '@angular/forms';
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
    // This Observer will fire true when viewport is less than 600px width
    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );
    // Dark Mode Toggle
    toggleControl = new FormControl(false);
    // HostBinding applies the classname to the component itself
    @HostBinding('class') className = '';

    constructor(
        private breakpointObserver: BreakpointObserver,
        private overlay: OverlayContainer
    ) { }

    ngOnInit(): void {
        this.toggleControl.valueChanges.subscribe((darkMode) => {
            const darkClassName = 'darkMode';
            this.className = darkMode ? darkClassName : '';
            // This will apply dark mode to the overlay components
            if (darkMode) {
                this.overlay.getContainerElement().classList.add(darkClassName);
            } else {
                this.overlay.getContainerElement().classList.remove(darkClassName);
            }
        });
    }
}

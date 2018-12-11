import { Directive, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { APPCONFIG } from '../../../config';

// Mobile only: automatically close sidebar on route change.
@Directive({ selector: '[appAutoCloseMobileNav]' })

export class AutoCloseMobileNavDirective implements OnInit {
  el: ElementRef;
  router: Router;
  constructor(el: ElementRef, router: Router) {
    this.el = el;
    this.router = router;
  }

  ngOnInit() {
    const $body = $('#body');

    if (APPCONFIG.AutoCloseMobileNav) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            $body.removeClass('sidebar-mobile-open');
          }, 0);
        }
      });
    }

  }
}
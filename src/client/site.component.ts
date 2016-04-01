import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'site',
  templateUrl: 'templates/template.html',
  providers: [HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})
export class SiteComponent { }
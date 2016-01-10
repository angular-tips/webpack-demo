import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import header from './features/header';

function MainController($log) {
  $log.debug('MainCtrl laoded!');
}

function run($log){
  $log.debug('ng-App is running!');
}

angular.module('app', [uirouter, home, header])
  .config(routing)
  .run(run)
  .controller('MainController', MainController);

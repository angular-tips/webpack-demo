import angular from 'angular';

import HeaderController from './header.controller';

export default angular.module('app.header', [])
  .controller('HeaderController', HeaderController)
  .name;

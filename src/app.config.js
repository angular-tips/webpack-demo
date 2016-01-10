routing.$inject = ['$urlRouterProvider', '$locationProvider',
  '$stateProvider','$logProvider'];

export default function routing($urlRouterProvider,
                                $locationProvider,
                                $stateProvider,
                                $logProvider) {
  $logProvider.debugEnabled(true);
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      views: {
        'header': {
          template: require('./features/header/header.html'),
          controller: 'HeaderController'
        }
      }
    });
}

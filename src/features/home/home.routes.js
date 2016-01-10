routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('root.home', {
      url: '/',
      views: {
        '@': {
          template: require('./home.html'),
          controller: 'HomeController',
          controllerAs: 'home'
        }
      }
    });
}

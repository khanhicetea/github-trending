// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.controller('MainCtrl', function($scope, $http) {
  $scope.getTrend = function(period_time) {
    $scope.repos = [];
    var apis = {
      "today": "8a2hkk30",
      "weekly": "d9kid3wm",
      "monthly": "4n9la21a"
    };
    // var endpoint = "https://www.kimonolabs.com/api/"; // for deploy app
    var endpoint = "/trending/"; // for dev
    var api_url = endpoint + apis[period_time] + "?apikey=9ZzRKEncudxix3mtEbtCrxWTwQRjsjO3&kimmodify=1";
    $http.get(api_url).then(function(resp) {
      $scope.repos = resp.data.results.trending_repos;
    }, function(err) {
      console.error('ERR', err);
    });
  }
  $scope.getTrend('today');
})
.directive('a', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            if ( !attrs.href ){
                return;
            }
            var externalRe = new RegExp("^(http|https)://");
            var url = attrs.href;

            if(externalRe.test(url)) {
                element.on('click',function(e){
                    e.preventDefault();
                    if(attrs.ngClick){
                        scope.$eval(attrs.ngClick);
                    }
                    window.open(encodeURI(url), '_system');
                });
            }
        }
    };
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

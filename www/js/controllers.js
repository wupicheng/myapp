angular.module('starter.controllers', [])
 .controller('InitCtrl', function($scope,$ionicModal,Users,$rootScope,$state) {



       $scope.dowork=function($state){
            $state.go('login');
        }

        //alert('aa');
        var a;
        $ionicModal.fromTemplateUrl("templates/my-modal.html", {
            scope: $scope,
            animation: "slide-in-up"
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
           a=  $scope.modal.show();
        };


        //openModal();
        $scope.create=function($scope){
          var user=new Users({
              username:'a'
          });

            console.log(a);
            user.$save(function(){  a.hide(); });


        };

        $scope.init=function(){
            alert("init");
        }


    })
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

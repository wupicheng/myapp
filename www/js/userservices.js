//angular.module('articles').factory('Articles', ['$resource',
angular.module('userservices',['ngResource']).factory('Users',
    function($resource) {
        return $resource('/api/users/list2');
    }

);


//    .factory('Users', function() {
//
//        return {
//            all: function() {
//                return chats;
//            },
//            remove: function(chat) {
//                chats.splice(chats.indexOf(chat), 1);
//            },
//            get: function(chatId) {
//                for (var i = 0; i < chats.length; i++) {
//                    if (chats[i].id === parseInt(chatId)) {
//                        return chats[i];
//                    }
//                }
//                return null;
//            }
//        };
//    });
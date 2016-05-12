var app = angular.module('app');

app.controller('mainCtrl', ['RestService',function(RestService) {

   this.codeMirrorOptions = {
       lineWrapping : true,
       lineNumbers: true,
       readOnly: false,
       mode: 'sql',
       value: "Shoot the next man in the freaky suit",
       allowEditingOriginals: true,
       matchBrackets: true,
       theme: 'dracula'
   }

    this.codemirrorLoaded = function(editor) {
        console.log("hey everyone!!")
        editor.setSize("100%", 450)
    }

    this.resultMode = true;

    this.submit = function() {
        RestService.submit()
    }


}]);


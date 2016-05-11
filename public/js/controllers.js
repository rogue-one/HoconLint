var app = angular.module('app');

app.controller('mainCtrl', function() {
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
});


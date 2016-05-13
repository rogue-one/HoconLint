var app = angular.module('app');

app.controller('mainCtrl', ['RestService', function (RestService) {

    var self = this;
    self.resultMode = false;
    self.finalMessage = "";
    self.success = false;
    self.bannerClass = null;

    self.codeMirrorOptions = {
        lineWrapping: true,
        lineNumbers: true,
        readOnly: false,
        mode: 'sql',
        allowEditingOriginals: true,
        matchBrackets: true,
        theme: 'dracula'
    };


    self.clearBoard = function() {
        self.payload = "";
    };


    self.codemirrorLoaded = function (editor) {
        editor.setSize("100%", 450)
    };

    self.submit = function () {
        console.log("submitting content");
        RestService.submit(this.payload)
            .then(function (result) {
                self.success = true;
                self.resultMode = true;
                self.payload = JSON.stringify(result.data, undefined, 2);
                self.finalMessage = "Valid HOCON";
                self.bannerClass = "result-success";
            }, function (error) {
                self.success = false;
                self.resultMode = true;
                self.finalMessage = error.data;
                self.bannerClass = "result-failure";
            });
    }


}]);


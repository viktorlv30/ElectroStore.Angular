app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            templateUrl: "../app/main.htm"
        })
        .when("/profile", {
            templateUrl: "../app/features/profile/profile.htm",
//            controller: "profileCtrl"
        })
        .when("/header", {
            templateUrl: "../app/features/header/header.htm",
//            controller: "headerCtrl"
        })
        .otherwise({ redirectTo: "/" });
});
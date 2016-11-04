app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            templateUrl: "app/main.htm"
        })
        .when("/profile", {
            templateUrl: "app/views/enterIntoDash.htm",
            controller: "dashboardCtrlVitya"
        })
        .otherwise({ redirectTo: "/" });
});
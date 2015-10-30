# angular-promise-button

Promise button directive for AngularJS.

## Installation

bower install angular-promise-button --save

## Usage

Inject module into you app:

angular.module('YourAwesomeApp', ['promiseButton']);

Use it at a directive:

``` html
<button type="button" class="btn btn-success" promise-button pb-click="click(args)" pb-completed="isCompleted">Click</button>
```

Then, simply set the $scope.isCompleted to true or false, e.g.

``` javascript
$http.post('/api/login', params).then(
    function(data) {
        $scope.isCompleted = true;
      	// do something
    })
);
```


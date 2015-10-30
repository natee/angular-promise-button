# angular-promise-button

Promise button directive for AngularJS.

You can use it to avoid duplicate clicks on a button.

## Installation

...

## Usage

Inject module into you app:

``` javascript
angular.module('YourAwesomeApp', ['promiseButton']);
```

Use it at a directive:

``` html
<button type="button" class="btn btn-success" promise-button pb-click="click(args)" pb-completed="isCompleted">Click</button>
```

Then, simply set the `$scope.isCompleted` to `true` or `false`, e.g.

``` javascript
$http.post('/api/login', params).then(
    function(data) {
        $scope.isCompleted = true;
      	// do something
    })
);
```

## Note

Button disabled style depends on the 'disabledClass'  , you can change it by yourself in source code, write your own css to beautify it.
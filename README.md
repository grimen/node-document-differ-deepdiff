# NODE-DOCUMENT-DIFFER-DEEPDIFF [![Build Status](https://secure.travis-ci.org/grimen/node-document-differ-deepdiff.png)](http://travis-ci.org/grimen/node-document-differ-deepdiff)

**Differ** adapter [deep-diff](https://github.com/flitbit/diff) for [node-document](https://github.com/grimen/node-document) ODM for Node.js.


## Installation

```shell
  $ npm install node-document-differ-deepdiff
```


## Usage

**Basic:**

```javascript
  var Differ = require('node-document-differ-deepdiff');

  var differ = new Differ();

  var a = {foo: 1, bar: "baz"},
      b = {foo: 2, baz: "qux"};

  differ.diff(a, b, function(err, diff, identical) {
    console.log("Equal: %s  \nDiff:\n", identical, diff);
  });
```

For details; see [node-document](https://github.com/grimen/node-document).


## Test

**Local tests:**

```shell
  $ make test
```


## License

Released under the MIT license.

Copyright (c) [Jonas Grimfelt](http://github.com/grimen)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/grimen/node-document-differ-deepdiff/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


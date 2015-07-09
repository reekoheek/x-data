(function(root) {
  var Cursor = root.XData.Cursor = function(collection) {
    if (!(this instanceof Cursor)) {
      return new Cursor.apply(null, arguments);
    }

    Object.defineProperties(this, {

      collection: {
        value: collection,
        enumerable: false,
        writable: false,
        configurable: false,
      },

      criteria: {
        value: null,
        enumerable: true,
        writable: true,
        configurable: true,
      },

      _skip: {
        value: 0,
        enumerable: true,
        writable: true,
        configurable: true,
      },

      _limit: {
        value: -1,
        enumerable: true,
        writable: true,
        configurable: true,
      }

    });

  };

  Cursor.prototype.limit = function(limit) {
    if (arguments.length) {
      this._limit = limit;
      return this;
    } else {
      return this._limit;
    }
  };

  Cursor.prototype.skip = function(skip) {
    if (arguments.length) {
      this._skip = skip;
      return this;
    } else {
      return this._skip;
    }
  };

  Cursor.prototype.fetch = function() {
    return XData.get(this.collection.adapter)
        .fetch(this);
  };
})(this);
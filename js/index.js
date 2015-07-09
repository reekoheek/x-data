(function(root) {
  'use strict';

  var adapterProto = {
    fetch: function() {
      throw new Error('Adapter "' + this.name + '" does not implement fetch method yet');
    }
  };

  var XData = root.XData = {
    adapters: {},

    get: function(name) {
      if (this.adapters[name]) {
        return this.adapters[name];
      }

      throw new Error('Adapter "' + name + '" not found');
    },

    set: function(name, adapter) {
      adapter.name = name;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(adapter, adapterProto);
      } else {
        adapter.__proto__ = adapterProto;
      }
      this.adapters[name] = adapter;
    },
  };
})(this);
(function(global) {

  <private variable>

  var instance = function() {
    return new <Object name>();
  };

  instance.prototype = {
    <function name>: function() {

    },...
  function <Object name>() {
    <public variable>
  }
  <Object name>.prototype = instance.prototype
  global.<Object name> = instance;

}(window));

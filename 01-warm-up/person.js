(function(global) {

  var instance = function(firstname, lastname) {
    return new Person(firstname, lastname);
  };

  instance.prototype =  {
    fullName: function() {
      return this.firstname + ' ' + this.lastname;
    }
  };

  function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  Person.prototype = instance.prototype
  global.Person = instance;

}(window));

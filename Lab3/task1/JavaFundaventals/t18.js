function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
//Using OR || (the shortest variant):
  
  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

  function min(a, b) {
    return a < b ? a : b;
  }
// //defines button which is a reference to #btn. pound sign used since button has an id instead of class
// const button = document.querySelector('#btn');

// //syntax:: object.onclick = () => {myScript}
// button.addEventListener('click', () => {
//     alert("Hello World")
// });


// //different method
// alertFunction = () => {
//     alert("Yay you did it~")
// }
// button.onclick = alertFunction;

// //different method
// button.addEventListener('click', alertFunction)


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
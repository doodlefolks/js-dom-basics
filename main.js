console.log('sanity check!');
var firstParagraph = document.getElementById('main');
console.log(firstParagraph);
var getUlElements = document.getElementsByTagName('ul');
console.log(getUlElements);
var getUlElement = document.getElementsByTagName('ul')[0];
console.log(getUlElement);
var allListItems = document.getElementsByTagName('li');
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}
var main = document.querySelector('#main');
console.log(main);
for (var i = 0; i < allListItems.length; i++) {
    allListItems[i].innerText = `Hi, ${i}`;
}
var newLi = document.createElement('li');
newLi.innerText = 'OMG new LI!';
getUlElement.appendChild(newLi);

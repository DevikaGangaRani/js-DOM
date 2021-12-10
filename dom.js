//examine the document object//
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// selectors

//get elementby id
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

//GETELEMENTBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[1].textContent = 'hello 2';
// items[1].style.backgroundColor = 'yellow';
// // gives error
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[1].textContent = 'hello 2';
// li[1].style.backgroundColor = 'yellow';
// // gives error
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #444';

// var input = document.querySelector('input');
// input.value = 'HEllo World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var Items = document.querySelector('.list-group-item');
// Items.style.color = 'red';

// var lastItems = document.querySelector('.list-group-item:last-child');
// lastItems.style.color = 'blue';

// var secondItems = document.querySelector('.list-group-item:nth-child(2)');
// secondItems.style.color = 'coral';

//QUERYSELECTORALL//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'HELLO';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM
// var itemList = document.querySelector('#items');
// parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// // parentElement;
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// child nodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstchild
// console.log(itemList.firstChild);

// // firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello1';

// lastchild
// console.log(itemList.lastChild);

// // lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello4';

//siblings
// console.log(itemList.nextSibling);

// nextelement sibling
// console.log(itemList.nextElementSibling);

// previous sibling
// console.log(itemList.previousSibling);

// previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//create element

// create a div
// var newDiv = document.createElement('div');
// // add class
// newDiv.className = 'HELLO';
// // add id
// newDiv.id = 'HELLO!';
// // add attribute
// newDiv.setAttribute('title', 'HELLO DIV');

// // create textnode
// var newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// EVENTS

// var button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// function buttonClick(e) {
//   //   console.log('button clicked');
//   //   document.getElementById('header-title').textContent = 'Changed';
//   //   document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   //   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
//   var output = document.getElementById('output');
//   output.innerHTML = '<h3>' + e.target.id + '</h3>';
//   console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);

//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }
// var button = document.getElementById('button');
// var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log('EVENT TYPE:' + e.type);

// console.log(e.target.value);
// document.body.style.display = 'none';

// console.log(e.target.value);
// document.getElementById('output').innerHTML =
//   '<h3>' + e.target.value + '</h3>';

// output.innerHTML =
//   '<h3>MouseX:' + e.offsetX + '</h3><h3>MouseY:' + e.offsetY + '</h3>';
// }

// 4th video

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');
// // form submit event
// form.addEventListener('submit', addItem);

// // del event
// itemList.addEventListener('click', removeItem);
// filter.addEventListener('keyup', filterItems);

// //Add item
// function addItem(e) {
//   e.preventDefault();
//   //  get input value
//   var newItem = document.getElementById('item').value;

//   // create new li element
//   var li = document.createElement('li');
//   //Add class
//   li.className = 'list-group-item';
//   // add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // create del button
//   var deleteBtn = document.createElement('button');

//   // add  classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // append text node
//   deleteBtn.appendChild(document.createTextNode('X'));
//   // add button ti li
//   li.appendChild(deleteBtn);
//   // append li to list
//   itemList.appendChild(li);
// }

// // remove item
// function removeItem(e) {
//   if (e.target.classList.contains('delete')) {
//     if (confirm('Are You Sure?')) {
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // filter items
// function filterItems(e) {
//   // convert text to lower case
//   var text = e.target.value.toLowerCase();
// }

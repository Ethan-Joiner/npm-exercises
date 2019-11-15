

import $ from 'jquery';
// const {item, thing} = require('./practice.js');
import cart from './practice'
// import {sayHello} from './say-hello.js'
$('body').html('What').css('color', 'red');
const $ = require('jquery');
const req = require('./say-hello.js');
// console.log(item.color);
// console.log(thing.color);
// console.log(sayHello());
req();
console.log(cart.item.color);
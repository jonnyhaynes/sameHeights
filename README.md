# sameHeights

[![Build Status](https://travis-ci.org/jonnyhaynes/sameheights.svg?branch=master)](https://travis-ci.org/jonnyhaynes/sameheifghts) [![Code Climate](https://codeclimate.com/github/jonnyhaynes/sameHeights/badges/gpa.svg)](https://codeclimate.com/github/jonnyhaynes/sameHeights) [![npm](https://img.shields.io/npm/v/sameheights.svg)](https://www.npmjs.com/package/sameheights) [![Bower](https://img.shields.io/bower/v/sameheights.svg)](https://github.com/jonnyhaynes/sameheights) [![Dependency Status](https://david-dm.org/jonnyhaynes/sameheights.svg)](https://david-dm.org/jonnyhaynes/sameheights) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jonnyhaynes/sameheights?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Usage

Add the following code to your project for each set of elements you want to have an equal height. 

```javascript
sameHeights.addItems('your_element_class');
```

**N.B.** It'll only mathc the height for that particular set even if you call it multiple times. e.g.

```javascript
sameHeights.addItems('your_element_class_one'); 
sameHeights.addItems('your_element_class_two'); 
```

## Bower

If you're using Bower to manage your front-end dependencies you can include this plugin as a component. Include "sameheights": "1.0.0" in your bower.json file and run `bower install`.

## NPM
If you're using NPM to manage your dependencies you can include this plugin as a module. Just run `npm install sameheights`.

## Browser support

* Internet Explorer 10+
* Firefox 10+
* Chrome 9+
* Safari 5.1+
* Opera 12.1+

## Changelog

* 10/07/15: 1.0.0 – First major release: registered as a Bower plugin; registered as an Node package.

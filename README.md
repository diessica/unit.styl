# unit.styl [![npm version](https://badge.fury.io/js/unit-styl.svg)](http://badge.fury.io/js/unit-styl)
> ...makes it easy to convert relative and absolute units. Use the unit of your choice and don't worry about it.


## install

Just clone this project, or download it via [npm](http://npmjs.com).

```sh
$ npm install unit-styl
```
> `--save` or `--save-dev` flags are recommended.

---

#### JavaScript API
```javascript
var stylus = require('stylus'),
    unit   = require('unit-styl');

function compile(str) {
  return stylus(str)
    .use(unit());
}
```

#### Stylus API
```stylus
@import 'unit'
```

You can also import individual parts:
```stylus
@import 'unit/_angle'
@import 'unit/_length'
@import 'unit/_resolution'
@import 'unit/_time'
```

#### The *just-use-it* way
```stylus
@import 'node_modules/unit-styl/unit'
```
> Check whether the `node_modules` path is correct.

## documentation
#### → relative ⇔ absolute
Relative units can be absolute and absolute units can be relative! :-)

> A context is **required**  for relative units (`rem`, `%`). Only conversions between `px` ⇔ `pt` don't require context.

###### EXAMPLE 1 (no context needed)
```css
.foo {
  width:     pt(500px);       /*  width: 375pt; */
  height:    px(12pt);        /*  height: 16px;  */
}  
```

###### EXAMPLE 2
```css
context = 100%;

.foo {
  width:     rem(960px);      /*  width: 60rem;   */
  height:    pct(3pt);        /*  height: 25%;     */
  font-size: px(1rem);        /*  font-size: 16px; */
}  
```

###### EXAMPLE 3

```css
context = 62.5%;

.foo {
   width:     px(8rem)        /*  width: 80px;  */
   height:    rem(10px)       /*  height: 1rem;  */
   font-size: pct(5px)        /*  font-size: 50%; */
}
```
**Tip**: You can do fallbacks for IE to `rem` unit printing the results in pixels too, e.g. `px(1.5rem)`

--

#### → angles: `deg` ⇔ `rad` ⇔ `turn` ⇔ `grad`

###### EXAMPLE 1
```css
transform: rotateY(deg(0.5turn));         /* transform: rotateY(180deg) */
```

###### EXAMPLE 2
```css
transform: rotateX(rad(200grad));         /* transform: rotateX(3.14rad); */
```

--

#### → time: `ms` ⇔ `s`

###### EXAMPLE 1
```css
transition-duration: millisec(1s);         /* transition-duration: 500ms */
```

###### EXAMPLE 2
```css
transition-duration: sec(5000ms);          /* transition-duration: 0.5s; */
```
> `sec()` takes a second parameter: `leadingzero`, an optional boolean - `true` by default. If `false`, leading zero is omitted.

```css
transition-duration: sec(5000ms, false);   /* transition-duration: .5s; */
```

---

###### LICENSE

[MIT](http://diessica.mit-license.org/) © [Diéssica Gurskas](http://diessi.ca)

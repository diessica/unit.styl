# unit.styl
> ...makes it easy to convert relative and absolute units. Use the unit of your choice and don't worry about it. 

1. **Clone**: `git clone https://github.com/diessicode/unit.styl.git`
2. **Import**. Example: `@import "lib/unit.styl"`

You want something in particular? Raw: [**`dimension.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/dimension.styl) | [**`angle.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/angle.styl) | [**`time.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/time.styl) | [**`resolution.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/resolution.styl).

## samples
#### → relative ⇔ absolute
With **unit.styl**, relative units can be absolute and absolute units can be relative! :-)

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
  width:     rem(960px);      /*  height: 60rem;   */ 
  height:    pct(3pt);        /*  height: 25%;     */ 
  font-size: px(1rem);        /*  font-size: 16px; */
}  
```

###### EXAMPLE 3 

```css
context = 62.5%;

.foo {
   width:     px(8rem)        /*  width: 128px;  */
   height:    rem(16px)       /*  height: 1rem;  */
   font-size: pct(5px)        /*  font-size: 80; */
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
> `sec()` takes a second parameter: `leadingzero`, a optional boolean - `true` by default. If `false`, leading zero is omitted.

```css
transition-duration: sec(5000ms, false);   /* transition-duration: .5s; */
```

-----------
Licensed under **[MIT](http://opensource.org/licenses/MIT)**.

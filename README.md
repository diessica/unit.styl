# unit.styl
> Conversions of relative or absolute units - such as units of length (**px**, **rem**), angles (**rad**, **turn**), resolution (**dpi**, **dpcm**), time (**ms**, **s**) - made easy. 

--
1. **Clone**: `git clone https://github.com/diessicode/stylus-unit.git`
2. **Import**. Example: `@import "lib/unit.styl"`

Do you want **specific libs**? Raw: [**`dimension.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/dimension.styl) | [**`angle.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/angle.styl) | [**`time.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/time.styl) | [**`resolution.styl`**](https://raw.github.com/diessicode/stylus-unit/master/lib/resolution.styl).

## samples
#### ⇒ absolute or relative? whatever!
Converting absolute units: 
```css
.foo { height: px(12pt) }  /* height: 16px; */ 
```

Converting relative units: 

> A context is **required**  for relative units. Assuming that `context = 100%` (16px, by default): 

```css
.foo {
   width: px(8rem)        /* width: 128px; */
   font-size: px(50%)     /* font-size: 8px; */
}
```

> Assuming that `context = 62.5%` (10px):

```css
.foo {
   width: px(20rem)      /* width: 200px;  */
   font-size: px(1rem)   /* font-size: 10px; */
}
```

#### ⇒ angle
```css
.bar {
   transform: rotateY(deg(0.5turn)) rotateX(rad(200grad)); 
/* transform: rotateY(180deg)       rotateX(3.14rad); */
}
```

#### ⇒ time
```css
.foo {
   transition-duration: sec(5000ms, true); /* transition-duration: .5s; */
}
```

```css
.bar {
   transition-duration: millisec(1s);      /* transition-duration: 500ms */
}
```

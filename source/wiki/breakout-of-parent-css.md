<steelsky>
{
  "title":"Breaking Out of Parent Element with CSS",
  "description":"How to get out of a parent element with CSS.",
  "tags":"#programming #css #front-end"
}
</steelsky>
# Breaking Out of Parent Element with CSS

## Introduction
Often times when developing CSS for a WordPress child theme or just when working with someone elses stylesheets in general, it can be desirable to "breakout" of the parent element and draw a full width element that stretches the entire width of the page.

This can be achieved with the following code:

## HTML
```
<div class='parent'>
	<div class='break-out'>
		Breakout Content
	</div>
</div>
```
## CSS
```css
.parent{
  max-width:50vw;
  margin:0 auto;
}
/*The Actual Magic*/
.break-out { margin: 0 calc(50% - 50vw) }
```

If you're dealing with some particularly stubborn CSS you might need to do something like this:
```css
.break-out { 
  margin: 0 calc(50% - 50vw)!important;
  max-width:100vw!important; 
}
```
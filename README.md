# simple-responsive-table
Simple responsive table will take a standard HTML table and make it collapse to a single column with the table header content inline with the table cell content.

It uses javascript to grab the content of the `<th>` cell and add it as a `data-attribute` to the `<td>` cells which will allow the css to place it inline with the table cell content.

check out the demo https://jamcgrath.github.io/simple-responsive-table/

## How to use

 To use this simply copy the css and javascript files to your project and link to them in the appropriately way.

### The usual way to link to the files

First link to the css file in the header
```HTML
 <link rel="stylesheet" href="path-to-css/simple-responsive-table.css">
```

Then Link to the javascript file before the closing body tag

```HTML
<script src="path-to-js /simple-responsive-table.min.js" ></script>
```

Next add a class of responsive-table to you table tag and choose your desired breakpoint for when the table should change format from mobile to desktop on line 20 of the css `simple-responsive-table.css` file.

```HTML
  <table class="responsive-table">
```
```css
  @media (min-width: 500px) /*500px = default */
```

Finally in your javascript file or where ever you are writing your javascript call the simpleResponsiveTable() function with an argument targeting a selector on the table.

```javascript
  simpleResponsiveTable("responsive-table");
```

Make sure to change the breakpoint in the .css file
Check out the demo to see it in action.

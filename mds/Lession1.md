**Lesson 1: Typography**

### 1. Line Height

What it is: Vertical space between lines of text.
CSS: line-height
Example:

```css
p {
  line-height: 1.6;
}
```


### 2. Letter Spacing

What it is: Space between individual characters.
CSS: letter-spacing
Example:

```css
h1 {
  letter-spacing: 2px;
}
```


### 3. Word Spacing

What it is: Space between words.
CSS: word-spacing
Example:

```css
p {
  word-spacing: 5px;
}
```


```css
p {
  word-spacing: 5px;
}
```


### 4. Word Break

What it is: Controls how/if words break when reaching the end of a line.
CSS: word-break
Values:

normal

break-word

break-all

```css
p {
  word-break: break-word;
}
```



### 5. Line Clamp

What it is: Limits the number of lines in a block of text and hides the rest.

CSS (with webkit):

```css
.clamp-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```


### 6. Paragraph Spacing

What it is: Space between paragraphs.
Usually handled by: margin-bottom on <p> tags.
Example:

```css
p {
  margin-bottom: 1em;
}

```

### 7. Font Weight

What it is: Thickness of characters.
CSS: font-weight
Values:

normal (400)
bold (700)
Numeric: 100–900
Example:

```css
h1 {
  font-weight: 700;
}
```


### 8. Font Size

What it is: Size of the text.
CSS: font-size
Units: px, em, rem, %
Example:

```css
p {
  font-size: 16px;
}
```


### 9. Font Face

What it is: The specific font file you load on the web.
Use: @font-face to load a custom font.
Example:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('MyCustomFont.woff2') format('woff2');
}
```


### 10. Font Family

What it is: Defines the font stack.
CSS: font-family
Example:

```css
body {
  font-family: 'Arial', sans-serif;
}
```

### 11. Uppercase

What it is: Converts all letters to capital letters.
CSS: text-transform: uppercase;
Example:

```css
h2 {
  text-transform: uppercase;
}

```

### 12. Lowercase

What it is: Converts all letters to lowercase.
CSS:

 ```css
 text-transform: lowercase;
 ```



### 13. Capitalize

What it is: Makes the first letter of each word uppercase.
CSS: 
```css
text-transform: capitalize;
```


### 14. Underline

What it is: Adds a line below the text.
CSS:

```css
text-decoration: underline;
```







### 15. Overline

What it is: Adds a line above the text.
CSS: 

```css
text-decoration: overline;
```


### 16. Strikethrough

What it is: Adds a line through the middle of text.
CSS: 

```css

text-decoration: line-through;
```



### 17. Bold

What it is: Makes text heavier or thicker.
CSS: 

```css
font-weight: bold;
```


### 18. Italic

What it is: Slants the text to the right.
CSS: 

```css
font-style: italic;
```


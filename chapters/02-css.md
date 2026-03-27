# CSS – Basics

## Goal

In this lesson, you will learn how to style elements on your boat rental service page, and how to implement simple layours using CSS.
You will learn to:

- Link a CSS file to an HTML document
- arget and style HTML elements using different CSS selectors
- Understand CSS specificity and how styles are applied
- Use common CSS properties (color, margin, padding, font, border)
- Create flexible column layouts using Flexbox
- Center and align elements using Flexbox properties

## What is CSS?

**CSS (Cascading Style Sheets)** is the language used to style and layout web pages. While HTML provides the structure and content of a page, CSS controls how that content looks and is arranged.

CSS lets you:

- Change colors, fonts, and sizes
- Add spacing and borders
- Create layouts and position elements
- Make your pages responsive and visually appealing

Think of HTML as the bones of your webpage, and CSS as the skin, clothing, and style!

---

### 1. CSS Selectors & Specificity

**How to target elements for styling:**

- Element/tag name (e.g., `li`, `div`, `p`)
- Classes (e.g., `.nav-item`)
- IDs (e.g., `#header`)

**CSS Specificity Ranking:**
`tag > class > id > !important`

The more specific the selector, the higher priority it has. If two selectors have the same level of specificity the one stated last in line order will be applied.

### 2. Essential CSS Properties

- **Color & Font** - styling text appearance
- **Margin** - space _outside_ an element
- **Padding** - space _inside_ an element
- **Border** - outline around an element

**Pro tip:** When debugging styles, add a bright colored border (like pink!) to see exactly what element you're targeting.

### 3. Flexbox Layout

Flexbox makes creating responsive layouts much easier than old methods!

**Key Container (Parent) Properties:**

- `display: flex` - turns on flexbox
- `flex-direction` - arrange items in rows or columns (row/column)
- `justify-content` - align items along the _main axis_ (center, space-between, flex-start, flex-end)
- `align-items` - align items along the _cross axis_ (center, flex-start, flex-end, stretch)

**Key Item (Child) Properties:**

- `align-self` - override parent's align-items for a specific element

**Important:** The main and cross axes change depending on flex-direction:

- **Row direction:** main axis = horizontal, cross axis = vertical
- **Column direction:** main axis = vertical, cross axis = horizontal

---

## Helpful Resources

### CSS Selectors

- [CSS Tricks - CSS Selectors Reference](https://css-tricks.com/css-selectors/)

### CSS Properties

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) - Complete property documentation we can target with CSS

### Flexbox Cheat Sheet

- [CSS Tricks - Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## Quick Reference

**Linking CSS to HTML:**

```html
<link rel="stylesheet" href="style.css" />
```

### Basic CSS Syntax

```css
selector {
	property: value;
}
```

### Basic Flexbox Setup:

```css
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

---

## Exercise 1: Practice CSS Selector specificity with

- [CSS Diner](https://flukeout.github.io/) - Interactive game to practice selectors (no need to reach the last level)

---

## Exercise 2: Practice Flexbox with

- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game to practice flexbox (no need to reach the final level)

---

## Exercise 3: Implement a column layout by centering your rental boat website's content

Create a centered column layout for your boat rental page. Think about whether your HTML page currently has a wrapping element that could function as the parent flex container. Alternatively, consider introducing a wrapping `<div>` with the class `flex-container` and style that.

**Your goal:** Center your content in a column layout.

1. **Choose your flex container**
   - You can use the `body` element as your flex container
   - OR wrap your content in a `<div class="flex-container">` if you prefer

2. **Apply flexbox properties**
   - Set `display: flex` on your container
   - Use `flex-direction: column` to stack content vertically
   - Use `align-items: center` to center content horizontally (remember: this works on the cross axis!)

### Hints for centering:

- To add horizontal margins left and right of your body, and through that center the body itself, you can use: `margin: auto 20vw;`
  - The first value (`auto`) centers vertically
  - The second value (`20vw`) adds space on left and right sides
- `vw` stands for "viewport width" - `20vw` means 20% of the viewport width

### Challenge yourself:

- Experiment with different background colors
- Try adjusting the margin values (what happens with `margin: auto 30vw;`?)
- Add styling to other elements like `h1`, `h2`, `li`, or `td`
- Can you add padding inside your container?

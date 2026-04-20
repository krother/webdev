# HTML – Introduction

## Goal

In this lesson, you will create a HTML page for a boat rental service from scratch.
You will learn to:

- write the basic structural elements of an HTML file
- distinguish between HTML tags, text content, and HTML attributes
- structure a web page into logical areas
- write HTML tags for paragraphs, rules, blocks, and special characters
- add lists and tables
- embed images in your page

## What is HTML?

HTML stands for HyperText Markup Language. It is the language in which most web pages are written in. The current specification of the HTML standard is version 5 (HTML5), published in 2008 and released in revised form in 2014.

HTML is a **markup** language. It describes **what** content the page contains, not **how** it should look like.

Every HTML page consists of tags, that define content elements. There are three variants for writing tags:

| Variant | Example |
|---|---|
| `<tag>` (opening) | `<p>`, `<table>` |
| `</tag>` (closing) | `</p>`, `</table>` |
| `<tag/>` (opening and closing in one) | `<br>`, `<hr>` |

As a general rule, if an opening tag exists, a corresponding closing tag also exists. Capitalisation does not affect the correctness of a tag.

The web browser interprets these tags and renders the web page from them. The interpretation and actual display in the browser depends on:

- the browser's implementation (how it was programmed)
- browser support – not all tags are supported by all browsers; largely uniform today due to standardisation
- the style used (mostly in an extra file called CSS)
- the output device – web browser, tablet, smartphone, printer

Tags may be nested inside each other. Indenting nested levels is not required but improves the readability of HTML code.

**Example without indentation (table with header row):**

```html
<table>
<tr><th>Dock</th><th>Boat</th></tr>
<tr><td>3</td><td>Rowboat</td></tr>
<tr><td>7</td><td>Kayak</td></tr>
</table>
```

---

## Exercise 1: Install Tools

An HTML file is a text file. You edit it with a text editor.
In this course, you will use **Visual Studio Code**.

Download and install it from [code.visualstudio.com/download](https://code.visualstudio.com/download).

Assuming you have a browser, this is really all you need for now.

#### Warning:

Do not use Windows Notepad under any circumstances for writing code.

---

## Exercise 2: Plan a Business Website

A boat rental company wants to present its fleet on a website.
Which of the following components are essential for such a website? Which are nice-to-have?
Go through the list below and prioritize them

- Contact form
- Public transport timetable
- Frequently asked questions about rentals (FAQ)
- Opening hours of the rental office
- Booking page
- Landing page with encouraging flavor image
- Chat forum for users
- Forum for local development
- Available boats
- AI chatbot
- Prices and terms and conditions
- Imprint / legal terms
- Accepted payment methods
- Map with address/location

---

## Exercise 3: Write a HTML File

Create a new file in VS Code and store it as `index.html` in a new folder `boat_rental/`. Put the following content in the file:

```html
<html>
<p>Harbour Boat Rental</p>
</html>
```

Save the file and open it in your web browser.

Add the language declaration to the first line:

```html
<html lang="en">
```

---

## Exercise 3: Main Elements of an HTML File

An HTML file is divided into two fundamental areas:

- `doctype` – document type declaration, here: HTML. It helps the browser identify what kind of file it is dealing with.
- `html` – the start of the page description

The `html` area is itself divided into two areas:

- `head` – metadata about the HTML file (mostly invisible)
- `body` – the actual content of the HTML file (visible part of the page)


Add a doctype, head and body section to your page, containing:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>...</title>
  </head>
  <body>
    ...
  </body>
</html>
```

---


## Exercise 4: Filling the HTML Head

Add some metadata to the HTML file:

- a title of your choice
- a description text
- the character set UTF-8

```html
    <meta charset="utf-8">
    <meta name="description" content="...">
```

---

## Exercise 5: Structuring a Page

Starting from the result of Exercise 4, structure the body section into:

- a header (`<header>`) containing today's date and a horizontal rule at the bottom
- a main area (`<main>`) with the existing content
- a section (`<section>`) to divide the main area into smaller portions
- a footer (`<footer>`) containing a horizontal rule at the top and a copyright notice

Inside these sections, use the following tags:

- `<h1>` for a toplevel heading
- `<p>` for a text paragraph
- `<hr>` for a horizontal divider
- `&copy;` for the HTML special character for the copyright symbol
- `&nbsp;` for a non-breaking space (compare to a regular space)

---

## Exercise 6: Designing Navigation

You are responsible for maintaining the boat rental website. Add a navigation structure like:

```html
<nav>
<ul>Contact</ul>
<ul>Prices</ul>
<ul>Our Boats</ul>
</nav>
```

Add your own elements to the structure.

---

## Exercise 7: Headings

Add short descriptions for different types of boats.
Try out the following tags:

- `<h1>..<h6>` for different headings
- `<em>` for italic/emphasized text
- `<strong>` for bold text

---

## Exercise 8: Lists

Add a list of boats that are currently under repair:

```html
  <ul>
    <li>Fishing boat "Sea Breeze"</li>
    <li>Speed boat "Blue Arrow"</li>
  </ul>
```

Replace the `ul` by `ol` or `dl` and see what changes.

## Exercose 9: Tables

Add a table with available boats. Use the following columns:

- Time slot (start and end of the rental)
- Boat name
- Capacity (number of persons)
- Dock number

Here is a basic structure. Find out what each of the tags does:

```html
<table>
  <thead>
    <tr>
      <th>Time slot</th>
      <th>Boat name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00-11:00</td>
      <td>Lucky Duck</td>
    </tr>
  </tbody>
</table>
```

---

## Exercise 10: Embedding an Image

The page needs images of boats! Find some boat images on [unsplash.com](https://unsplash.com) or generate some using the AI tool of your own choice.

An image tag looks like this:

```html
  <img src="myboat.png" width="200px" alt="my first boat">
```

Note the following:

- The image file needs to be in the same folder as the HTML page
- The image tag can be anywhere in your `<body>` including lists and tables
- Choose the image width in pixels
- Add an `alt` attribute with a meaningful description.

----

## Exercise 11: Hyperlinks

The `<a href="...">` tag allows you to build links. You can use it in three different ways:

Create a **link to an external page** by placing the URL of a web page in the `href` part, e.g.:

```html
<a href="https://www.academis.eu">Kristians homepage</a>
```

A **link to a page on the same website** is – for now – simply the name of a different HTML document in the same folder:

```html
<a href="contact.html">Contact Us</a>
```

An **internal link** jumps to a different place in the same document, identified by an `id` attribute:

```html
<a href="#boats">Our Boats</a>

...

<section id="boats">
```

Add a few hyperlinks to your page.

----

## Exercise 12: Checking HTML

You can check your HTML file for syntactic correctness using a **linter**, for example the W3C Markup Validation Service: [validator.w3.org/](https://validator.w3.org/)


## Further Reading

You find a list of available tags with explanations on [www.w3schools.com/html/](https://www.w3schools.com/html/)


## Review Questions

#### What ways do you know to check how HTML is rendered on your output device?

Option 1 is to use different web browsers on different devices. Option 2 is to use the developer tools built into modern browsers, where you can switch the display between desktop and tablet/smartphone views.
### Review Questions

#### How do HTML and programming languages differ from each other?

HTML is a markup language. HTML tags are read, interpreted, and rendered by the web browser. Programming languages involve a translation process into processor instructions (CPU instructions).

#### What is an HTML attribute and how is it written?

An HTML attribute follows the form `name="value"` and is separated from the HTML tag by a space. A value is optional.

#### Why is an HTML file divided into head and body?

The HTML head contains metadata about the document. The body contains the actual content of the HTML file.

#### What is the purpose of the description in an HTML file?

The browser displays this information in its preview, making it easier to identify the page.

#### How does the browser display an HTML file if the character set is not specified in the header?

The browser guesses the character set, falling back on values from the current environment if available.

#### Which HTML tags for logical page structure do you know?

These include `<HEADER>`, `<FOOTER>`, `<NAV>`, `<MAIN>`, `<SECTION>` and `<H1>` through `<H6>`.

#### Where is a consistent website design useful?

Visitors can orient themselves more easily and find what they are looking for faster.

#### A user wants to place the navigation at the bottom of the page. Do you agree?

No. Navigation is easier to use when placed at the top of the page. That content loads first and is immediately visible.

#### Under what label do you place the responsible person for a website?

Typically this goes under an imprint page (legal notice) and a contact form.

#### What is the difference in display between `<TH>` and `<TD>`?

`<TH>` (table header) renders content centred and in bold; `<TD>` renders without any default formatting.

#### When is it useful to display data in a table?

A table is appropriate when there are more than two records. Otherwise a simple list in the text may suffice.

#### What types of lists exist?

HTML supports unordered lists (`<UL>`), ordered lists (`<OL>`), and description lists (`<DL>`).

#### What happens if the referenced image cannot be loaded?

Depending on the browser, a small broken image icon appears to indicate the problem.

#### How should the `alt` attribute description be written to be accessible?

The description should clearly convey what is shown in the image.

#### Which tools read the `alt` attribute description?

Screen readers, text-based browsers, and search engines all use it.

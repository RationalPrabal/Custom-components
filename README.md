# Block v/s Inline Elements

In HTML, block elements and inline elements are two types of HTML elements that behave differently in terms of their display, layout, and behavior on the web page.

## Block Elements:

1.Block elements create a block of content that takes up the full width of its parent container by default. They create a line break before and after the element.
2.Block elements can have child elements inside them.

Examples of block elements include div, p, h1 to h6, ul, ol, li, table, form, etc.

## Inline Elements:

1.Inline elements do not create a line break before or after the element. They only take up as much space as necessary to display their content.
2.Inline elements cannot have block-level elements inside them but can have other inline elements.

Examples of inline elements include a, span, img, strong, em, label, input, button, etc.



# Pseudo-elements v/s pseudo-classes

Pseudo-elements and pseudo-classes are special selectors in CSS that allow you to style specific parts of an HTML document based on certain conditions, states, or positions. Here are some examples of pseudo-elements and pseudo-classes in CSS:

## Pseudo-elements:
A CSS pseudo-element is used to style specified parts of an element.

Syntax-->
The syntax of pseudo-elements-
selector::pseudo-element {
  property: value;
}

Example -->
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}

some Pseudo-elements-->
::before - Inserts content before the content of an element
::after - Inserts content after the content of an element
::first-letter - Selects the first letter of a block-level element
::first-line - Selects the first line of a block-level element
::selection - Selects the portion of an element that is selected by the user


## Pseudo-classes:

A pseudo-class is used to define a special state of an element.

For example, it can be used to-->
Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

Syntax
The syntax of pseudo-classes-->

selector:pseudo-class {
  property: value;
}
some Pseudo-classes-->
:hover - Applies styles when an element is hovered over by the mouse
:active - Applies styles when an element is being clicked or activated
:focus - Applies styles when an element has focus, such as when it is selected by the keyboard or by tabbing through the page
:nth-child - Selects elements based on their position in a parent container
:checked - Selects radio buttons or checkboxes that are currently checked

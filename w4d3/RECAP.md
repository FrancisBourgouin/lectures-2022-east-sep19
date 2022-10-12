# Wrapping code inside document ready

```js
$(document).ready(() => {
  // ...
});

$(() => {
  // ...
});
```

# Function + Event Listener

```js
const eventHandler = (event) => {
  // ...
};

$("button").click(eventHandler);
```

# Function + Event Listener to add a new element to the DOM (JS can add content to DOM)

## "Bad-ish" way of doing it : Text

```js
const createPictureElementNotSafe = (imageId, imageDescription) => {
  $("section").append(`
    <article>
    <div style="background-image:url(/images/${imageId}.jpg)"></div>
    
    <p>${imageDescription}</p>
    </article>
    `);

  $("section article:last-of-type").on("click", doSomething);
};
```

## "Good" way of doing it : By creating an element and appending content to it

```js
const createPictureElement = (imageId, imageDescription) => {
  const $article = $("<article>");
  const $imageDiv = $("<div>");
  const $description = $("<p>");

  $imageDiv.css("background-image", `url(/images/${imageId}.jpg)`);
  $description.text(imageDescription);
  $description.on("click", doSomething);

  $article.append($imageDiv);
  if (imageDescription) {
    $article.append($description);
  }

  $("section").append($article);
};
```

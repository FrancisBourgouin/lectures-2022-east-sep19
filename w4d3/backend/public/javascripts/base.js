$(document).ready(() => {
  $("header p").text("AHHHHHH YEAAHHHH.");

  // $("form button").on("click", (event) => {
  //   event.preventDefault();
  // });

  // document.querySelector()

  const createPictureElementSad = (imageId, imageDescription) => {
    $("section").append(`
    <article>
    <img src="/images/${imageId}.jpg" alt="" />
    <p>${imageDescription}</p>
  </article>
    `);
  };
  const createPictureElementNotSafe = (imageId, imageDescription) => {
    $("section").append(`
    <article>
    <div style="background-image:url(/images/${imageId}.jpg)"></div>
    
    <p>${imageDescription}</p>
    </article>
    `);
  };
  const createPictureElement = (imageId, imageDescription) => {
    const $article = $("<article>");
    const $imageDiv = $("<div>");
    const $description = $("<p>");

    $imageDiv.css("background-image", `url(/images/${imageId}.jpg)`);
    $description.text(imageDescription);

    $article.append($imageDiv);
    if (imageDescription) {
      $article.append($description);
    }

    $("section").append($article);
  };
  const appendAllPictures = (images) => {
    for (const imageId in images) {
      const { id, description } = images[imageId];
      createPictureElement(id, description);
    }
  };

  const fetchAllPictures = () => {
    $("section").empty();
    $.ajax({ url: "/api/images", method: "GET" })
      .then((res) => appendAllPictures(res))
      .catch((err) => console.log(err));
  };

  const fetchSomePictures = (amount) => {
    $("section").empty();
    $.ajax({ url: `/api/images?amount=${amount}`, method: "GET" })
      .then((res) => appendAllPictures(res))
      .catch((err) => console.log(err));
  };

  const fetchOnePicture = (id) => {
    $.ajax({ url: `/api/images/${id}`, method: "GET" })
      .then((res) => createPictureElement(id, res.description))
      .catch((err) => console.log(err));
  };

  // fetchAllPictures();
  $("form").on("submit", (event) => {
    event.preventDefault();
    const form = $(event.target);
    const amountInput = form.find("input[name='amount']");
    const amount = amountInput.val();

    // console.log();
    fetchSomePictures(amount);
  });

  $("main > button").on("click", () => {
    const howManyImages = $("section article").length;
    console.log(howManyImages);

    fetchOnePicture(howManyImages + 1);
  });
});

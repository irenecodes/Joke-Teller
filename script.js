var button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Get Jokes from Jokes API
async function getJokes() {
  let joke = "";
  const apiUrl = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      // sets up the two-liners
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    // Text-to-speech
    tellMe(joke);
    // Disable button
    toggleButton();
  } catch (error) {
    //Catch Errors Here
    console.log("error:", error);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);

audioElement.addEventListener("ended", toggleButton);

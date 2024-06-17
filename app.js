async function generate() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    document.querySelector("p").innerText = "A D V I S E # " +data.slip.id;
    document.querySelector("h2").innerText = '"' + data.slip.advice + '"';
  }
  document.querySelector('button').onclick = () => {
    generate();
  }
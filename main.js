async function myfunction(){
    const data = await fetch("https://fakestoreapi.com/products");
    const dataCards = await data.json();
    console.log(dataCards);

    let cards = "";
 dataCards.forEach((item) => {
    cards +=  `
    <img src = ${item.image}>
    <h1>${item.title}</h1>
    <h3>${item.description}</h3>
    <h5>${item.price}</h5>
   `
 });
 document.querySelector(".div").innerHTML = cards;
};
myfunction();

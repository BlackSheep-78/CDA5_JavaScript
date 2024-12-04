class MemoryGame 
{

  constructor(images, blank) 
  {
    this.container    = null;     // main game DIV
    this.images       = images;   // starting images for later reshuffle
    this.currentCards = [];       // the current 1 or 2 selected cards
    this.cards        = []        // card collection already shuffle
    this.wrongPair    = false;    // clause that will trigger hiding the 2 displyed cards
    this.counter      = 0;        // counts the number of tries
    this.points       = 0;        // counter the number of correct cards 
    this.victory      = false;    // clause to define if victory is achieved

    this.shuffleCards();
  }

  build(div) 
  {

    this.container = div; // storing the game element in memory for later reuse, on the next game
    this.container.innerHTML = "";  // removing all cards after a victory
    document.getElementById("output").innerHTML = ""; // removing output message

    // creating elements to display all cards
    for(let i = 0; i < this.cards.length; i++)
    {
      let card = this.cards[i];
      let newDiv = document.createElement("div");
      newDiv.innerHTML = "<img src='images/blank.png' onclick='game.click(this," + i + ")'>";
      this.container.appendChild(newDiv);
    }
  }

  shuffleCards()
  {
    let images   = this.images;
    let tmpCards = [];
    let cards    = [];
    let nCards   = images.length * 2;
    
    // duplicating all cards as we need pairs 
    for(let i = 0; i < images.length; i++) 
    { 
      tmpCards.push({"src":images[i]});
      tmpCards.push({"src":images[i]});
    }

    // picking cards by random index, one by one
    for(let i = 0; i < nCards; i++) 
    {
      let n    = Math.floor(Math.random() * (tmpCards.length)) 
      let card = tmpCards.splice(n,1);
      cards.push(card[0]);
    }

    this.cards = cards;
  }

  // click event on each card
  click(element,index)
  {

    // if victory was achieved, we'll reset the game
    if(this.victory)
    {
      this.currentCards = [];
      this.cards        = []; 
      this.wrongPair    = false;
      this.counter      = 0;
      this.points       = 0;
      this.victory      = false;

      this.shuffleCards();
      this.build(this.container);

      return;
    }

    // check if clicked card as been alredy picked at the right position
    let locked = this.cards[index].locked;

    // if card is good, we do not count as a new trie
    if(!locked){ this.counter += 1; }
    
    // if we detect 2 wrong cards turned, we'll hide them again
    if(this.wrongPair)
    {
      this.cards[this.currentCards[0].index].element.src = "images/blank.png";
      this.cards[this.currentCards[1].index].element.src = "images/blank.png";
      this.currentCards = [];
      this.wrongPair    = false;
    }

    // storing html element for clicked carda for later use 
    this.cards[index].element = element;
    this.cards[index].element.src = "images/"+this.cards[index].src;
    this.cards[index].index = index;

    // card was nor previous correctly selected, it will be added to currenct card selection array. 
    if(!locked){ this.currentCards.push(this.cards[index]); };
    
    // if list list of selected cards reaches 2 cards 
    if(this.currentCards.length == 2)
    {
      // if selected cards are the same
      if(this.currentCards[0].src == this.currentCards[1].src)
      {
        this.cards[this.currentCards[0].index].locked = true;
        this.cards[this.currentCards[1].index].locked = true;

        this.points += 2;

        this.currentCards = [];
      }
      else
      {
        this.wrongPair = true;
      }
    }

    // testing if max points are reached, in other words, if game is won
    if(this.points == this.cards.length)
    {
      alert("GAME OVER !!");
      this.victory = true;
    }

    this.update();

  }

  update()
  {
    // updating output
    let output = document.getElementById("output");
    let message = "";

    if(this.victory)
    {
      message = "you have won with <b> " +  this.counter + " </b> tries";
    }
    else
    {
      message = "you have played<b> " +  this.counter + " </b>times";
    }
    
    output.innerHTML = message;
  }

}

// original shuffle function NOT IN USE
const shuffleCards = function(length) 
{
  let cards = [];

  for(let i = 0; i < length; i++) 
  {
    cards.push(i);
    cards.push(i);
  }

  return cards;
};

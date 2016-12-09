/*var myList = [];
window.onload = loadCookieList;

function addItem()
{
  var input = document.getElementById("newItem").value;
  displayItem(input);
}

function displayItem(input)
{
  if(myList.indexOf(input) == -1)
  {
    myList.push(input);
    console.log(myList);
    var list = document.getElementById("listDisplay");
    var item = document.createElement("li");
    var btnClose = document.createElement("button");
    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");
    var iconClose = document.createElement("span");
    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");
    var itemName = document.createTextNode(input);
    item.appendChild(itemName);
    btnClose.appendChild(iconClose);
    btnClose.addEventListener("click", removeParentListItem);
    item.appendChild(btnClose);
    list.appendChild(item);
  }
  document.getElementById("newItem").value = "";
}

function removeParentListItem()
{
  var mom = this.parentNode;
  itemRemove = mom.firstChild.textContent;
  itemIndex = myList.indexOf(itemRemove);
  myList.splice(itemIndex, 1);
  console.log(myList);
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
}

function saveList()
{
  var listString = myList.toString();
  setCookie("list", listString, 7);
}

function loadCookieList()
{
  var list = getCookie("list");
  var arrayCookie = [];
  arrayCookie = list.split(",");
  for(var i = 0; i < arrayCookie.length; i++)
  {
    displayItem(arrayCookie[i]);
  }
}

function clearList()
{
  var list = document.getElementById("listDisplay");
  var length = document.getElementById("listDisplay").childNodes.length;
  for(var i = length - 1; i >= 0; i--)
  {
    list.removeChild(list.childNodes[i]);
  }
  myList = [];
}
*/
var guessWord = [];
var fullWord;
var wrongGuesses = 0;
window.onload = processWord;

function processWord()
{
  setupWindow();
  fullWord = getCookie("word");
  console.log(fullWord);
  if(fullWord.length == 0)
  {
    fullWord = "word";
  }
  fullWord = fullWord.toLowerCase();
  for(var i = 0; i < fullWord.length; i++)
  {
    var c = fullWord.substring(i, i + 1);
    if(c >= "a" && c <= "z")
    {
      guessWord[i] = "_";
    }
    else if(c == " ")
    {
      guessWord[i] = "&nbsp;"
    }
    else
    {
      guessWord[i] = c;
    }
  }
  updateWord();
}

function setupWindow()
{
  document.getElementById("wordInput").value = "";
  document.getElementById("a").disabled = false;
  document.getElementById("b").disabled = false;
  document.getElementById("c").disabled = false;
  document.getElementById("d").disabled = false;
  document.getElementById("e").disabled = false;
  document.getElementById("f").disabled = false;
  document.getElementById("g").disabled = false;
  document.getElementById("h").disabled = false;
  document.getElementById("i").disabled = false;
  document.getElementById("j").disabled = false;
  document.getElementById("k").disabled = false;
  document.getElementById("l").disabled = false;
  document.getElementById("m").disabled = false;
  document.getElementById("n").disabled = false;
  document.getElementById("p").disabled = false;
  document.getElementById("q").disabled = false;
  document.getElementById("r").disabled = false;
  document.getElementById("s").disabled = false;
  document.getElementById("t").disabled = false;
  document.getElementById("u").disabled = false;
  document.getElementById("v").disabled = false;
  document.getElementById("w").disabled = false;
  document.getElementById("x").disabled = false;
  document.getElementById("y").disabled = false;
  document.getElementById("z").disabled = false;
  document.getElementById("string").disabled = false;
  document.getElementById("result").innerHTML = "";
}

function updateWord()
{
  var s = "";
  var t = "";
  for(var i = 0; i < guessWord.length; i++)
  {
    s = s + guessWord[i] + " ";
    t = t + guessWord[i];
  }
  if(t == fullWord && wrongGuesses < 6)
  {
    youWin();
  }
  document.getElementById("wordReveal").innerHTML = s;
}

function guess(userGuess)
{
  if(userGuess == "string")
  {
    userGuess = document.getElementById("wordInput").value;
    document.getElementById("wordInput").value = "";
    userGuess = userGuess.toLowerCase();
    if(userGuess == fullWord)
    {
      for(var i = 0; i < guessWord.length; i++)
      {
        var c = fullWord.substring(i, i + 1);
        guessWord[i] = c;
      }
    }
    else
    {
      wrongGuesses++;
    }
  }
  else
  {
    var correct = 0;
    for(var i = 0; i < guessWord.length; i++)
    {
      var c = fullWord.substring(i, i + 1);
      if(userGuess == c)
      {
        guessWord[i] = c;
        correct = 1;
      }
    }
    if(correct == 0)
    {
      wrongGuesses++;
    }
    document.getElementById(userGuess).disabled = true;
  }
  updateWrong();
  updateWord();
}

function updateWrong()
{
  switch(wrongGuesses)
  {
    case 0:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman0.gif";
      document.getElementById("image").alt = "0 Incorrect";
      break;
    case 1:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman1.gif";
      document.getElementById("image").alt = "1 Incorrect";
      break;
    case 2:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman2.gif";
      document.getElementById("image").alt = "2 Incorrect";
      break;
    case 3:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman3.gif";
      document.getElementById("image").alt = "3 Incorrect";
      break;
    case 4:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman4.gif";
      document.getElementById("image").alt = "4 Incorrect";
      break;
    case 5:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman5.gif";
      document.getElementById("image").alt = "5 Incorrect";
      break;
    case 6:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman6.gif";
      document.getElementById("image").alt = "6 Incorrect";
      youLose();
      break;
    default:
      document.getElementById("image").src = "http://www.passporttoenglish.com/Beginning-English/Lesson2/hangman6.gif";
      document.getElementById("image").alt = "" + wrongGuesses + " Incorrect";
  }
}

function youLose()
{
  document.getElementById("a").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;
  document.getElementById("e").disabled = true;
  document.getElementById("f").disabled = true;
  document.getElementById("g").disabled = true;
  document.getElementById("h").disabled = true;
  document.getElementById("i").disabled = true;
  document.getElementById("j").disabled = true;
  document.getElementById("k").disabled = true;
  document.getElementById("l").disabled = true;
  document.getElementById("m").disabled = true;
  document.getElementById("n").disabled = true;
  document.getElementById("o").disabled = true;
  document.getElementById("p").disabled = true;
  document.getElementById("q").disabled = true;
  document.getElementById("r").disabled = true;
  document.getElementById("s").disabled = true;
  document.getElementById("t").disabled = true;
  document.getElementById("u").disabled = true;
  document.getElementById("v").disabled = true;
  document.getElementById("w").disabled = true;
  document.getElementById("x").disabled = true;
  document.getElementById("y").disabled = true;
  document.getElementById("z").disabled = true;
  document.getElementById("string").disabled = true;
  document.getElementById("result").innerHTML = "You Lose.";
  for(var i = 0; i < guessWord.length; i++)
  {
    var c = fullWord.substring(i, i + 1);
    guessWord[i] = c;
  }
  updateWord();
}

function youWin()
{
  document.getElementById("a").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;
  document.getElementById("e").disabled = true;
  document.getElementById("f").disabled = true;
  document.getElementById("g").disabled = true;
  document.getElementById("h").disabled = true;
  document.getElementById("i").disabled = true;
  document.getElementById("j").disabled = true;
  document.getElementById("k").disabled = true;
  document.getElementById("l").disabled = true;
  document.getElementById("m").disabled = true;
  document.getElementById("n").disabled = true;
  document.getElementById("o").disabled = true;
  document.getElementById("p").disabled = true;
  document.getElementById("q").disabled = true;
  document.getElementById("r").disabled = true;
  document.getElementById("s").disabled = true;
  document.getElementById("t").disabled = true;
  document.getElementById("u").disabled = true;
  document.getElementById("v").disabled = true;
  document.getElementById("w").disabled = true;
  document.getElementById("x").disabled = true;
  document.getElementById("y").disabled = true;
  document.getElementById("z").disabled = true;
  document.getElementById("string").disabled = true;
  document.getElementById("result").innerHTML = "YOU WIN!!!!";
}

function useWord()
{
  var input = document.getElementById("wordInput").value;
  document.getElementById("wordInput").value = "";
  setCookie("word", input, 31);
  window.location = "hangman.html";
}

function randWord()
{
  var wordBank =
    ["odd", "zoo", "alive", "curl", "felt", "gain", "dawn", "dear", "gold",
    "path", "safe", "roof", "aunt", "self", "tuna", "few", "zero", "world",
    "wait", "uncle", "visit", "cheer", "jaw", "paper", "sharp", "sink", "twice",
    "middle", "paste", "animal", "chicken", "banana", "earth", "fever",
    "follow", "crow", "giant", "degree", "useful", "zebra", "cottage", "couch",
    "evening", "crumb", "decide", "camera", "garden", "false", "gasoline",
    "fruit", "beautiful", "copying", "cancel", "newscast", "fleece", "select",
    "slumber", "usual", "remind", "pour", "graceful", "pioneer", "alert",
    "chimney", "continue", "urge", "striving", "stretch", "noise", "terrible",
    "voyage", "surprise", "twenty", "amount", "avenue", "beggar", "forecast",
    "vacation", "libraries", "sneezing", "machine", "neighbor", "weekend",
    "laughter", "shoulder", "quarter", "equal", "wheelchair", "actively",
    "discover", "vulture", "mountain", "scariest", "impossible", "government",
    "consistent", "recommend", "whistling", "doubtful", "guitar"];
  var randNum = Math.floor((Math.random() * 100) + 1) - 1;
  var randomWord = wordBank[randNum];
  setCookie("word", randomWord, 31);
  document.getElementById("wordInput").value = "";
  window.location = "hangman.html";
}

function goBack()
{
  window.location = "index.html";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

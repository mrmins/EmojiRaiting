# EmojiRaiting
EmojiRating is an open source library to use rate using emoticons.

# How to use it?
First one, you require Jquery.

# Examples of usage.
First one, you require Jquery.

Your HTML file:

Import the emoji.js file to your html.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="emoji.js"></script>
```

Add a div, to render you emoji control.

```
<div id="emoji-div"></div>
```

That's is all you need to render your emojis.

Now, we would use jQuery to init the the emojirating plugin (also you might use javascript).

```
$("#emoji-div").emoji();
```

And, that's all!!!

Now, you have a control like this: https://imgur.com/a/iFjFQ

<img src="https://i.imgur.com/khAYcYh.png" />

# Customization

Do you want to use your custom emojis? Call them by their names:
```
var emojis = ['poop','unlike', 'like', 'star', 'inlove'];
$("#emoji-div").emoji({emojis: emojis });

```
<img src='https://i.imgur.com/tvomIYe.png' />

Do you want to set 1 emoticon and repeat it?
```
var emojis = ['angry']; //array of emojis.

$("#emoji-div").emoji({
    emojis: emojis  //In case you want to define your own list of emojis
    count: 7, //VERY OPTIONAL - In case you want set 1 emoji in the array and display N number of them.
});
```

Do you want to call them using unicode characters?
```
var emojis = ['&#x1F620;','&#x1F61E;','&#x1F610;','&#x1F60A;','&#x1F603;', '&#9760;'];
$("#emoji-div").emoji({emojis: emojis });
```

<img src="https://i.imgur.com/nWgSd21.png" />


Full configuration.
```
$("#emoji-div").emoji({
    opacity: 0.5, //Opacity for no selected value. [The value should be between 0 and 1 (like 0.5)]
    val: 4,  //Selected value
    width: '35px',  //With of each emoji.
    event: 'click',  //Event "click" or "mouseover".
    emojis: emojis  //In case you want to define your own list of emojis
    count: 7, //VERY OPTIONAL - In case you want set 1 emoji in the array and display N number of them.
});
```

# Events
Enable emoji control: `$("#emoji-div").emoji("enable");`

Disable emoji control: `$("#emoji-div").emoji("disable");`

Get emoji control value: `$("#emoji-div").emoji("getvalue");`

Set emoji control value: `$("#emoji-div").emoji("setvalue", 5);`

Emtoticons
😞 `&#x1F61E;` Happy

😐 `&#x1F610;` Meh

😊 `&#x1F60A;` Happy

😃 `&#x1F603;` Smile

😆 &#x1F606;` Laughing

😍 `&#x1F60D;` Inlove

❤ `&#x2764;` Heart

😢 `&#x1F622;` Crying

⭐ `&#x2B50;` Star

💩 `&#x1F4A9;` Poop

😺 `&#x1F63A;` Cat

👍 `&#x1F44D;` Like

👎 `&#x1F44E;` Dislike

Not enough? Check a list, try this UTF-8 emoji list: https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp

# Considerations.
This plugin is under construction, now, it accepts "id", but in a close future, we going to accept multiple initializations with classes.

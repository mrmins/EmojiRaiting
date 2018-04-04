<meta name='keywords' content='emoji, rating, rate, ratings, emojis, emoji rating, rate with emojis, emoji rates, emotion, emojicon, javascript, plugin, jquery, jquery rate, javascript rate, library'>


# EmojiRaiting
EmojiRating is an open source library to use rate using emoticons.

# How to use it?
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
var emojis = ['inlove']; //array of emojis.

$("#emoji-div").emoji({
    emojis: emojis  //In case you want to define your own list of emojis
    val: 6,
    count: 8, //VERY OPTIONAL - In case you want set 1 emoji in the array and display N number of them.
});
```
<img src='https://i.imgur.com/svelH28.png' />

Do you want to call them using unicode characters?
```
var emojis = ['&#x1F620;','&#x1F61E;','&#x1F610;','&#x1F60A;','&#x1F603;', '&#9760;'];
$("#emoji-div").emoji({emojis: emojis });
```

<img src="https://i.imgur.com/nWgSd21.png" />

Do you want to combine emoticions names and unicode characters?

```
var emojis = ['skull','happy','cloud','&#x1F60A;','&#x1F603;', '&#9760;'];
$("#emoji-div").emoji({emojis: emojis });
```

Do you want your emojis bigger?

```
var emojis = ['skull','happy','cloud','&#x1F60A;','&#x1F603;', '&#9760;'];
$("#emoji-div").emoji({emojis: emojis, width: '50px' });
```

Do you want to set an initial value?
```
$("#emoji-div").emoji({ val: 4 });
```

Full configuration.
```
$("#emoji-div").emoji({
    opacity: 0.5, //Opacity for no-selected emojis. [The value should be between 0 and 1 (like 0.5)]
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


# Pre-defined emtoticons
If you want to use a predefined emoticionm is enoght to write into your custom emoji array, the name of the emoticion.

angry  `&#x1F620;` &#x1F620;

disappointed  `&#x1F61E;`  &#x1F61E;

meh  `&#x1F610;`  &#x1F610;

happy  `&#x1F60A;` &#x1F60A;

smile  `&#x1F603;` &#x1F603;

wink  `&#x1F609;` &#x1F609;

laughing  `&#x1F606;` &#x1F606;

inlove  `&#x1F60D;` &#x1F60D;

crying  `&#x1F622;` &#x1F622;

star  `&#x2B50;` &#x2B50;

poop  `&#x1F4A9;` &#x1F4A9;

cat  `&#x1F63A;` &#x1F63A;

like  `&#x1F44D;` &#x1F44D;

unlike  `&#x1f44e;` &#x1f44e;

heart  `&#x2764` &#x2764

dislike  `&#x1F44E;` &#x1F44E;

cloud  `&#9729;` `&#9729;

blackstart  `&#9733;` &#9733; 

comet  `&#9732;` &#9732;

umbrella  `&#9748;` &#9748; 

skull  `&#9760;` &#9760; 

radioactive  `&#9762;` &#9762; 

biohazard  `&#9763;` &#9763;

aries  `&#9800;` &#9800; 

taurus  `&#9801;` &#9801; 

gemini  ` &#9802;` &#9802;

cancer  `&#9803;` &#9803; 

leo  `&#9804;` &#9804; 

virgo  `&#9805;` &#9805;

libra  `&#9806;` &#9806; 

scorpius  `&#9807;` &#9807;

sagittarius  `&#9808;` &#9808;

capricorn  `&#9809;` &#9809;

aquarius  `&#9810;` &#9810;

pisces  `&#9811;` &#9811;


Not enough? Check a list, try this UTF-8 emoji list: https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp

# Works for you? Invite me for a coffee

<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H5GC54Y7QGN5A'>
<img src='https://www.dokuwiki.org/lib/exe/fetch.php?tok=d9fa04&media=https%3A%2F%2Fraw.githubusercontent.com%2Ftschinz%2Fdokuwiki_paypal_plugin%2Fmaster%2Flogo.jpg' />
</a>


# Considerations.
This plugin is under construction, now, it accepts "id", but in a close future, we going to accept multiple initializations with classes.
And, feel free to use this javascript library whatever you want, but, please, keep your codes open to the world.

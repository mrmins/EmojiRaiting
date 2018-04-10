<meta name='keywords' content='emoji, rating, rate, ratings, emojis, emoji rating, rate with emojis, emoji rates, emotion, emojicon, javascript, plugin, jquery, jquery rate, javascript rate, library'>


# EmojiRaiting
EmojiRating is an open source library to use rate using emoticons.
Use UTF-8 and Unicode characters to create amazing custom combinations.

# How to use it?
Import the `jquery` and `emoji.js` files to your html.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="emoji.js"></script>
<link rel="stylesheet" type="text/css" href="csshake.min.css">
```

Add a `div`, to render your emoji control.

```
<div id="emoji-div"></div>
```

That's all you need to render your emojis.

Now, we have to use jQuery to initialize the the `EmojiRating` plugin.

```
$("#emoji-div").emoji();
```
You can invoke it from a method, or from your `onLoad` for `javascript` or `onReady` for `jQuery`

```
$(function() {
    $("#emoji-div").emoji();
});
```

And, that's all!!!

Now, you have a control like this

<img src="https://i.imgur.com/khAYcYh.png" />

# Customization

**Do you want to use custom emojis?** Call them by their names:
```
var emojis = ['poop','unlike', 'like', 'star', 'inlove'];
$("#emoji-div").emoji({emojis: emojis });
```
<img src='https://i.imgur.com/tvomIYe.png' />

**Do you want to set 1 emoticon and repeat it N times?** That is possible with the `count` property
```
var emojis = ['inlove'];
$("#emoji-div").emoji({ emojis: emojis, count: 8 });
```
<img src='https://i.imgur.com/svelH28.png' />

**Do you want use unicode characters?** Do it!, it's possible
```
var emojis = ['&#x1F620;','&#x1F61E;','&#x1F610;','&#x1F60A;','&#x1F603;', '&#9760;'];
$("#emoji-div").emoji({emojis: emojis });
```

<img src="https://i.imgur.com/nWgSd21.png" />

**Do you want to combine emoticions names and unicode characters?** Feel free to do it!

```
var emojis = ['skull','happy','cloud','&#x1F60A;','&#x1F603;', '&#9760;'];
$("#emoji-div").emoji({emojis: emojis });
```
<img src ='https://i.imgur.com/CqcCv4d.png' />

**Do you want your emojis bigger?**

```
$("#emoji-div").emoji({ width: '50px' }); //Using pixels
$("#emoji-div").emoji({ width: '50em' }); //Using em
$("#emoji-div").emoji({ width: 50 }); //As number
```

**Do you want to set an initial value?**
```
$("#emoji-div").emoji({ val: 4 });
```

**Do you want to set color to your emojis?**
1. Using the color name.
```
var emojis = ['heart'];
$("#emoji-div").emoji({ emojis:emojis, count: 8, color: 'red' });
```

2. Using the HexColor.
```
var emojis = ['heart'];
$("#emoji-div").emoji({ emojis: emojis, count: 8, color: '#123abc' });
```

3. Using the RGB value.
```
var emojis = ['heart'];
$("#emoji-div").emoji({ emojis: emojis, count: 8, color: 'rgb(255, 0, 0)' });
```

<img src='https://i.imgur.com/TRZ4kNU.png' />

**Do you want to use your own resources?** It's possible from external and internal resources (`.png`, `.jpg` and `.svg`)
```
var emojis = ['img/star.png', 'img/tree.svg', 'img/santa.svg', 'img/reindeer.png'];
$("#emoji-div").emoji({ emojis: emojis });
```
If the images are very small, you can make them bigger with: 
```
var emojis = ['img/star.png', 'img/tree.svg', 'img/santa.svg', 'img/reindeer.png'];
$("#emoji-div").emoji({ emojis: emojis, width: 50 });

```
<img src='https://i.imgur.com/ZLC1J9X.png' />

**Do you want to combine URL resources, emoji names and UTF-8 in a single rate control?** It's awesomely possible and simple.
```
var emojis = ['img/star.png', 'img/tree.svg', 'img/santa.svg', 'img/reindeer.png', '&#x1F63A;', 'skull', 'happy'];
$("#emoji-div").emoji({ emojis: emojis, width: 100 });
```
<img src='https://i.imgur.com/0bcUuEz.png' />

**Do you want to disabled your emoji interaction?**
```
$("#emoji-div").emoji({ disabled: true });
```

**Do you want to remove the `meta tag` to exclude UTF-8?**
```
$("#emoji-div").emoji({ UTF8: false });
```
By default, `EmojiRaiting` plugin add the meta tag: `<meta charset="utf-8" />` to your `DOM`, if you want omit it, set the `UTF8` key to `false`.

# Animations
For animations, `EmojiRaiting` plugins uses: <a href='https://github.com/elrumordelaluz/csshake'>@elrumordelaluz - CSShake</a>.

Add animations is very easy with:

```
$("#emoji-div").emoji({ width: 50, animation: 'shake-crazy' });
```

<img src='https://media.giphy.com/media/fteuVlf6BCIsOgVU36/giphy.gif' />

Some other options are: `shake`, `shake-slow`, `shake-hard`, `shake-horizontal`, `shake-vertical`, `shake-rotate`, `shake-opacity`, `shake-crazy`, `shake-chunk`


# Full plugin configuration example
```
$("#emoji-div").emoji({
    opacity: 0.5, //Opacity for no-selected emojis. [The value should be between 0 and 1 (like 0.5)]
    val: 4,  //Selected value
    width: '35px',  //With of each emoji.
    event: 'click',  //Event "click" or "mouseover".
    color: 'red', //Use color name (red, blue, black, etc.), HexColor (#abc123, #cecece, #b35c22) or RGB like rgb(255, 0, 0)
    emojis: emojis  //In case you want to define your own list of emojis
    count: 7, //VERY OPTIONAL - In case you want set 1 emoji in the array and display N number of them.
    animation: '', //shake, shake-slow, shake-hard, shake-horizontal, shake-vertical, shake-rotate, shake-opacity, shake-crazy, shake-chunk
    UTF8: true, //By default, the EmojiRaiting plugin insert the meta tag to your code.
    callback: myFunctionName, //Returns event and currentValue in the change event
    debug: false //Boolean value
});
```

# Events
Enable emoji control: `$("#emoji-div").emoji("enable");`

Disable emoji control: `$("#emoji-div").emoji("disable");`

Get emoji control value: `$("#emoji-div").emoji("getvalue");`

Set emoji control value: `$("#emoji-div").emoji("setvalue", 5);`

# Callbacks
Now, you can use the callback to identify the `onChange` event. The callback returns: 
1. The event that you're using.
2. The value after the `onChange` event.
```
$(function() {
    $("#emoji-div").emoji({callback: notifyMe });
});

function notifyMe(event, value){
    alert("Event: " + event + " - Current value: " + value);
}
```

Or, if you want to use the `mouseover` event:
```
$(function() {
    $("#emoji-div").emoji({callback: notifyMe, event: 'mouseover' });
});

function notifyMe(event, value){
    alert("Event: " + event + " - Current value: " + value);
}
```
<img src='https://i.imgur.com/z6rodyu.png' />

# Pre-defined emtoticons
If you want to use a predefined emoticion is enough to add into your custom emoji array, the name of the emoticion.

For example: 
```
var emojis = ['angry','men','happy'];
```

Check the complete list included in the pluging.

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

# Debug
If you want to debug, you have to set the `debug` key to `true`:

```
$(function() {
    $("#emoji-div").emoji({ value: 7, debug: true, event: 'hover', animation: 'chake' });
});
```

For example, for this wrong configuration, we have the default number of emojis (5), and the selected value is higher to the number of emoji elements, also, the event was configured as `hover` instead of `mouseover` or `click`.
Then, in your browser console, you going to get:

<img src='https://i.imgur.com/34OSaKL.png' />


# Works for you? Invite me for coffee

<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H5GC54Y7QGN5A'>
<img src='https://www.dokuwiki.org/lib/exe/fetch.php?tok=d9fa04&media=https%3A%2F%2Fraw.githubusercontent.com%2Ftschinz%2Fdokuwiki_paypal_plugin%2Fmaster%2Flogo.jpg' />
</a>

# Do you want some improves?
Feel free to write issues or new actions you want to get in this pluging.

**Features for version 0.7**
1. Animation for maximization of the selected item.

**Features for version 0.8**
1. Display all the emoticons while you haven't selected anyone. Contraction once you select one (like a horizontal accordion).

**Features for version 0.9**
1. Emoji with custom message in a popup box in a generic position.

**Features for version 1.0**
1. Double state. From the dark side to the light side. Depending of the rate, emoticons should be displayed. If you have a bad rate, all the emoticons are sad, right?, but if you get a good reputation, some of them should are jealous, right?


# Considerations.
This plugin is under construction, now, it accepts "id", but in a close future, we going to accept multiple initializations with classes.

For animations, `EmojiRaiting` plugins uses: <a href='https://github.com/elrumordelaluz/csshake'>@elrumordelaluz - CSShake</a>.

Feel free to use this javascript library whatever you want, but, please, keep your codes open to the world.

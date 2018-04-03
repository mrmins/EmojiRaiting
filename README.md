# EmojiRaiting
EmojiRating is an open source library to use rate using emoticons.

# How to use it?
First one, you require Jquery.

# Examples of usage.
First one, you require Jquery.

Your HTML file:

`<div id="emoji-div"></div>`

That's is all you need to render your emojis.

Now, we would use jQuery to init the the `emojirating` plugin (also you might use javascript).

`
$("#emoji-div").emoji();
`

And, that's all!!!

Now, you have a control like this:
https://imgur.com/a/iFjFQ

# Configuration

```
var emojis = ['&#x1F620;']; //array of emojis.

$("#emoji-div").emoji({`
    opacity: 0.5, //Opacity for no selected value.
    val: 4,  //Selected value
    width: '35px',  //With of each emoji.
    event: 'click',  //Event "click" or "mouseover".
    count: 7, //In case you want set 1 emoji in the array and display N number of them.
    emojis: emojis  //In case you want to define your own list of emojis
});
                        
```

#Events

Enable emoji control: `$("#emoji-div").emoji("enable");`
Disable emoji control: `$("#emoji-div").emoji("disable");`
Get emoji control value: `$("#emoji-div").emoji("getvalue");`
Set emoji control value: `$("#emoji-div").emoji("setvalue", 5);`


/**
 *********************************
 * Emotions Rating -Mrmins *
 *********************************
 * Emoji Rating
 * Version: 0.0.6
 * URL: https://github.com/mrmmins/EmojiRaiting
 * Description: Javascript plugin rate using emoticons.
 * Requires: >= 1.9
 * Author: MrMins
 * License: GNU General Public License v3.0
 */

;(function($) {
  if( !window.jQuery ){
    console.error('Jquery wanst loaded in your project.');
    return;
  }
  $('head').append('<meta charset="utf-8" />');

  var emojiConfiguration ={
    opacity: 0.3,
    value: 3,
    width: '20px',
    emojis: ['&#x1F620;','&#x1F61E;','&#x1F610;','&#x1F60A;','&#x1F603;'],
    event: 'click',
    disabled: false,
    count: 0,
    color: '',
    animation: '', //shake, shake-slow, shake-hard, shake-horizontal, shake-vertical, shake-rotate, shake-opacity, shake-crazy, shake-chunk
    debug: false,

  };
  var configuration;

  $.fn.emoji = function(options, value) {
    if( options != undefined && !isJson(options) ){
      options = options.toLowerCase();
      if (options == 'disabled' || options == 'disable') {
        configuration.disabled = true;
      }else if (options == 'enabled' || options == 'enable') {
        configuration.disabled = false;
      } else if (options.toLowerCase()  == 'setvalue'){
        configuration.value = value;
        recreateEmojiTable(this, configuration, configuration.emojis, value);
      } else if (options.toLowerCase()  == 'getvalue'){
        return configuration.value;
      }
      return;
    }

    configuration = $.extend({}, emojiConfiguration, options);
    configuration.event = configuration.event.toLowerCase();

    if(configuration.emojis.length == 0 && configuration.debug){
      console.error('You have defined a empty emoji array.');
    }
    if(configuration.value > configuration.count && configuration.value > configuration.emojis.length && configuration.debug){
      console.error('The default value is higher to the number of elements in the array (or count property in case you have it defined).');
    }
    if(configuration.event != 'click' && configuration.event != 'mouseover' && configuration.event != ''){
      configuration.event = 'click';
      if(configuration.debug)
        console.warn('Wrong event name. Automatically overrode to "click" event.');
    }

    if(configuration.emojis.length == 0){
      return;
    }
    if(configuration.emojis.length != configuration.count) {
      var tempEmojiArray = [];
      var lastEmoji = '';
      var counter = (configuration.count == 0) ? configuration.emojis.length : configuration.count;
      for(var i=0; i<counter; i++){
        if( i < (configuration.emojis.length)){
          lastEmoji = findEmojiByName(configuration.emojis[i]);
          tempEmojiArray.push(lastEmoji);
        }else{
          lastEmoji = findEmojiByName(lastEmoji);
          tempEmojiArray.push(lastEmoji);
        }
      }
      configuration.emojis = tempEmojiArray;
    }

    configuration.animation = (configuration.animation == undefined || configuration == null) ? '' : configuration.animation.toLowerCase();
    if(animations.indexOf(configuration.animation) < 0){
      configuration.animation = '';
      if(configuration.debug)
        console.warn('Unrecognized animation name. Animation excluded from the configuration. Try with: ' + animations.join(', '));
    }


    var element = this;
    var value = configuration.value;
    this.each( function() {
      recreateEmojiTable(element, configuration, configuration.emojis, value);
    });

    $(element).delegate( '.emoji-table span', configuration.event, function(){
      if(configuration.disabled)
        return;
      var currentState = $(this).closest('table').html() ;
      recreateEmojiTable(element, configuration, configuration.emojis, $(this).attr('value'), function(currentValue){
        configuration.value = currentValue;
        if(configuration.callback != undefined){
          configuration.callback(configuration.event, configuration.value);
        }
      });

    });

    var style = $('<style>.emoji-table span:hover { cursor: pointer; }</style>');
    $('html > head').append(style);
  }

  function isJson(item) {
    item = typeof item !== 'string'
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === 'object' && item !== null) {
        return true;
    }

    return false;
  }

  function recreateEmojiTable(element, conf, emojis, value, callback) {
    var tds = '';
    $(element).empty();
    jQuery.each( emojis, function( i, val ) {
      if((value -1) < i){
        tds+='<td><span class="' + conf.animation + '" value="' + (i+1) + '" style="opacity: ' +  conf.opacity + '; font-size: ' + conf.width + '; color: ' + conf.color + '">' + val + '</span></td>';
      } else{
        tds+='<td><span class="' + conf.animation + '" value="' + (i+1) + '" style="font-size: ' +  conf.width + '; color: ' +  conf.color + '">' + val + '</span></td>';
      }
      $(element).html('<table class="emoji-table"><tbody><tr>' + tds + '</tr></tbody></table>');
    });
    $(element).attr('value', value);
    configuration.value = value;
    if(callback!= undefined){
      callback(value);
    }
  }

  var animations = ['shake', 'shake-slow', 'shake-hard', 'shake-horizontal', 'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy', 'shake-chunk'];

  var emotionsArray = {
    angry: '&#x1F620;',
    disappointed: '&#x1F61E;',
    meh: '&#x1F610;',
    happy: '&#x1F60A;',
    smile: '&#x1F603;',
    wink: '&#x1F609;',
    laughing: '&#x1F606;',
    inlove: '&#x1F60D;',
    crying: '&#x1F622;',
    star: '&#x2B50;',
    poop: '&#x1F4A9;',
    cat: '&#x1F63A;',
    like: '&#x1F44D;',
    unlike: '&#x1f44e;',
    heart: '&#x2764',
    dislike: '&#x1F44E;',
    cloud: '&#9729;',
    blackstart: '&#9733;',
    comet: '&#9732;',
    umbrella: '&#9748;',
    skull: '&#9760;',
    radioactive: '&#9762;',
    biohazard: '&#9763;',
    aries: '&#9800;',
    taurus: '&#9801;',
    gemini: ' &#9802;',
    cancer: '&#9803;',
    leo: '&#9804;',
    virgo: '&#9805;',
    libra: '&#9806;',
    scorpius: '&#9807;',
    sagittarius: '&#9808;',
    capricorn: '&#9809;',
    aquarius: '&#9810;',
    pisces: '&#9811;'
  };

  function findEmojiByName(emojiName) {
    emojiName = emojiName.toLowerCase();
    if( emotionsArray[emojiName] != null && emotionsArray[emojiName] != undefined ){
      return emotionsArray[emojiName];
    }
    return emojiName;
  }

}(jQuery));

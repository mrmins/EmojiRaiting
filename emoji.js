
/**
 *********************************
 * Emotions Rating - Mrmins *
 *********************************
 * Emoji Rating
 * Version: 0.0.1
 * URL: https://github.com/mrmmins/EmojiRaiting
 * Description: Javascript plugin rate using emoticons.
 * Requires: >= 1.9
 * Author: MrMins
 * License: GNU General Public License v3.0
 */

;(function($) {
  $('head').append('<meta charset="utf-8" />');

  var emojiConfiguration ={
    opacity: 0.3,
    val: 3,
    width: "20px",
    emojis: ['&#x1F620;','&#x1F61E;','&#x1F610;','&#x1F60A;','&#x1F603;'],
    event: 'click',
    disabled: false,
    count: 0
  };
  var configuration;

  $.fn.emoji = function(options, value) {
    if( options != undefined && !isJson(options) ){
      if (options == "disabled" || options == "disable") {
        configuration.disabled = true;
      }else if (options == "enabled" || options == "enable") {
        configuration.disabled = false;
      } else if (options.toLowerCase()  == "setvalue"){
        configuration.val = value;
        recreateEmojiTable(this, configuration, configuration.emojis, value);
      } else if (options.toLowerCase()  == "getvalue"){
        return configuration.val;
      }
      return;
    }
    configuration = $.extend(emojiConfiguration, options);

    if(configuration.emojis.length == 0){
      return;
    }
    if(configuration.count > 0 && configuration.emojis.length != configuration.count){
      var tempEmojiArray = [];
      var lastEmoji = '';
      for(var i=0; i<configuration.count; i++){
        if( i < (configuration.emojis.length)){
          lastEmoji = configuration.emojis[i];
          tempEmojiArray.push(configuration.emojis[i]);
        }else{
          tempEmojiArray.push(lastEmoji);
        }
      }
      configuration.emojis = tempEmojiArray;
    }

    var element = this;
    var value = configuration.val;
    this.each( function() {
      recreateEmojiTable(element, configuration, configuration.emojis, value);
    });

    $(element).delegate( ".emoji-table span", configuration.event, function(){
      if(configuration.disabled)
        return;
      var currentState = $(this).closest("table").html() ;
      recreateEmojiTable(element, configuration, configuration.emojis, $(this).attr('value'));
    });

    var style = $('<style>.emoji-table span:hover { cursor: pointer; }</style>');
    $('html > head').append(style);
  }

  function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
  }

  function recreateEmojiTable(element, conf, emojis, value) {
    var tds = '';
    $(element).empty();
    jQuery.each( emojis, function( i, val ) {
      if((value -1) < i){
        tds+='<td><span value="' + (i+1) + '" style="opacity: ' +  conf.opacity + '; font-size: ' + conf.width + '">' + val + '</span></td>';
      } else{
        tds+='<td><span value="' + (i+1) + '" style="font-size: ' +  conf.width + '">' + val + '</span></td>';
      }
      $(element).html('<table class="emoji-table"><tbody><tr>' + tds + '</tr></tbody></table>');
    });
    $(element).attr("value", value);
    configuration.val = value;
  }

}(jQuery));

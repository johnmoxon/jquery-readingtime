(function($) {
  $.fn.readingtime = function(options) {

    var settings = $.extend({
      wpm:    250,
      round:  'round',
    }, options);

    var words = ($.type(options) === 'number' ) ?
      options : $.trim(this.first().text()).split(/\s+/).length;

    console.log(words, "words");

    var eta = Math[settings.round](words/settings.wpm);
    console.log(eta, 'eta')
    return (eta < 1) ? 'Less than a minute' : eta + ' mins';
  };
}(jQuery));

(function($) {
  $.fn.readingtime = function(options) {

    var settings = $.extend({
      wpm:    250,
      round:  'round',
    }, options);

    var words = ($.type(options) === 'number' ) ?
      options : $.trim(this.first().text()).split(/\s+/).length;

    var eta = Math[settings.round](words/settings.wpm);
    return (eta < 1) ? 'Less than a minute' : eta + ' mins';
  };
}(jQuery));

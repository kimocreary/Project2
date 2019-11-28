//
// Counter
//

"use strict";

!(function(t) {
  (t.fn.countTo = function(e) {
    return (
      (e = e || {}),
      t(this).each(function() {
        var a = t.extend(
            {},
            t.fn.countTo.defaults,
            {
              from: t(this).data("from"),
              to: t(this).data("to"),
              speed: t(this).data("speed"),
              refreshInterval: t(this).data("refresh-interval"),
              decimals: t(this).data("decimals")
            },
            e
          ),
          n = Math.ceil(a.speed / a.refreshInterval),
          o = (a.to - a.from) / n,
          r = this,
          l = t(this),
          f = 0,
          i = a.from,
          c = l.data("countTo") || {};

        function s(t) {
          var e = a.formatter.call(r, t, a);
          l.text(e);
        }
        l.data("countTo", c),
        c.interval && clearInterval(c.interval),
        (c.interval = setInterval(function() {
          f++,
          s((i += o)),
          "function" === typeof a.onUpdate && a.onUpdate.call(r, i);
          f >= n &&
              (l.removeData("countTo"),
              clearInterval(c.interval),
              (i = a.to),
              "function" === typeof a.onComplete && a.onComplete.call(r, i));
        }, a.refreshInterval)),
        s(i);
      })
    );
  }),
  (t.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: function(t, e) {
      return t.toFixed(e.decimals);
    },
    onUpdate: null,
    onComplete: null
  });
})(jQuery);

var Counter = (function() {
  // Variables

  var counter = ".counter",
    $counter = $(counter);

  // Methods

  function init($this) {
    inView(counter).on("enter", function() {
      if (!$this.hasClass("counting-finished")) {
        $this.countTo({
          formatter: function(value, options) {
            return value.toFixed(options.decimals);
          },
          onUpdate: function(value) {
            //console.debug(this);
          },
          onComplete: function(value) {
            $(this).addClass("counting-finished");
          }
        });
      }
    });
  }

  // // Events

  if ($counter.length) {
    init($counter);
  }
})();

window.onload = function() {
  var geId = function(selector) {
    return document.getElementById(selector);
  }

  var getPositionY = function(x, y) {
    return y + "%";
  }

  var scroll = function() {
    var el = geId('main-cover');
    var y = window.pageYOffset;
    var posY = y * 0.1333 + 50;
    var position = getPositionY(0, posY);
    el.style.backgroundPositionY = position
  }

  var rand = function() {
    return Math.floor((Math.random() * 10));
  }

  var hasClass = function(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  var showRandomCard = function() {
    var blacklist = [];
    var class_show_block = 'flip-container-show-back';

    setInterval(function() {
      var flips = document.querySelectorAll('.flip-container');
      for (var i = 0, len = flips.length; i < len; i++) {
        if (hasClass(flips[i], class_show_block)) {
          flips[i].classList.remove(class_show_block);
        }
      }

      [1, 2, 3].forEach(function() {
        do {
          var index = rand();
        } while (blacklist.indexOf(index) != -1);

        blacklist.push(index);
        flips[index].classList.add(class_show_block);
      });

      if (blacklist.length === 6) {
        blacklist = blacklist.splice(3, 3);
      }
    }, 5000);
  }

  var initScroll = function() {
    window.addEventListener('scroll', scroll);
  }

  var initRandomCard = function() {
    showRandomCard();
  }

  var initialize = function() {
    initScroll();
    initRandomCard();
  }

  initialize();
};
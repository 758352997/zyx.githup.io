"use strict";

var id1 = location.search;
var ids = id1.split('=')[1];
var glass = document.querySelector('.glass');
var signif = document.querySelector('.signif');
var content = document.querySelector('.content');
var data;

if (ids) {
  ajax({
    url: './php/detail.php',
    data: "id=".concat(ids),
    success: function success(data) {
      data = JSON.parse(data);
      var str = "\n\n            <div class=\"glass\">\n            <div class=\"glass-top\">\n                <div class=\"bootn\">\n                    <div class=\"toimg\">\n                        <img src=\"".concat(data.tp, "\" alt=\"\">\n                        <div class=\"mask\"></div>\n                    </div>\n                </div>\n                <div class=\"glass-bottom\">\n                    <ul>\n                        <li><img src=\"./img/1.png\" alt=\"\"></li>\n                        <li><img src=\"./img/2.png\" alt=\"\"></li>\n                        <li><img src=\"./img/3.png\" alt=\"\"></li>\n                        <li><img src=\"./img/4.png\" alt=\"\"></li>\n                        <li><img src=\"./img/5.png\" alt=\"\"></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"signif\">\n            <h2> ").concat(data.bt, "</h2>\n\n\n            <div class=\"fcs\">\n                <span>\u4EF7\u683C</span>\n                <i>").concat(data.price, "</i>\n                <h3>\u4FC3\u9500\u4EF7</h3>\n                <h4>\uFFE5").concat(data.origin, "</h4>\n            </div>\n            <div class=\"freight\">\n                <span>\u8FD0\u8D39</span>\n                <p>\u798F\u5EFA\u6CC9\u5DDE\u81F3\u6DF1\u5733 \u5FEB\u9012:0.00</p>\n            </div>\n            <div class=\"seles\">\n                <ul>\n                    <li>\u6708\u9500\u91CF <span>").concat(data.sold, "</span></li>\n                    <li>\u7D2F\u8BA1\u8BC4\u4EF7 <span>227</span></li>\n                    <li class=\"lilast\">\u9001\u5929\u732B\u79EF\u5206<span>74</span>\u8D77</li>\n                </ul>\n            </div>\n            <div class=\"size\">\n                <div class=\"size-left\">\n                    <span>\u5C3A\u7801</span>\n                </div>\n                <div class=\"size-right\">\n                    <a href=\"#\">39</a>\n                    <a href=\"#\">40</a>\n                    <a href=\"#\">41</a>\n                    <a href=\"#\">42</a>\n                    <a href=\"#\">43</a>\n                    <a href=\"#\">44</a>\n                </div>\n            </div>\n            <div class=\"sort\">\n                <h3>\u989C\u8272\u5206\u7C7B</h3>\n                <span>\n                <img src=\"http://img.alicdn.com/imgextra/i3/2159486323/O1CN01u2uqWo1wZywsOsDy1_!!2159486323.jpg_40x40q90.jpg\" alt=\"\">\n            <img src=\"http://img.alicdn.com/imgextra/i3/2159486323/O1CN01iPfZEn1wZyws2Aww7_!!2159486323.jpg_40x40q90.jpg\" alt=\"\">\n            </span>\n            </div>\n            <div class=\"nums\">\n                <h3>\u6570\u91CF</h3>\n                <div class=\"add\">\n                    <input type=\"text\" value=\"1\">\n                    <div class=\"add-mi\">\n                        <span>+</span>\n                        <span>-</span>\n\n                    </div>\n\n                </div>\n                <div class=\"sotck\">\n                    <i>\u5E93\u5B58 <u>11716</u>\u4EF6</i>\n                </div>\n            </div>\n\n            <div class=\"pabayle\">\n                <div class=\"p-top\">\n                    <span>\u82B1\u5457\u5206\u671F</span>\n                    <p>\u767B\u5F55\u540E\u786E\u5B9A\u662F\u5426\u4EAB\u6709\u8BE5\u670D\u52A1 <i>\u4EC0\u4E48\u662F\u82B1\u5457\u5206\u671F</i></p>\n                </div>\n                <div class=\"p-bottom\">\n                    <ul>\n                        <li>\n                            <span>\uFFE550.46\u8D77x3\u671F</span></br>\n                            <span>(\u542B\u624B\u7EED\u8D39)</span>\n                        </li>\n                        <li>\n                            <span>\uFFE525.57\u8D77x6\u671F</span></br>\n                            <span>(\u542B\u624B\u7EED\u8D39)</span>\n                        </li>\n                        <li>\n                            <span>\uFFE513.25\u8D77x12\u671F</span></br>\n                            <span>(\u542B\u624B\u7EED\u8D39)</span>\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n            <div class=\"join\">\n                <span  class=\"purch\">\u7ACB\u5373\u8D2D\u4E70</span>\n                <span  class=\"cat\">\u52A0\u5165\u8D2D\u7269\u8F66</span>\n            </div>\n        </div>\n        <div class=\"showimg\">\n            <img src=\"").concat(data.tp, "\" alt=\"\">\n        </div>\n");
      content.innerHTML = str;
      var imgs = document.querySelector('.imgs');
      var hover = document.querySelector('.hover1');

      hover.onmouseover = function () {
        imgs.style.display = 'block';
      };

      hover.onmouseout = function () {
        imgs.style.display = 'none';
      };

      var minBox = document.querySelector('.toimg');
      var mask = document.querySelector('.mask');
      var maxBox = document.querySelector('.showimg');
      var maxImg = document.querySelector('.showimg img'); // 鼠标移动，mask跟随移动

      minBox.onmousemove = function (e) {
        var e = e || event; // 计算msk的定位坐标

        var maskLeft = e.clientX - offset(minBox).left - mask.clientWidth / 2;
        var maskTop = e.pageY - offset(minBox).top - mask.clientHeight / 2; // 限制mask移动范围

        if (maskLeft < 0) {
          maskLeft = 0;
        }

        if (maskLeft >= minBox.clientWidth - mask.clientWidth) {
          maskLeft = minBox.clientWidth - mask.clientWidth;
        }

        if (maskTop < 0) {
          maskTop = 0;
        }

        if (maskTop >= minBox.clientHeight - mask.clientHeight) {
          maskTop = minBox.clientHeight - mask.clientHeight;
        }

        mask.style.left = maskLeft + 'px';
        mask.style.top = maskTop + 'px';
        var scaleX = maskLeft / (minBox.clientWidth - mask.clientWidth);
        var scaleY = maskTop / (minBox.clientHeight - mask.clientHeight); // 大图也跟随移动

        maxImg.style.left = -scaleX * (maxImg.clientWidth - maxBox.clientWidth) + 'px';
        maxImg.style.top = -scaleY * (maxImg.clientHeight - maxBox.clientHeight) + 'px';
      };

      minBox.onmouseenter = function () {
        mask.style.display = 'block';
        maxBox.style.display = 'block';
      };

      minBox.onmouseleave = function () {
        mask.style.display = 'none';
        maxBox.style.display = 'none';
      };

      var imgs = document.querySelectorAll('.glass-bottom img');

      var _loop = function _loop(i) {
        imgs[i].onclick = function () {
          for (var j = 0; j < imgs.length; j++) {
            imgs[j].className = "";
          }

          imgs[i].className = "img1";
          var leftimg = document.querySelector('.toimg img');
          var rightimg = document.querySelector('.showimg img');
          leftimg.setAttribute("src", "./img/" + (i + 1) + ".png");
          rightimg.setAttribute("src", "../img/" + (i + 1) + ".png");
        };
      };

      for (var i = 0; i < imgs.length; i++) {
        _loop(i);
      }

      var join = document.querySelector('.join');

      join.onclick = function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;

        if (target.className === 'cat') {
          var shopping = localStorage.getItem('shopping');

          if (shopping) {
            shopping = JSON.parse(shopping);
            var a = 0;
            shopping.forEach(function (item) {
              if (item.id === data.id) {
                item.number++;
                localStorage.setItem('shopping', JSON.stringify(shopping));
                a = 1;
              }
            });

            if (!a) {
              data.number = 1;
              shopping.push(data);
              localStorage.setItem('shopping', JSON.stringify(shopping));
            }
          } else {
            data.number = 1;
            localStorage.setItem('shopping', JSON.stringify([data]));
          }

          alert('添加购物车成功');
        }
      };

      var logins = getCookie('login');
      var masi = document.querySelector('.logg');

      if (logins) {
        masi.innerHTML = logins;
      } else {
        masi.innerHTML = '亲,请登录';
      }
    }
  });
} else {
  alert('非法进入');
}
"use strict";

var login = getCookie('login');
var user = document.querySelector('.li1 a');
var href = location.href;
var shopping;
var contentmain = document.querySelector('.shopping-main');
var cont = document.querySelector('.content');
var adds;

if (login) {
  user.innerHTML = login;
}

;

function showdiv() {
  var divs = "\n    <div class=\"air\">\n    <div class=\"ps\">\n        <p>\u8D2D\u7269\u8F66\u5E2E\u60A8\u4E00\u6B21\u6027\u5B8C\u6210\u6279\u91CF\u8D2D\u4E70\u4E0E\u4ED8\u6B3E\uFF0C\u4E0B\u5355\u66F4\u4FBF\u6377\uFF0C\u4ED8\u6B3E\u66F4\u7B80\u5355\uFF01</p>\n    </div>\n    <p>\u60A8\u7684\u4F4D\u7F6E\uFF1A\u9996\u9875\u6211\u7684\u6DD8\u5B9D\u6211\u7684\u8D2D\u7269\u8F66</p>\n    <p>\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684\uFF0C\u8D76\u7D27\u884C\u52A8\u5427\uFF01\u60A8\u53EF\u4EE5\uFF1A</p>\n    <p class=\"kooe\">\u770B\u770B\uFF1A<i>\u6211\u7684\u6536\u85CF\u5939  </i></p>\n    <p class=\"kooe1\">\u770B\u770B: <i>\u5DF2\u4E70\u5230\u7684\u5B9D\u8D1D</i> </p>\n</div>\n    ";
  cont.innerHTML = divs;
}

;
showCart();

function showCart() {
  if (login) {
    shopping = localStorage.getItem('shopping');

    if (shopping) {
      shopping = JSON.parse(shopping);
      var lengths = shopping.length;
      var quanxuan = shopping.every(function (item) {
        return item.is_select == 1;
      });
      var str1 = '';
      str1 = "\n            <div class=\"shopping-top\">\n            <ul>\n                <li class=\"li1\">\n                    <a href=\"#\" class=\"a1\">\u5168\u90E8\u5546\u54C1 <i class='ili'></i></a>\n                </li>\n                <li>\n                    <a href=\"#\">\u964D\u4EF7\u5546\u54C1 <i>0</i></a>\n                </li>\n                <li class=\"li3\">\n                    <a href=\"#\">\u5E93\u5B58\u7D27\u5F20  <i>0</i></a>\n                </li>\n                <div class=\"sum\">\n                    <span>\u5DF2\u9009\u5546\u54C1(\u4E0D\u542B\u8FD0\u8D39) <i class='reobs'></i></span>\n                    <a href=\"#\">\u7ED3\u7B97</a>\n                </div>\n            </ul>\n            <div class=\"list-top\">\n                <ul>\n                    <li class=\"i1\"><input type=\"checkbox\" class='all'".concat(quanxuan ? 'checked' : '', "> &nbsp;\u5168\u9009</li>\n                    <li class=\"i2\">\u5546\u54C1\u4FE1\u606F</li>\n\n                    <div class=\"ul-r\">\n                        <ul>\n                            <li>\u5355\u4EF7</li>\n                            <li>\u6570\u91CF</li>\n                            <li>\u91D1\u989D</li>\n                            <li>\u64CD\u4F5C</li>\n                        </ul>\n                    </div>\n                </ul>\n            </div>\n        </div>\n          \n            ");
      shopping.forEach(function (item) {
        str1 += "\n                <div class=\"listbox\">\n            <div class=\"list\">\n                <div class=\"cart\">\n                    <div class=\"cartlist\">\n                        <ul>\n                            <li class=\"checkbox\">\n                                <input type=\"checkbox\" name='radio'".concat(item.is_select === 1 ? 'checked' : '', " data-id=").concat(item.id, ">\n                            </li>\n                            <li class=\"imgli\">\n                                <a href=\"#\">\n                                    <img src=\"").concat(item.tp, "\" alt=\"\">\n                                </a>\n                            </li>\n                            <li class=\"title\">\n                                <a href=\"#\" title=\"").concat(item.bt, "\">\n                                    ").concat(item.bt, "\n                                </a>\n                                <div class=\"promo\">\n                                    <p> <img src=\"http://img.alicdn.com/tfs/TB1559E3oY1gK0jSZFCXXcwqXXa-25-16.png\" alt=\"\"></p>\n                                    <div class=\"logo\">\n                                        <img src=\"http://assets.alicdn.com/sys/common/icon/trade/xcard.png\" alt=\"\">\n                                        <img src=\"http://img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png\" alt=\"\">\n                                        <img src=\"http://img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png\" alt=\"\">\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"licolor\">\n                                <p>\u989C\u8272\u5206\u7C7B:\u9ED1\u8272</p>\n                                <p>\u5C3A\u7801:26/s[\u4E00\u5C3A9]</p>\n                            </li>\n    \n                            <li class=\"unit\">\n                                <p class=\"origin\">\uFFE5<i>").concat(item.origin, "</i></p>\n                                <p><i >").concat(item.price, "</i></p>\n                            </li>\n                            <li>\n                                <div class=\"number\">\n                                    <a href=\"#\" class='plus' data-id=").concat(item.id, ">-</a>\n                                    <input type=\"text\" value=\"").concat(item.number, "\"").concat(item.number, ">\n                                    <a href=\"#\" class='lose' da-id=").concat(item.id, ">+</a>\n                                </div>\n                            </li>\n                            <li class=\"money\">\n                                <p><i>").concat(item.price, "</i></p>\n    \n                            </li>\n                            <li class=\"operat\">\n                                <p>\u79FB\u5165\u6536\u85CF\u5939</p>\n                                <p class=\"delete\"data-id=").concat(item.id, ">\u5220\u9664</p>\n                                <p class=\"baby\">\u76F8\u8BC6\u5B9D\u8D1D</p>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n                </div>\n                \n               ");
      });
      adds = tatoll();
      str1 += "\n               \n            <div class=\"final\">\n            <div class=\"final-left\">\n                <div class=\"cat1\">\n                    <input type=\"checkbox\" class=\"all\"".concat(quanxuan ? 'checked' : '', "> \u5168\u9009\n                </div>\n                <div class=\"box\">\n                    <a href=\"#\" class=\"del\">\u5220\u9664</a>\n                    <a href=\"#\">\u79FB\u5165\u5220\u9664\u5939</a>\n                    <a href=\"#\">\u5206\u4EAB</a>\n                </div>\n            </div>\n            <div class=\"final-right\">\n                <div class=\"sele\">\n                    <a href=\"#\">\u5DF2\u9009\u5546\u54C1<i class=\"select\">").concat(adds[0], "</i>\u4EF6</a>\n                </div>\n                <div class=\"tet\">\n                    <a href=\"#\">\u5408\u8BA1(\u4E0D\u542B\u8FD0\u8D39): <span class=\"plice\">").concat(adds[1], "</span></a>\n                </div>\n                <button class=\"button\">\u7ED3\u7B97</button>\n            </div>\n        </div>\n            \n            ");
      contentmain.innerHTML = str1;
      var li1 = document.querySelector('.ili');
      li1.innerHTML = shopping.length;
      var reobs = document.querySelector('.reobs');
      reobs.innerHTML = adds[1];
    } else {
      showdiv();
    }
  } else {
    alert('您还未登录');
    location.href = './login.html?Url=' + href;
  }
}

;

contentmain.onclick = function (e) {
  var e = e || window.event;
  var target = e.target || e.srcElement;
  var list1 = document.querySelectorAll('.checkbox input');

  if (target.className === 'all') {
    shopping.forEach(function (item) {
      if (target.checked) {
        item.is_select = 1;
      } else {
        item.is_select = 0;
      }
    });
    localStorage.setItem('shopping', JSON.stringify(shopping));
    showCart();
    abc();
  }

  if (target.name === 'radio') {
    var data1 = target.getAttribute('data-id');
    shopping.forEach(function (item) {
      if (item.id === data1) {
        if (item.is_select == 1) {
          item.is_select = 0;
        } else {
          item.is_select = 1;
        }
      }
    });
    localStorage.setItem('shopping', JSON.stringify(shopping));
    showCart();
    abc();
  }

  if (target.className === 'delete') {
    var data2 = target.getAttribute('data-id');
    shopping = shopping.filter(function (item) {
      return item.id != data2;
    });
    localStorage.setItem('shopping', JSON.stringify(shopping));
    showCart();
    abc();

    if (shopping.length < 1) {
      showdiv();
    }
  }

  if (target.className === 'del') {
    shopping = shopping.filter(function (item) {
      return item.is_select != 1;
    });
    localStorage.setItem('shopping', JSON.stringify(shopping));
    showCart();

    if (shopping.length < 1) {
      showdiv();
    }

    abc();
  }

  if (target.className === 'plus') {
    var data3 = target.getAttribute('data-id');
    shopping.forEach(function (item) {
      if (item.id === data3 && item.number > 1) {
        item.number--;
      }
    });
    localStorage.setItem('shopping', JSON.stringify(shopping));
    showCart();
    abc();
  }

  if (target.className === 'lose') {
    var data4 = target.getAttribute('da-id');
    shopping.forEach(function (item) {
      if (item.id === data4) {
        item.number++;
      }
    });
    localStorage.setItem('shopping', JSON.stringify(shopping));
    showCart();
    abc();
  }

  if (target.innerHTML === '结算') {
    if (adds[0] > 0) {
      if (confirm('您确定要购买吗')) {
        alert('您已成功支付' + adds[1]);
        shopping = shopping.filter(function (item) {
          return item.is_select != 1;
        });
      }
    } else {
      alert('您还未选中商品');
    }

    localStorage.setItem('shopping', JSON.stringify(shopping));
    showCart();

    if (shopping.length < 1) {
      showdiv();
    }

    abc();
  }
};

if (shopping.length === 0) {
  showdiv();
}

;

function tatoll() {
  //所选商品总数量
  var num = 0; //所选商品价格

  var numP = 0; //遍历所有商品

  shopping.forEach(function (item) {
    //判断当前商品是否被选中
    if (item.is_select == 1) {
      //累加计算被选中商品的所有数量
      num += parseInt(item.number); //累加计算被选中商品的价格,数量乘以价格

      numP += parseInt(item.number) * parseFloat(item.origin);
    }
  });
  return [num, numP.toFixed(2)];
}

;

function abc() {
  var lists = document.querySelectorAll('.list');
  lists.forEach(function (item) {
    var jiage = $(item).find('.origin').children().html();
    var num = $(item).find('.number').children().eq(1).val();
    var xiaoji = parseFloat(jiage) * parseInt(num);
    $(item).find('.money').children().children().html('￥' + xiaoji.toFixed(2));
  });
}

;
abc();
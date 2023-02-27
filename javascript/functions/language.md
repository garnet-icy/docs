## 前端多语言
### <center>jQuery中</center>

**给需要切换的数据加上统一的class值,确定显示数据的key值**
```html
<button class="translate" id="en">English</button>
<button class="translate" id="zh">Chinese</button>

<ul>
  <li class="lang" key="HOME"></li>
  <li class="lang" key="ABOUT"></li>
  <li class="lang" key="CONTACT"></li>
</ul>
```

```js
var arrLang = {
  "en": {
    "HOME": "Home",
    "ABOUT": "About Us",
    "CONTACT": "Contact Us",
  },
  "zh": {
    "HOME": "首页",
    "ABOUT": "关于我们",
    "CONTACT": "联络我们",
  }
};

// The default language is English
var lang = "en";
// Check for localStorage support
if('localStorage' in window){
   var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
   if (!Object.keys(arrLang).includes(lang)) lang = 'en';
}

$(document).ready(function() {
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function() {
  var lang = $(this).attr("id");

  // update localStorage key
  if('localStorage' in window){
    localStorage.setItem('lang', lang);
    console.log( localStorage.getItem('lang') );
  }

  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});
```

### <center>vue中的使用</center>

**vue-i18n (I18N国际化)internationalization**

> chs.json
```json
// 我分2级，home是页面模块,say是首页内需要的语言包文字内容
{
  "home": {
    "say": "你好"
  }
}
```


> en.json
```json
// 我分2级，home是页面模块,say是首页内需要的语言包文字内容
{
  "home": {
    "say": "hello"
  }
}
```


> mian.js
```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'chs', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
    messages: {
      'chs': require('../../assets/languages/chs.json'),  // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
      'en': require('../../assets/languages/en.json')
    }
});

const app = new Vue({
    el: '#app',
    i18n,
    router,
    store,
    components: { App },
    template: '<App/>,
    mounted: function () {
      console.log('mounted');
    }
});
```
> html
```html
<div>{{$t('home.say')}}</div>
<input type="text" :value="$t('home.say')">
```
// js中
```js
mounted () {
    let vm = this;
    vm.$t('home.say');
}
```
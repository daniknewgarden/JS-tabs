# Tabs on vanilla JavaScript

### [VIEW DEMO](https://daniknewgarden.github.io/JS-tabs/)

## Introduction 
**Very useful plugin for your web-page.**

I’m use JavaScript event delegation to avoid unnecessary code.
With this plugin you can have from 1 to infinity tabs.

![Image of JS-tabs](https://github.com/daniknewgarden/JS-tabs/blob/master/images/preview.gif)

## Setup
### Your HTML markdown should look like this:
*  **Tabs div**
    * **Tabs navigation**
      * **Navigation buttons**
    * **Tabs content**
      * **Your tabs**

```html
<div class="container">
    <nav class="menu">
        <button class="menu-link">1 tab</button>
        <button class="menu-link">2 tab</button>
        <button class="menu-link">3 tab</button>
        <button class="menu-link">4 tab</button>
    </nav>
    <div class="content">
        <div class="tab-content">first tab-content</div>
        <div class="tab-content">second tab-content</div>
        <div class="tab-content">third tab-content</div>
        <div class="tab-content">fourth tab-content</div>
    </div>
</div>
```

### Your css styles should look like this:

###### It should include two classes - **show and hide**

```css
.show {
   display: flex; /* or grid, block... */
}

.hide {
    display: none;
}
```

### JavaScript (tabs.js file):
```JavaScript
window.addEventListener('DOMContentLoaded', function () {

   'use strict';
   
   let tab = document.querySelectorAll('.menu-link'), //class of your tab button
       info = document.querySelector('.menu'), //class of  your menu with tab buttons
       tabContent = document.querySelectorAll('.tab-content'); //class of your tab with some content
       
   function hideTabContent(a) {
       for (let i = a; i < tabContent.length; i++) {
           tabContent[i].classList.remove('show'); 
           tabContent[i].classList.add('hide');
       }
   }
   
   hideTabContent(1);

   function showTabContent(b) {
       if (tabContent[b].classList.contains('hide')) {
           tabContent[b].classList.remove('hide');
           tabContent[b].classList.add('show');
       }
   }
   
   info.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('menu-link')) { //class of your tab-button
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  break;
             }
          }
       }
    });
    
});
```


  
  

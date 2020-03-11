# Tabs on vanilla JavaScript

## Introduction 

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


  
  

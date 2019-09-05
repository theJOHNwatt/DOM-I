const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = 'img/logo.png'

let headerImg = document.getElementById('cta-img');
headerImg.src = 'img/header-img.png';

let middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

const headerText = document.querySelector('h1');
headerText.textContent = 'DOM Is Awesome';

const navItems = document.querySelectorAll ('nav a');
navItems[0].textContent = 'Services';
navItems[0].style.color = 'green';
navItems[1].textContent = 'Product';
navItems[1].style.color = 'green';
navItems[2].textContent = 'Vision';
navItems[2].style.color = 'green';
navItems[3].textContent = 'Features';
navItems[3].style.color = 'green';
navItems[4].textContent = 'About';
navItems[4].style.color = 'green';
navItems[5].textContent = 'Contact';
navItems[5].style.color = 'green';

const navMain = document.querySelector('nav');
const newFirstA = document.createElement('a');
newFirstA.href = '#';
newFirstA.textContent = 'Home';
newFirstA.style.color = 'green';
const newLastA = document.createElement('a');
newLastA.href = '#';
newLastA.textContent = 'Login';
newLastA.style.color = 'green';

navMain.appendChild(newLastA);
navMain.prepend(newFirstA);


const buttonOne = document.querySelector('.cta .cta-text button');
buttonOne.textContent = 'Get Started';

const h4Titles = document.getElementsByTagName('h4');
h4Titles[0].textContent = 'Features';
h4Titles[1].textContent = 'About';
h4Titles[2].textContent = 'Services';
h4Titles[3].textContent = 'Product';
h4Titles[4].textContent = 'Vision';
h4Titles[5].textContent = 'Contact';

const pInfo = document.querySelectorAll('p');
pInfo[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pInfo[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pInfo[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pInfo[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pInfo[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pInfo[5].textContent = '123 Way 456 Street Somewhere, USA.';
pInfo[6].textContent = '1 (888) 888-8888';
pInfo[7].textContent = 'sales@greatidea.io';
pInfo[8].textContent = 'Copyright Great Idea! 2018';

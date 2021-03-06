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
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Updating the <a> elements content of the nav bar
const navBarLinks = document.querySelectorAll('header nav a');

navBarLinks[0].textContent = 'Services';
navBarLinks[1].textContent = 'Product';
navBarLinks[2].textContent = 'Vision';
navBarLinks[3].textContent = 'Features';
navBarLinks[4].textContent = 'About';
navBarLinks[5].textContent = 'Contact';


//Updating .cta .cta-text, button, img content
const ctaHeading = document.querySelector('.cta .cta-text h1');
const ctaButton = document.querySelector('.cta button');
const ctaImg = document.querySelector('#cta-img');

ctaHeading.innerHTML = '<h1>DOM<br> Is<br> Awesome</h1>';
ctaButton.textContent = 'Get Started';
ctaImg.src = 'img/header-img.png';


//Updating .main-content .top-content
const topContentTextContentPara = document.querySelectorAll('.top-content .text-content p');
const topContentTextContentHeading = document.querySelectorAll('.top-content .text-content h4');

topContentTextContentHeading[0].textContent = 'Features';
topContentTextContentHeading[1].textContent = 'About';

topContentTextContentPara[0].textContent = `Features content elementum magna eros, 
ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. 
Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`

topContentTextContentPara[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


//Updating main-content .middle-img
const mainContentImg = document.querySelector('#middle-img');

mainContentImg.src = 'img/mid-page-accent.jpg';


//Updating the bottom-content
const bottomContentTextContentPara = document.querySelectorAll('.bottom-content .text-content p');
const bottomContentTextContentHeading = document.querySelectorAll('.bottom-content .text-content h4');

bottomContentTextContentHeading[0].textContent = 'Services';
bottomContentTextContentPara[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomContentTextContentHeading[1].textContent = 'Product';
bottomContentTextContentPara[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomContentTextContentHeading[2].textContent = 'Vision';
bottomContentTextContentPara[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


//Updating Contact section 
const contactHeading = document.querySelector('.contact h4');
const contactParagraphs = document.querySelectorAll('.contact p');

contactHeading.textContent = 'Contact';
contactParagraphs[0].textContent = siteContent.contact.address;
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;


//Updating Footer
const footer = document.querySelector('footer p');

footer.textContent = siteContent.footer.copyright;


//Task 4: Adding new content

navBarLinks.forEach(link => {
  link.style.color = 'green';
})

//adding items to the nav bar
const navBar = document.querySelector('header nav');

//1.Creating new elements 
const newElement1 = document.createElement('a');
const newElement2 = document.createElement('a');

// 2. Adding values / attributes
newElement1.href = "#";
newElement1.textContent = "First item";

newElement2.href = "#";
newElement2.textContent = "Last item";

navBar.appendChild(newElement2);
navBar.prepend(newElement1);


//Stretch goal: updating styles on the page 
const containerDiv = document.querySelector('.container');
const textContent = document.querySelectorAll('.main-content .text-content');

containerDiv.style.backgroundColor = "#C2DAE9";

textContent.forEach(div => {
  div.style.backgroundColor = '#153069';
  div.style.color = '#C2DAE9';
  div.style.borderRadius = '10px';
});


//Stretch goal - adding an event listener to the button:

ctaButton.addEventListener('click', function(){
  ctaImg.src = 'img/thumbs-up.png';
  ctaImg.style.width = '330px';
  ctaImg.style.height = '250px';
}); 


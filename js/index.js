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

const siteSects = {};
{
  let keys = Object.keys(siteContent);
  let values = document.querySelector('.container').children;
  for(let i = 0; i < keys.length; i++){
    siteSects[keys[i]] = values[i];
  }
}
// Example: Update the img src for the logo
// // I do this in my function
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);
// let ctaImg = document.getElementById("cta-img");
// ctaImg.src = siteContent["cta"]["img-src"];
// let middleImg = document.getElementById("middle-img");
// middleImg.src = siteContent["main-content"]["middle-img-src"];

function changeToData (sectStr, queryStr){
  let datas = Object.values(siteContent[sectStr]);
  siteSects[sectStr].querySelectorAll(queryStr).forEach(function(child, index){
    if (child.tagName === "IMG"){
      child.src = datas[index];
    } else {
      child.textContent = datas[index];
    }
  });
}
changeToData("nav", "a, img");
changeToData("cta", ".cta-text > *, img");
changeToData("main-content", ".text-content > *, img");
changeToData("contact", "*");
changeToData("footer", "*");

// // the first way I did it, I kinda realized halfway that I could do it with a function.
// {
//   let navTexts = Object.values(siteContent["nav"]).slice(0, -1);
//   siteSects["nav"].querySelectorAll('a').forEach(function(link, index){
//     link.textContent = navTexts[index];
//   });
// }
// {
//   let ctaTexts = Object.values(siteContent["cta"]).slice(0, -1);
//   siteSects["cta"].querySelectorAll(".cta-text > *").forEach(function(child,index){
//     child.textContent = ctaTexts[index];
//   });
// }
// {
//   let mainTexts = Object.values(siteContent["main-content"]);
//   let mainChildren = siteSects["main-content"].querySelectorAll(".text-content > *, img");
//   console.log(mainTexts);
//   console.log(mainChildren);
// }

siteSects["nav"].querySelectorAll("nav > *").forEach(child => {
  child.style.color = "green";
});
{
  let first = document.createElement("a");
  siteSects["nav"].children[0].prepend(first);
  first.textContent = "FirstElem";
  let last = document.createElement("a");
  siteSects["nav"].children[0].appendChild(last);
  last.textContent = "LastElem";
}


// my style changes
document.querySelectorAll("*").forEach(function(child){
  child.style.maxWidth = "100%";
});
document.body.style.margin = "0 2%";


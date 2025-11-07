# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)


## Starting with GitHub

I learned a lot about how git hub works and learned how to pull and push using GitHub. I'm excited to think about what I want my startup to be!


## AWS

My IP address is: 13.223.217.168
this is the public IP address.
The Web Page can be accessed by the domain name: rockcanyondesign.com or any sub-directory in the format of sub.rockcanyondesign.com
https://rockcanyondesign.com/

NS record provides extra security to the domain name
SOA record provides information about the owner of the domain name (I should adjust this because the domain name is being accessed through GoDaddy and belongs to my mom)

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

[Structure](https://codepen.io/Carter-Middleton/pen/azdodxy)

[Input](https://codepen.io/Carter-Middleton/pen/wBMwWLj)

[Media](https://codepen.io/Carter-Middleton/pen/vELBWrX)

HTML isn't too hard and there are a lot of good resources. The structural elements are pretty intutive but I kept finding more that were useful. I used the div tag a ton, which seemed to be really helpful for making the items move stay in the right positions.

I tried to leave the website relatively barebones for now because I know we are going to learn other tools that will make it much easier to clean it up and add in the things that we'll want.

## CSS

[Styling Example](https://codepen.io/Carter-Middleton/pen/YPwzMQN)

[Web Page Example](https://codepen.io/leesjensen/pen/jOKvbrv)

It's kinda difficult to get things to look right just messing around in CSS, [bootstrap](https://codepen.io/leesjensen/pen/JjZavjW) is helpful!

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

In the following code, what does the link element do?

Links to external resourse in the head portion of HTML
In the following code,  what does a div tag do?

Makes a divider, separates parts of code
In the following code, what is the difference between the #title and .grid selector?

id = title vs class = grid
In the following code, what is the difference between padding and margin?

Margin is space between elements outside the element "pushes the object away from others" Padding is space within an element pushes content in from the border
Given this HTML and this CSS how will the images be displayed using flex?

Makes object flexible
What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?

Works with one-liner functions, makes the variable do => this
What does the following code using map with an array output?

Map makes an adjustment to eact element in an array, outputs new array. Iterates over each element
What does the following code output using getElementByID and addEventListener? 

getElementById will watch a specific element in HTML and the ().addEventListener() will watch for a specific event
What does the following line of Javascript do using a # selector?

Selects elements by their id
Which of the following are true? (mark all that are true about the DOM)

Tree, Nodes, and objects, one nodes is your index, submodules. All pages tree'd under main index page
By default, the HTML span element has a default CSS display property value of: 

inline, span will fit inline with the elements around it. Doesn't start a new line
How would you use CSS to change all the div elements to have a background color of red? 

div {
      background-color: red;
      }
How would you display an image with a hyperlink in HTML? 

<img source="" alt="">
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?


<img width="1290" height="804" alt="image" src="https://github.com/user-attachments/assets/5e4fdaa8-dfc2-4c4e-9a49-b24dcd5c8b8a" />


Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

# id tag type thing
What will the following code output when executed using a for loop and console.log?


How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

const byu = getElementByID('byu');
byu.style.color = "green";

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

<p></p>, <ol></ol> <ul></ul> <h2></h2> <h1></h1> <h3></h3>

How do you declare the document type to be html?
<html></html>

What is valid javascript syntax for if, else, for, while, switch statements?
if (){}

What is the correct syntax for creating a javascript object?
newObject()

Is it possible to add new properties to javascript objects?

yes

If you want to include JavaScript on an HTML page, which tag do you use?

<script></script>

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?



Which of the following correctly describes JSON?
lightweight, text-based, {}


What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod - modifies permissions, pwd present working directory, change directory, list, open file in vim/nano, make directory, move, remove, manuel, remote shell session, current processes, wget retrives files from internet, superuser do


Which of the following console command creates a remote shell session?
ssh

Which of the following is true when the -la parameter is specified for the ls console command?
long, all files

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
top level : .click
root domain: bozo.click
subdomian: banana.fruit

Is a web certificate is necessary to use HTTPS.
Yes


Can a DNS A record can point to an IP address or another A record.
Only IPv4 address


Port 443, 80, 22 is reserved for which protocol?
443 - HTTPS
80 - HTTP
22 - SSH

What will the following code using Promises output when executed?


## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```







Service

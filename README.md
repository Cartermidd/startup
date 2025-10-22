# Rock Canyon Design Storefront

[My Notes](notes.md)

Rock Canyon Design is a company that my mom recently started to sell custom handcrafted laser-cut creations. When I told her I was developing my web programming skills, she asked if I would design a website that would:
1. Showcase her products through professional photos and videos.
2. Provide a simple and secure way for customers to browse and purchase products.
3. Allow customers to customize details in certain patterns to order individualized products.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.


## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever wanted a custom engraved wooden or acrylic keepsake or gift? Through the Rocky Mountain Design Storefront you can browse a wide range of popular designs or customize a pattern to make the perfect, personalized, laser-cut keepsake and order it directly on the site. Within minutes of your order, your cut-to-order design can be in our laser cutter, turning your idea into a reality. Then it's just a short trip from our front porch to yours! With the Rocky Mountain Design Storefront, an unforgettable anniversity, Christmas, birthday, wedding gift or personalized keepsake is just a click away.

### Design

<img width="1814" height="1122" alt="image" src="https://github.com/user-attachments/assets/bb5ab734-a9a6-4240-bfb0-3ddd89d271c8" />


<img width="1556" height="974" alt="image" src="https://github.com/user-attachments/assets/c8cda510-fbe6-4002-9530-53b22a6f897f" />


### Key features

- Home page that displays videos and pictures
- Account system with secure login with HTTPS
- Ability to browse products, add products to cart
- Ability to personlize certain products with custom text or images
- Cart, order, and purchase capablities
- Order history persistently stored
- Ability for admin to start live chat with customers

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for the application. Several HTML pages. Hyperlink to send email to admin.
- **CSS** - Application styling to work on desktop screens as well as mobile devices, good usage of whitespace, color, and contrast.
- **React** - Provides login, fetches product data, handle state changes like adding something to the cart, or opening the Admin-customer live chat.
- **Service** - Backend service with endpoints for:
      -login
      -cart and order price calculations
      -calculations to apply discounts
- **DB/Login** - Customers can create accounts and log in to purchase items or view their order history. These details will be stored in the database.
- **WebSocket** - Facilitate a live chat between Admin users and customers.

## 🚀 AWS deliverable

For this deliverable I did the following. I set up the public IP address, the domain name, and the secure https connection.

- [x] **Server deployed and accessible with custom domain name** - [Rock Canyon Design](https://startup.rockcanyondesign.com).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I added several custom HTML pages
- [x] **Proper HTML element usage** - I used header, body, div, and footer on each page.
- [x] **Links** - Each page has a link to each other page.
- [x] **Text** - I added in some text, I will likely adjust it.
- [x] **3rd party API placeholder** - I added in a placeholder for API on the purchase page.
- [x] **Images** - I put in some images that will be used and a lot of placeholder images.
- [x] **Login placeholder** - I have a login placeholder.
- [x] **DB data placeholder** - There are a LOT of placeholders for database info.
- [x] **WebSocket placeholder** - I added in a couple of potential WebSocket add-ons for later, I might adjust my plans but the placeholders are in for now.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Using CSS and the CSS framework, bootstrap, I made the elements in the header, footer, and main content look better. It's still a work in progress, but it looks much better than it did when it was just HTML.
- [x] **Navigation elements** - I made the navigation elements more clear and made it so you can tell what button you are hovering over and what page you are currently on.
- [x] **Responsive to window resizing** - I made the window size flexible so it works with mobile or desktop or other window sizes. Most of the items on the pages are responsive as well. The objects that aren't responsive yet are just placeholders.
- [x] **Application elements** - I added in placeholders for a better way to display products with a link that will be able to lead to the specific product in the future. I also added in a featured product display that will be interactive in the future.
- [x] **Application text content** - I worked with the CSS file until I got the text to be a font that I liked and to align correctly in the page regardless of the window size.
- [x] **Application images** - I used CSS to make sure the images didn't align in weird ways with the text.

Before further polishing, I want to consult with my mom and see what she wants her website to look like. I don't want to spend a lot of effort making something look pretty that I may just have to scrap completely.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I bundled all of the react code using vite.
- [x] **Components** - I ensured that the webpage can display each page with the correct components for each page.
- [x] **Router** - I created routing that will insert the correct HTML display without changing the URL to include the .html tag.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.

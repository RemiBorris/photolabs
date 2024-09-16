# PhotoLabs Project

Photolabs is a simple, single-page photo app similar to Instagram.

The App allows you to view an enlarged photo by selecting it from the homepage. When viewing the enlarged photo you can view similar photos below to the one selected. You can toggle different topics from the Topic selectors. You are able to favorite a photo from anywhere within the App. You can return to the homepage of the App by clicking the Photolabs Logo.

## Final Product

!["View of home page"](https://github.com/RemiBorris/photolabs/blob/main/docs/PhotoLabs%20-%20Home%20Page.png?raw=true)
!["View of activated modal"](https://github.com/RemiBorris/photolabs/blob/main/docs/PhotoLabs%20-%20Modal%20View.png?raw=true)
!["View of similar photos"](https://github.com/RemiBorris/photolabs/blob/main/docs/PhotoLabs%20-%20Similar%20Photos.png?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command in frontend and backend folder.
3. Start the web server using the `npm run local` command inside frontend and backend folder. The app will be served at <http://localhost:3000/> while the server will be hosted on <http://localhost:8001/>.
4. Go to <http://localhost:3000/> in your browser.

## Dependencies

Frontend:
- React
- React-Dom
- React-Scripts
- Web-Vitals
- Sass(dev-dependencie)

Backend:
- Body-Parser
- Cors
- dotenv
- Express
- Helmet
- pg
- Socket.io
- WS
# Ravenous

A client-side React application, utilizing the Yelp API to search for local businesses.

## Screenshots

![App Screenshot](https://res.cloudinary.com/codelikeagirl29/image/upload/v1670503455/projects/ravenous_alcgac.png)


## API

#### Signup for an API Key [here](https://www.yelp.com/developers/v3/manage_app?app_created=True)

Locate the ```src/util/Yelp.js``` and add your ___clientId___ and ___secret___ variables.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clientId` | `string` | **Required**. Your client |
| `secret` | `string` | **Required** Your API key |

Inside your root directory, using npm, install 

```npm i whatwg-fetch polyfill```

In your own browser, visit [cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and click ***“Request temporary access to the demo server”***
## Features

Below is a list of some potential features to add to Ravenous:

 - Make addresses clickable and have them open the address in Google Maps in a new tab
 - Make images clickable and have them open the business' website in a new tab
 - Clicking on a different sorting option automatically requeries the Yelp API, rather than having to manually click "Let's Go" again
 - Implement your own type of sort (for example, by entering a distance or radius from a central location)
 - Allow you to search by pressing "Enter" (or "Return") on your keyboard, as opposed to manually clicking
 - Add autocompletion of addresses to the "Location" input

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://lindseyk.dev/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lindsey-howard)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dev_lindseyk)


## Acknowledgements

- This project is based off [Codecademy's tutorial](https://www.codecademy.com/paths/build-web-apps-with-react/tracks/bwa-ajax-requests-and-api-interactions/modules/bwa-ravenous-part-four/projects/interacting-with-yelp-api) on React with AJAX Requests & API Interactions.


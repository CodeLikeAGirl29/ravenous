// Yelp API https://www.yelp.com/developers/v3/manage_app?app_created=True
// Yelp ClientID: ftz6NR57gEFZY3as5uxQqg
// Yelp Secret: TSgUd_fxwRpjgA1qF4BowID8kpiNgYQuxEE75m4JzW40UH_TxGLWK2_D0P4gMsTHvtWAyWeiVwY0ME-r_GmwJYQT5oRSvs3DRGTd-9Ken4q1fWxwLdEBsy2aE8qRY3Yx
const clientId = 'ftz6NR57gEFZY3as5uxQqg';
const secret = 'TSgUd_fxwRpjgA1qF4BowID8kpiNgYQuxEE75m4JzW40UH_TxGLWK2_D0P4gMsTHvtWAyWeiVwY0ME-r_GmwJYQT5oRSvs3DRGTd-9Ken4q1fWxwLdEBsy2aE8qRY3Yx';
let accessToken;

const Yelp = {
  getAccessToken: function() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    // We will make a request to the /token endpoint of the Yelp API and pass
    // in our client ID and secret to obtain our access token.
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {
      method: 'POST'
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });
  },
  search: function(term, location, sortBy) {
    return Yelp.getAccessToken().then(() => {
      // To retrieve businesses, you'll have to hit the /businesses endpoint of the Yelp API.
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            // id
            // imageSrc
            // name
            // address
            // city
            // state
            // zipCode
            // category
            // rating
            // reviewCount
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          });
        }
      });
    });
  }
};

export default Yelp;

import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  searchTerms: function() {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=10").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            firstName: user.name.first,
            lastName: user.name.last,
            username: user.email,
            image: user.picture.thumbnail,
            city: user.location.city
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },
};

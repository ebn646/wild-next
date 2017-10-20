/**
 * Regularly import this file on either server or client and have fun with it.
 * DO NOT PUT SENSITIVE INFORMATION LIKE ACCESS DATA HERE, THIS FILE MIGHT BE BUNDLED TO THE CLIENT!
 * Instead put it in a config file in the server folder and only require it from there.
 */

// define all environments you expect here
const environments = {
  development: {
    PUBLIC_URL: "https://localhost"
  },
  staging: {
    PUBLIC_URL: "https://staging.example.com"
  },
  production: {
    PUBLIC_URL: "https://example.com"
  }
};

// could be imported by the client or the server
const env = (typeof window !== "undefined" ? window.ENV : process.env.NODE_ENV) || "development";
module.exports = environments[env.toLowerCase()];

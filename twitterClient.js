
const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "2Om8BZQC8PRJ55kso5IBBnUn3",
    appSecret: "SeDfSieto2LYeSpsFBI2byXkjflHufO5GTzwvxUjr6bkynlzyH",
    accessToken: "1469400765349482497-b8dyVoBE7p5OgbZf1X6nfoCYTX6gVn",
    accessSecret: "jpvaTlEV0yQ40vek5HLQqLonmutBxFfVv5pgMChdwtzOG"
})

const rwClient = client.readWrite; //read and write permissao
module.exports = rwClient;



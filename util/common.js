export function getRandomEmail() {
    var length = 10; // Set the desired length of the random part of the email
    var domain = "@example.com"; // Set your desired domain

    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text + domain;
}

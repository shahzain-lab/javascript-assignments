// assignment no.40 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


// make_album()
function make_album(artist, title, noOfTrack = 10) {
 const album = {
     artist,
     title,
     track: noOfTrack
 } 
 return album
}

const johnAR = make_album('john AR', 'A long risk');
console.log(johnAR);

const roseAR = make_album('rose AR', 'A dimand piece');
console.log(roseAR);

const aliceBk = make_album('alice Bk', 'Freshers', 15);
console.log(aliceBk);
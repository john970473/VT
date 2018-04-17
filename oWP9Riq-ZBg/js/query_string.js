var transcript = {
  "data":[
    {
      "t": "489",
      "d": "4731",
      "ts": "In this American English pronunciation video, you're going to come with me to the YouTube space in LA, <br>"
    },
    {
      "t": "5220",
      "d": "7000",
      "ts": "where I don't know anyone. And we're going to go over introducing yourself.  <br>"
    },
    {
      "t": "18980",
      "d": "5029",
      "ts": "Introducing yourself to a crowd of people, or even just one person, can make anyone nervous.  <br>"
    },
    {
      "t": "24009",
      "d": "4860",
      "ts": "Doing it in a foreign language, even more so. So today we're going to go over a few  <br>"
    },
    {
      "t": "28869",
      "d": "3971",
      "ts": "phrases that you might say when introducing yourself. <br> "
    },
    {
      "t": "32840",
      "d": "4700",
      "ts": "The first thing, of course, is saying your name.  Usually you'll hear people say I'm, <br> "
    },
    {
      "t": "37540",
      "d": "7370",
      "ts": "	or My name is, or My name's, contracting name and is.  Some non-native speakers  <br> "
    },
    {
      "t": "44910",
      "d": "4710",
      "ts": "	don't want to use contractions because they don't think it's clear enough, but we really  <br> "
    },
    {
      "t": "49620",
      "d": "5950",
      "ts": "do want to use the contraction I'm, and not I am because it can be much quicker,  <br> "
    },
    {
      "t": "55570",
      "d": "5870",
      "ts": "	I'm, I'm, I'm, which puts the emphasis on the name, the most important part.   <br> "
    }
  ]
};

// out.innerHTML = transcript.ts;
// var ts = JSON.parse(data);
for (var i=0 ; i<10 ; i++){
  document.getElementById('ts'+(i+1)).innerHTML = transcript.data[i].ts;
}

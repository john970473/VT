var transcript = {
  "data":[
    {
      "t": "949",
      "d": "1419",
      "ts": "	Let's play a game.   <br>"
    },
    {
      "t": "2368",
      "d": "2240",
      "ts": "	Think of a famous painting. <br>"
    },
    {
      "t": "4608",
      "d": "833",
      "ts": "	Guess what?  <br>"
    },
    {
      "t": "5441",
      "d": "2037",
      "ts": "	You just thought of me.  <br>"
    },
    {
      "t": "7478",
      "d": "2309",
      "ts": "	Today, I'm the world's most renowned  work of art, <br> "
    },
    {
      "t": "9787",
      "d": "1909",
      "ts": "	but it wasn't always this way.  <br> "
    },
    {
      "t": "11696",
      "d": "2349",
      "ts": "My story is full of surprises,  <br> "
    },
    {
      "t": "14045",
      "d": "2804",
      "ts": "and it all began in a studio in Florence.   <br> "
    },
    {
      "t": "24090",
      "d": "3479",
      "ts": "	Well, here's the master himself, Leonardo da Vinci.  <br> "
    },
    {
      "t": "27569",
      "d": "2467",
      "ts": "	He worked on me on and off for a few years <br> "
    }
  ]
};

// out.innerHTML = transcript.ts;
// var ts = JSON.parse(data);
for (var i=0 ; i<10 ; i++){
  document.getElementById('ts'+(i+1)).innerHTML = transcript.data[i].ts;
}

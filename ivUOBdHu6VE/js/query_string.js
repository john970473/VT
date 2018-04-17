var transcript = {
  "data":[
    {
      "t": "402",
      "d": "3035",
      "ts": "-Welcome friends. -All right, here we go.  <br>"
    },
    {
      "t": "3437",
      "d": "3500",
      "ts": "Okay, so, audience is here to see a play called Arabian Nights.   <br>"
    },
    {
      "t": "6707",
      "d": "1168",
      "ts": "	It's our show.   <br>"
    },
    {
      "t": "7875",
      "d": "4500",
      "ts": "Joe is our genie, and we literally control his movements.  <br>"
    },
    {
      "t": "11875",
      "d": "1534",
      "ts": "Show time. <br> "
    },
    {
      "t": "13080",
      "d": "1635",
      "ts": "	So, this is our friend Chris O'Neill. <br> "
    },
    {
      "t": "14715",
      "d": "2002",
      "ts": "	He's a Broadway star from The Book of Mormon.  <br> "
    },
    {
      "t": "16717",
      "d": "1735",
      "ts": "	♪♪  <br> "
    },
    {
      "t": "18452",
      "d": "2068",
      "ts": "	[Sighs] Life is tough.  <br> "
    },
    {
      "t": "20520",
      "d": "3003",
      "ts": "	If only I were a prince. <br> "
    }
  ]
};

// out.innerHTML = transcript.ts;
// var ts = JSON.parse(data);
for (var i=0 ; i<10 ; i++){
  document.getElementById('ts'+(i+1)).innerHTML = transcript.data[i].ts;
}

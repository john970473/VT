var transcript = {
  "data":[
    {
      "t": "0",
      "d": "1080",
      "ts": "	Do you ever do this? <br>"
    },
    {
      "t": "1080",
      "d": "5140",
      "ts": "	Be hella excited that all episodes of your show 'Youth and Consequences' come out on YouTube Red on March 7th? <br>"
    },
    {
      "t": "6220",
      "d": "3020",
      "ts": "Well yes, obviously, thank you. <br>"
    },
    {
      "t": "8240",
      "d": "4600",
      "ts": "But until March 7th when you can binge all episodes of Youth and Consequences on YouTube Red,  <br>"
    },
    {
      "t": "12840",
      "d": "5200",
      "ts": "I'm talking about when a friend discusses their problems with you.   <br> "
    },
    {
      "t": "17220",
      "d": "3280",
      "ts": "Do you immediately say, Oh, you know what you should do? <br> "
    },
    {
      "t": "19840",
      "d": "4680",
      "ts": "	I've noticed recently that I have a pattern.  <br> "
    },
    {
      "t": "23520",
      "d": "4440",
      "ts": "I offer unsolicited advice all the time when my friends have problems.  <br> "
    },
    {
      "t": "26960",
      "d": "3640",
      "ts": "	And I know the intentions are good,  <br> "
    },
    {
      "t": "28600",
      "d": "3540",
      "ts": "	because when we see someone we care about suffering,  <br> "
    }
  ]
};

// out.innerHTML = transcript.ts;
// var ts = JSON.parse(data);
for (var i=0 ; i<10 ; i++){
  document.getElementById('ts'+(i+1)).innerHTML = transcript.data[i].ts;
}

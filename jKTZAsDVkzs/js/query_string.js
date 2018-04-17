var transcript = {
  "data":[
    {
      "t": "4867",
      "d": "1320",
      "ts": "	Are we ready?  <br>"
    },
    {
      "t": "10000",
      "d": "2136",
      "ts": "	When do girls first learn that being pretty matters? <br>"
    },
    {
      "t": "13503",
      "d": "2889",
      "ts": "	I think girls probably experience it fresh out the womb. <br>"
    },
    {
      "t": "16392",
      "d": "1000",
      "ts": "	Can't escape it.  <br>"
    },
    {
      "t": "17392",
      "d": "1577",
      "ts": "Like, you're born into it.  <br> "
    },
    {
      "t": "18969",
      "d": "6234",
      "ts": "	I think you always know, even when you're little that pretty and not pretty are two things.  <br> "
    },
    {
      "t": "25203",
      "d": "6466",
      "ts": "The way that we talk to young girls as adults always involves looks.  <br> "
    },
    {
      "t": "31669",
      "d": "5000",
      "ts": "	Girls spend most of our adulthood trying to get over the fact that when we were young, all that we were told to be was pretty.  <br> "
    },
    {
      "t": "35083",
      "d": "2329",
      "ts": "	Where does the pressure to be pretty come from?  <br> "
    },
    {
      "t": "40456",
      "d": "3553",
      "ts": "	Oh God, I think it's, I think the pressure of pretty is coming from so many different places. <br> "
    }
  ]
};

// out.innerHTML = transcript.ts;
// var ts = JSON.parse(data);
for (var i=0 ; i<10 ; i++){
  document.getElementById('ts'+(i+1)).innerHTML = transcript.data[i].ts;
}

var mongoose = require('mongoose'),
    noodle = require('noodlejs');

mongoose.connect('mongodb://localhost/pottery_app',
                  { useNewUrlParser: true });

var Piece = require('./models/piece');

Piece.deleteMany({}, function(err){
  if(err){
    console.log(err);
  }
})

pieces = [
  {
    name: "Wide Rimmed Cornflower Bowl",
    category: "bowls",
    photos: ["http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p732_i1_w473.jpeg",
              "http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p732_i2_w631.jpeg"],
    priceDollars: 96,
    description: "Wheel thrown and slip trailed."
  },
  {
    name: "Blizzard Soup Bowls",
    category: "bowls",
    photos: ["http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p695_i7_w640.jpeg",
              "http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p695_i4_w640.jpeg"],
    priceDollars: 40,
    description: "Wheel Thrown with elaborate slip trailing design and layered glazes."
  },
  {
    name: "Large Black Slip Trailed Sunflower Serving Bowl",
    category: "bowls",
    photos: ["http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p703_i2_w640.jpeg",
              "http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p703_i1_w640.jpeg"],
    priceDollars: 40,
    description: "Wheel Thrown with elaborate slip trailing design and layered glazes."
  },
  {
    name: "Constellation Iced Coffee Pot",
    category: "pitchers_and_pouring_vessels",
    photos: ["http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p715_i2_w640.jpeg",
              "http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p715_i4_w640.jpeg"],
    priceDollars: 40,
    description: "Wheel Thrown with elaborate slip trailing design and layered glazes."
  },
  {
    name: "Golden Slip Trailed Pitcher",
    category: "pitchers_and_pouring_vessels",
    photos: ["http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i1_w640.jpeg",
              "http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i3_w640.jpeg"],
    priceDollars: 150,
    description: "Wheel thrown, altered spout, slip trailed, pulled handle"
  }
]

Piece.insertMany(pieces, function(err, p){
  if(err){
    console.log(err)
  }
  else {
    console.log("wrote to database")
  }
})

var mongoose = require('mongoose');

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
    name: 'Golden Slip Trailed Pitcher',
    category: 'pitchers_and_pouring_vessels',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i1_w640.jpeg',
      'http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i3_w640.jpeg'],
    priceDollars: 150,
    description: 'Wheel thrown, altered spout, slip trailed, pulled handle'
  },
  {
    name: 'Golden Slip Trailed Pitcher',
    category: 'pitchers_and_pouring_vessels',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i1_w640.jpeg',
      'http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i3_w640.jpeg'],
    priceDollars: 150,
    description: 'Wheel thrown, altered spout, slip trailed, pulled handle'
  },
  {
    name: 'Garden Berry Bowl with Plate',
    category: 'berry_bowls',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p678_i2_w640.jpeg'],
    priceDollars: 68,
    description: 'Wheel thrown, slip trailed design, incised.'
  },
  {
    name: 'Shino Serving Platter',
    category: 'plates_and_platters',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p591_i1_w640.jpeg'],
    priceDollars: 115,
    description: 'Wheel thrown, wax brush work, layered glazes'
  },
  {
    name: 'Golden Slip Trailed Pitcher',
    category: 'pitchers_and_pouring_vessels',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i1_w640.jpeg',
      'http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p717_i3_w640.jpeg'],
    priceDollars: 150,
    description: 'Wheel thrown, altered spout, slip trailed, pulled handle'
  },
  {
    name: 'America The Beautiful Mug',
    category: 'drinking_vessels',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p615_i2_w640.jpeg'],
    priceDollars: 40,
    description: 'Wheel thrown, pulled handle, wax resist brush work, layered oil spot glazes.'
  },
  {
    name: 'Medium Cross Stitch Pet Bowl',
    category: 'pet_bowls',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p568_i1_w640.jpeg'],
    priceDollars: 38,
    description: 'Wheel thrown, stamped paw prints, slip trailed swirls and dots with a bit of slip trailed cross stitch.'
  },
  {
    name: 'Blizzard Garlic Storage Jar',
    category: 'lidded_jars_caseroles_and_cannisters',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p692_i1_w640.jpeg'],
    priceDollars: 58,
    description: 'Wheel thrown jar and lid with sculpted knob, pierce and slip trailed design, layered glazes.'
  },
  {
    name: 'Sodium Silicate Lidded Jar',
    category: 'sodium_silicate_vases_and_jars',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p168_i1_w640.jpeg'],
    priceDollars: 130,
    description: 'Wheel thrown with tinted sodium silicate. Wheel thrown and carved lid with sculpted finial knob.'
  },
  {
    name: 'Silver Mystery Vase',
    category: 'vases_and_art_vessels',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p495_i1_w640.jpeg'],
    priceDollars: 52,
    description: 'Wheel Thrown, Cobalt Slip Trailed (that\'s the mystery part), layered Constellation glazes.'
  },
  {
    name: 'Shino Soup Bowls',
    category: 'dinnerware',
    photos: ['http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p592_i1_w640.jpeg'],
    priceDollars: 42,
    description: 'Wheel thrown, wax design, layered glazes'
  }
]

Piece.insertMany(pieces, function(err, p){
  if(err){
    console.log(err)
  }
  else {
    console.log('wrote to database')
  }
})

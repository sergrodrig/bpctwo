/*
 Navicat Premium Data Transfer

 Source Server         : mongo atlas bpc
 Source Server Type    : MongoDB
 Source Server Version : 40406
 Source Host           : cluster0.8ksor.mongodb.net:27017
 Source Schema         : blog

 Target Server Type    : MongoDB
 Target Server Version : 40406
 File Encoding         : 65001

 Date: 04/08/2021 14:03:04
*/

// ----------------------------
// Collection structure for blogposts
// ----------------------------
db.getCollection("blogposts").drop();
db.createCollection("blogposts");
db.getCollection("blogposts").createIndex(
  {
    slug: NumberInt("1"),
  },
  {
    name: "slug_1",
    background: true,
    unique: true,
  }
);
db.getCollection("blogposts").createIndex(
  {
    author: NumberInt("1"),
  },
  {
    name: "author_1",
    background: true,
  }
);

// ----------------------------
// Documents of blogposts
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codclans
// ----------------------------
db.getCollection("codclans").drop();
db.createCollection("codclans");

// ----------------------------
// Documents of codclans
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codclans").insert([
  {
    _id: ObjectId("60a01fdb69c7bc4029a04f39"),
    name: "FPMR.",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codclans").insert([
  {
    _id: ObjectId("60a01fe069c7bc4029a04f3a"),
    name: "BP.C",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codclans").insert([
  {
    _id: ObjectId("60a01fe269c7bc4029a04f3b"),
    name: "CRK",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codclans").insert([
  {
    _id: ObjectId("60a0235d69c7bc4029a04f3c"),
    name: "Sh369",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codclans").insert([
  {
    _id: ObjectId("60a027aa0ba23d41a38d01ba"),
    name: "SKF'",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codclans").insert([
  {
    _id: ObjectId("60ab32f9b895593e6cf4303a"),
    name: "P31M",
    __v: NumberInt("0"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codfactions
// ----------------------------
db.getCollection("codfactions").drop();
db.createCollection("codfactions");

// ----------------------------
// Documents of codfactions
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codfactions").insert([
  {
    _id: ObjectId("60a65cf67495121667535aba"),
    name: "Cronus Boys",
    initials: "CRB",
  },
]);
db.getCollection("codfactions").insert([
  {
    _id: ObjectId("60a65cf67495121667535ab9"),
    name: "Chichigans",
    initials: "CCG",
  },
]);
db.getCollection("codfactions").insert([
  {
    _id: ObjectId("60a65cf67495121667535ab8"),
    name: "The Wutang Lag",
    initials: "TWL",
  },
]);
db.getCollection("codfactions").insert([
  {
    _id: ObjectId("60a65cf67495121667535abb"),
    name: "CRK",
    initials: "CRK",
  },
]);
db.getCollection("codfactions").insert([
  {
    _id: ObjectId("60a65cf67495121667535ab6"),
    name: "Mancoster United",
    initials: "MCU",
  },
]);
db.getCollection("codfactions").insert([
  {
    _id: ObjectId("60a65cf67495121667535ab7"),
    name: "Los del Gulag",
    initials: "LDG",
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codleagueresults
// ----------------------------
db.getCollection("codleagueresults").drop();
db.createCollection("codleagueresults");
db.getCollection("codleagueresults").createIndex(
  {
    week: NumberInt("1"),
  },
  {
    name: "week_1",
    background: true,
  }
);
db.getCollection("codleagueresults").createIndex(
  {
    homeFaction: NumberInt("1"),
  },
  {
    name: "homeFaction_1",
    background: true,
  }
);
db.getCollection("codleagueresults").createIndex(
  {
    awayFaction: NumberInt("1"),
  },
  {
    name: "awayFaction_1",
    background: true,
  }
);

// ----------------------------
// Documents of codleagueresults
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68508ee6cac40d96b0a97"),
    week: ObjectId("60a7d6ff9846b5b27a014ff9"),
    homeFaction: ObjectId("60a65cf67495121667535aba"),
    awayFaction: ObjectId("60a65cf67495121667535abb"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("1"),
    __v: NumberInt("0"),
    season: "1",
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68de162a79b411da3dc9a"),
    season: "1",
    week: ObjectId("60a7d7069846b5b27a014ffc"),
    homeFaction: ObjectId("60a65cf67495121667535ab9"),
    awayFaction: ObjectId("60a65cf67495121667535abb"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("8"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68606e6c6ee410db649ab"),
    season: "1",
    week: ObjectId("60a7d7029846b5b27a014ffa"),
    homeFaction: ObjectId("60a65cf67495121667535ab7"),
    awayFaction: ObjectId("60a65cf67495121667535aba"),
    __v: NumberInt("0"),
    awayRounds: NumberInt("28"),
    awayScore: NumberInt("3"),
    homeRounds: NumberInt("28"),
    homeScore: NumberInt("3"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e2962a79b411da3dc9e"),
    season: "1",
    week: ObjectId("60a7d71d9846b5b27a015002"),
    homeFaction: ObjectId("60a65cf67495121667535ab6"),
    awayFaction: ObjectId("60a65cf67495121667535ab8"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("12"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68dee62a79b411da3dc9b"),
    season: "1",
    week: ObjectId("60a7d70a9846b5b27a014ffd"),
    homeFaction: ObjectId("60a65cf67495121667535abb"),
    awayFaction: ObjectId("60a65cf67495121667535ab7"),
    homeScore: NumberInt("1"),
    awayScore: NumberInt("5"),
    homeRounds: NumberInt("23"),
    awayRounds: NumberInt("36"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e5b62a79b411da3dca2"),
    season: "1",
    week: ObjectId("60a7d71a9846b5b27a015001"),
    homeFaction: ObjectId("60a65cf67495121667535ab8"),
    awayFaction: ObjectId("60a65cf67495121667535ab7"),
    homeScore: NumberInt("0"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("8"),
    awayRounds: NumberInt("36"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e9062a79b411da3dca5"),
    season: "1",
    week: ObjectId("60a7d7179846b5b27a015000"),
    homeFaction: ObjectId("60a65cf67495121667535ab7"),
    awayFaction: ObjectId("60a65cf67495121667535ab9"),
    homeScore: NumberInt("0"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("11"),
    awayRounds: NumberInt("36"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68d5662a79b411da3dc96"),
    season: "1",
    week: ObjectId("60a7d7049846b5b27a014ffb"),
    homeFaction: ObjectId("60a65cf67495121667535ab9"),
    awayFaction: ObjectId("60a65cf67495121667535ab7"),
    homeScore: NumberInt("5"),
    awayScore: NumberInt("1"),
    homeRounds: NumberInt("35"),
    awayRounds: NumberInt("14"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e3162a79b411da3dc9f"),
    season: "1",
    week: ObjectId("60a7d71d9846b5b27a015002"),
    homeFaction: ObjectId("60a65cf67495121667535aba"),
    awayFaction: ObjectId("60a65cf67495121667535ab9"),
    homeScore: NumberInt("0"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("0"),
    awayRounds: NumberInt("36"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68ebb62a79b411da3dca9"),
    season: "1",
    week: ObjectId("60a7d7139846b5b27a014fff"),
    homeFaction: ObjectId("60a65cf67495121667535aba"),
    awayFaction: ObjectId("60a65cf67495121667535ab7"),
    homeScore: NumberInt("0"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("10"),
    awayRounds: NumberInt("36"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68ead62a79b411da3dca8"),
    season: "1",
    week: ObjectId("60a7d7139846b5b27a014fff"),
    homeFaction: ObjectId("60a65cf67495121667535abb"),
    awayFaction: ObjectId("60a65cf67495121667535ab8"),
    homeScore: NumberInt("1"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("21"),
    awayRounds: NumberInt("34"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a6864d62a79b411da3dc94"),
    season: "1",
    week: ObjectId("60a7d7029846b5b27a014ffa"),
    homeFaction: ObjectId("60a65cf67495121667535ab8"),
    awayFaction: ObjectId("60a65cf67495121667535abb"),
    homeScore: NumberInt("5"),
    awayScore: NumberInt("1"),
    homeRounds: NumberInt("34"),
    awayRounds: NumberInt("17"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a684b6ee6cac40d96b0a95"),
    week: ObjectId("60a7d6ff9846b5b27a014ff9"),
    homeFaction: ObjectId("60a65cf67495121667535ab6"),
    awayFaction: ObjectId("60a65cf67495121667535ab7"),
    homeScore: NumberInt("3"),
    awayScore: NumberInt("3"),
    homeRounds: NumberInt("29"),
    awayRounds: NumberInt("20"),
    __v: NumberInt("0"),
    season: "1",
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68dd362a79b411da3dc99"),
    season: "1",
    week: ObjectId("60a7d7069846b5b27a014ffc"),
    homeFaction: ObjectId("60a65cf67495121667535ab7"),
    awayFaction: ObjectId("60a65cf67495121667535ab8"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("10"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68dbe62a79b411da3dc97"),
    season: "1",
    week: ObjectId("60a7d7049846b5b27a014ffb"),
    homeFaction: ObjectId("60a65cf67495121667535abb"),
    awayFaction: ObjectId("60a65cf67495121667535ab6"),
    homeScore: NumberInt("3"),
    awayScore: NumberInt("3"),
    homeRounds: NumberInt("29"),
    awayRounds: NumberInt("27"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e3a62a79b411da3dca0"),
    season: "1",
    week: ObjectId("60a7d71d9846b5b27a015002"),
    homeFaction: ObjectId("60a65cf67495121667535ab7"),
    awayFaction: ObjectId("60a65cf67495121667535abb"),
    homeScore: NumberInt("5"),
    awayScore: NumberInt("1"),
    homeRounds: NumberInt("34"),
    awayRounds: NumberInt("15"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68ea562a79b411da3dca7"),
    season: "1",
    week: ObjectId("60a7d7139846b5b27a014fff"),
    homeFaction: ObjectId("60a65cf67495121667535ab9"),
    awayFaction: ObjectId("60a65cf67495121667535ab6"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("3"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68df962a79b411da3dc9c"),
    season: "1",
    week: ObjectId("60a7d70a9846b5b27a014ffd"),
    homeFaction: ObjectId("60a65cf67495121667535ab9"),
    awayFaction: ObjectId("60a65cf67495121667535aba"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("12"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e6262a79b411da3dca3"),
    season: "1",
    week: ObjectId("60a7d71a9846b5b27a015001"),
    homeFaction: ObjectId("60a65cf67495121667535aba"),
    awayFaction: ObjectId("60a65cf67495121667535ab6"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("0"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e7262a79b411da3dca4"),
    season: "1",
    week: ObjectId("60a7d7179846b5b27a015000"),
    homeFaction: ObjectId("60a65cf67495121667535ab8"),
    awayFaction: ObjectId("60a65cf67495121667535aba"),
    homeScore: NumberInt("1"),
    awayScore: NumberInt("5"),
    homeRounds: NumberInt("18"),
    awayRounds: NumberInt("34"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68ee962a79b411da3dcac"),
    season: "1",
    week: ObjectId("60a7d70e9846b5b27a014ffe"),
    homeFaction: ObjectId("60a65cf67495121667535abb"),
    awayFaction: ObjectId("60a65cf67495121667535aba"),
    homeScore: NumberInt("1"),
    awayScore: NumberInt("5"),
    homeRounds: NumberInt("14"),
    awayRounds: NumberInt("34"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a684d7ee6cac40d96b0a96"),
    week: ObjectId("60a7d6ff9846b5b27a014ff9"),
    homeFaction: ObjectId("60a65cf67495121667535ab8"),
    awayFaction: ObjectId("60a65cf67495121667535ab9"),
    homeScore: NumberInt("0"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("1"),
    awayRounds: NumberInt("36"),
    __v: NumberInt("0"),
    season: "1",
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e1162a79b411da3dc9d"),
    season: "1",
    week: ObjectId("60a7d70a9846b5b27a014ffd"),
    homeFaction: ObjectId("60a65cf67495121667535ab8"),
    awayFaction: ObjectId("60a65cf67495121667535ab6"),
    homeScore: NumberInt("3"),
    awayScore: NumberInt("3"),
    homeRounds: NumberInt("29"),
    awayRounds: NumberInt("26"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a6858d47bfff40fcae7bf7"),
    season: "1",
    week: ObjectId("60a7d7029846b5b27a014ffa"),
    homeFaction: ObjectId("60a65cf67495121667535ab6"),
    awayFaction: ObjectId("60a65cf67495121667535ab9"),
    __v: NumberInt("0"),
    awayRounds: NumberInt("36"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("4"),
    homeScore: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68dc962a79b411da3dc98"),
    season: "1",
    week: ObjectId("60a7d7069846b5b27a014ffc"),
    homeFaction: ObjectId("60a65cf67495121667535ab6"),
    awayFaction: ObjectId("60a65cf67495121667535aba"),
    homeScore: NumberInt("2"),
    awayScore: NumberInt("4"),
    homeRounds: NumberInt("24"),
    awayRounds: NumberInt("32"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68ec862a79b411da3dcaa"),
    season: "1",
    week: ObjectId("60a7d70e9846b5b27a014ffe"),
    homeFaction: ObjectId("60a65cf67495121667535ab7"),
    awayFaction: ObjectId("60a65cf67495121667535ab6"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("9"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68d4562a79b411da3dc95"),
    season: "1",
    week: ObjectId("60a7d7049846b5b27a014ffb"),
    homeFaction: ObjectId("60a65cf67495121667535aba"),
    awayFaction: ObjectId("60a65cf67495121667535ab8"),
    homeScore: NumberInt("4"),
    awayScore: NumberInt("2"),
    homeRounds: NumberInt("30"),
    awayRounds: NumberInt("23"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e4762a79b411da3dca1"),
    season: "1",
    week: ObjectId("60a7d71a9846b5b27a015001"),
    homeFaction: ObjectId("60a65cf67495121667535abb"),
    awayFaction: ObjectId("60a65cf67495121667535ab9"),
    homeScore: NumberInt("2"),
    awayScore: NumberInt("4"),
    homeRounds: NumberInt("20"),
    awayRounds: NumberInt("31"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68ee062a79b411da3dcab"),
    season: "1",
    week: ObjectId("60a7d70e9846b5b27a014ffe"),
    homeFaction: ObjectId("60a65cf67495121667535ab9"),
    awayFaction: ObjectId("60a65cf67495121667535ab8"),
    homeScore: NumberInt("6"),
    awayScore: NumberInt("0"),
    homeRounds: NumberInt("36"),
    awayRounds: NumberInt("8"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codleagueresults").insert([
  {
    _id: ObjectId("60a68e9b62a79b411da3dca6"),
    season: "1",
    week: ObjectId("60a7d7179846b5b27a015000"),
    homeFaction: ObjectId("60a65cf67495121667535ab6"),
    awayFaction: ObjectId("60a65cf67495121667535abb"),
    homeScore: NumberInt("0"),
    awayScore: NumberInt("6"),
    homeRounds: NumberInt("9"),
    awayRounds: NumberInt("36"),
    __v: NumberInt("0"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codleagueseasons
// ----------------------------
db.getCollection("codleagueseasons").drop();
db.createCollection("codleagueseasons");

// ----------------------------
// Documents of codleagueseasons
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codleagueseasons").insert([
  {
    _id: ObjectId("60ab29dfe105a53ce956ebc1"),
    season: NumberInt("1"),
    __v: NumberInt("0"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codleaguetables
// ----------------------------
db.getCollection("codleaguetables").drop();
db.createCollection("codleaguetables");
db.getCollection("codleaguetables").createIndex(
  {
    faction: NumberInt("1"),
  },
  {
    name: "faction_1",
    background: true,
  }
);

// ----------------------------
// Documents of codleaguetables
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codleaguetables").insert([
  {
    _id: ObjectId("60ab346d6567ae3f1faefec2"),
    faction: ObjectId("60a65cf67495121667535ab9"),
    played: NumberInt("10"),
    score: NumberInt("30"),
    __v: NumberInt("0"),
    totalRoundsLost: NumberInt("89"),
    totalRoundsWon: NumberInt("354"),
  },
]);
db.getCollection("codleaguetables").insert([
  {
    _id: ObjectId("60ab347e6567ae3f1faefec3"),
    faction: ObjectId("60a65cf67495121667535aba"),
    played: NumberInt("10"),
    score: NumberInt("19"),
    __v: NumberInt("0"),
    totalRoundsLost: NumberInt("216"),
    totalRoundsWon: NumberInt("252"),
  },
]);
db.getCollection("codleaguetables").insert([
  {
    _id: ObjectId("60ab348c6567ae3f1faefec4"),
    faction: ObjectId("60a65cf67495121667535ab8"),
    played: NumberInt("10"),
    score: NumberInt("7"),
    __v: NumberInt("0"),
    totalRoundsLost: NumberInt("308"),
    totalRoundsWon: NumberInt("186"),
  },
]);
db.getCollection("codleaguetables").insert([
  {
    _id: ObjectId("60ab34926567ae3f1faefec5"),
    faction: ObjectId("60a65cf67495121667535ab7"),
    played: NumberInt("10"),
    score: NumberInt("20"),
    __v: NumberInt("0"),
    totalRoundsLost: NumberInt("194"),
    totalRoundsWon: NumberInt("294"),
  },
]);
db.getCollection("codleaguetables").insert([
  {
    _id: ObjectId("60ab34996567ae3f1faefec6"),
    faction: ObjectId("60a65cf67495121667535ab6"),
    played: NumberInt("10"),
    score: NumberInt("6"),
    __v: NumberInt("0"),
    totalRoundsLost: NumberInt("311"),
    totalRoundsWon: NumberInt("157"),
  },
]);
db.getCollection("codleaguetables").insert([
  {
    _id: ObjectId("60ab349f6567ae3f1faefec7"),
    faction: ObjectId("60a65cf67495121667535abb"),
    played: NumberInt("10"),
    score: NumberInt("4"),
    __v: NumberInt("0"),
    totalRoundsLost: NumberInt("311"),
    totalRoundsWon: NumberInt("184"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codleagueweeks
// ----------------------------
db.getCollection("codleagueweeks").drop();
db.createCollection("codleagueweeks");
db.getCollection("codleagueweeks").createIndex(
  {
    season: NumberInt("1"),
  },
  {
    name: "season_1",
    background: true,
  }
);

// ----------------------------
// Documents of codleagueweeks
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d71d9846b5b27a015002"),
    week: NumberInt("10"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-07-23T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d70e9846b5b27a014ffe"),
    week: NumberInt("6"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-06-25T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d7069846b5b27a014ffc"),
    week: NumberInt("4"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-06-04T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d7049846b5b27a014ffb"),
    week: NumberInt("3"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    __v: NumberInt("0"),
    date_offset: "-04:00",
    date_utc: ISODate("2021-05-28T02:00:00Z"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d71a9846b5b27a015001"),
    week: NumberInt("9"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-07-16T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d7139846b5b27a014fff"),
    week: NumberInt("7"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-07-02T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d70a9846b5b27a014ffd"),
    week: NumberInt("5"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-06-11T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d7179846b5b27a015000"),
    week: NumberInt("8"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-07-09T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d6ff9846b5b27a014ff9"),
    week: NumberInt("1"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-05-14T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
db.getCollection("codleagueweeks").insert([
  {
    _id: ObjectId("60a7d7029846b5b27a014ffa"),
    week: NumberInt("2"),
    season: ObjectId("60ab29dfe105a53ce956ebc1"),
    date_utc: ISODate("2021-05-21T02:00:00Z"),
    date_offset: "-04:00",
    __v: NumberInt("0"),
    open: false,
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codmapimages
// ----------------------------
db.getCollection("codmapimages").drop();
db.createCollection("codmapimages");

// ----------------------------
// Documents of codmapimages
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d811b8d9e23761fcbb0"),
    image: {
      id: ObjectId("60a66d7d1b8d9e23761fcbaf"),
      filename: "AZHIR_CAVE.png",
      originalFilename: "AZHIR_CAVE.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "a78ac874ea5324940baa3cff9d9b38d4",
        public_id: "mapas/60a66d7d1b8d9e23761fcbaf",
        version: NumberInt("1621519743"),
        version_id: "4b964b88bc83a93f6850b9064ef2f27e",
        signature: "d238ec692b943c21648a3eed0b32d4a47f199cb6",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:09:03Z",
        tags: [],
        bytes: NumberInt("719730"),
        type: "upload",
        etag: "5bff2536a27c98089349f2d6ac5ba6f1",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519743/mapas/60a66d7d1b8d9e23761fcbaf.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519743/mapas/60a66d7d1b8d9e23761fcbaf.png",
        original_filename: "file",
      },
    },
    altText: "Azhir Cave map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a67013634a1f23ded66ad1"),
    image: {
      id: ObjectId("60a6700f634a1f23ded66ad0"),
      filename: "ST_PETROGRAD.png",
      originalFilename: "ST_PETROGRAD.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "dc5c84b0e647579e4726ff18d1d31ab3",
        public_id: "mapas/60a6700f634a1f23ded66ad0",
        version: NumberInt("1621520401"),
        version_id: "ac972c662135a85e764a1c6f8ad39b92",
        signature: "4cc7880fd501de1beea42ce11d4276c9b58a1cd4",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:20:01Z",
        tags: [],
        bytes: NumberInt("593143"),
        type: "upload",
        etag: "0040ca0d419e4f339e305295271113de",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520401/mapas/60a6700f634a1f23ded66ad0.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520401/mapas/60a6700f634a1f23ded66ad0.png",
        original_filename: "file",
      },
    },
    altText: "St Petrograd map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66edc1b8d9e23761fcbd6"),
    image: {
      id: ObjectId("60a66eda1b8d9e23761fcbd5"),
      filename: "KING.png",
      originalFilename: "KING.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "28003bdac1df28a81b4413e66fe6eecf",
        public_id: "mapas/60a66eda1b8d9e23761fcbd5",
        version: NumberInt("1621520092"),
        version_id: "6f538142a3d923dd5193c7d9bdd2f2cd",
        signature: "8a21738c95287bf4f62492609a79bf96ec145159",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:14:52Z",
        tags: [],
        bytes: NumberInt("866884"),
        type: "upload",
        etag: "39a8fddb3483a12b0f42ccea50d7d044",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520092/mapas/60a66eda1b8d9e23761fcbd5.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520092/mapas/60a66eda1b8d9e23761fcbd5.png",
        original_filename: "file",
      },
    },
    altText: "King map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66f2c1b8d9e23761fcbe0"),
    image: {
      id: ObjectId("60a66f2a1b8d9e23761fcbde"),
      filename: "PICADILLY.png",
      originalFilename: "PICADILLY.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "941bc9bc18a40beea7aabd0abe32cce2",
        public_id: "mapas/60a66f2a1b8d9e23761fcbde",
        version: NumberInt("1621520172"),
        version_id: "2db76dd6dbc597386e094eae68eaa005",
        signature: "827b2bfd89f32e23b09deec0888c6517ba438d1e",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:16:12Z",
        tags: [],
        bytes: NumberInt("643955"),
        type: "upload",
        etag: "975c1e6cb0812152ce1138ffddcd0140",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520172/mapas/60a66f2a1b8d9e23761fcbde.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520172/mapas/60a66f2a1b8d9e23761fcbde.png",
        original_filename: "file",
      },
    },
    altText: "Picadilly map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a6704e634a1f23ded66adb"),
    image: {
      id: ObjectId("60a6704b634a1f23ded66ada"),
      filename: "VACANT.png",
      originalFilename: "VACANT.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "1c4e928a86753e9d1915e3f5c3e5b79e",
        public_id: "mapas/60a6704b634a1f23ded66ada",
        version: NumberInt("1621520461"),
        version_id: "c35267d64743c67d881cfe7f509304f7",
        signature: "d28abb34bd1f872295049f2b4d2938eda56e3ac7",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:21:01Z",
        tags: [],
        bytes: NumberInt("685041"),
        type: "upload",
        etag: "c1180a7a9840e3b3ab5bea45be18c87e",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520461/mapas/60a6704b634a1f23ded66ada.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520461/mapas/60a6704b634a1f23ded66ada.png",
        original_filename: "file",
      },
    },
    altText: "Vacant map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e021b8d9e23761fcbbe"),
    image: {
      id: ObjectId("60a66dff1b8d9e23761fcbbd"),
      filename: "EUPHRATES_BRIDGE.png",
      originalFilename: "EUPHRATES_BRIDGE.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "84188158ead7fa0cc959f598fce2ca3d",
        public_id: "mapas/60a66dff1b8d9e23761fcbbd",
        version: NumberInt("1621519873"),
        version_id: "b2eebe57564d11dfeae2859c734cc949",
        signature: "b5065fce2d58361b6a9c7cbcc052a7dd5e022350",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:11:13Z",
        tags: [],
        bytes: NumberInt("763259"),
        type: "upload",
        etag: "47d7720274900fbcbf628c4bd0afbbcf",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519873/mapas/60a66dff1b8d9e23761fcbbd.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519873/mapas/60a66dff1b8d9e23761fcbbd.png",
        original_filename: "file",
      },
    },
    altText: "Euphrates Bridge map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e251b8d9e23761fcbc2"),
    image: {
      id: ObjectId("60a66e221b8d9e23761fcbc1"),
      filename: "GULAG_SHOWERS.png",
      originalFilename: "GULAG_SHOWERS.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "08b4eb7c6b7d8ea301e581fb74d6116f",
        public_id: "mapas/60a66e221b8d9e23761fcbc1",
        version: NumberInt("1621519908"),
        version_id: "9f74adf911e6094bb15f970b2cd6f929",
        signature: "b69827f4a183134ff56b755674474992151e34d2",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:11:48Z",
        tags: [],
        bytes: NumberInt("863269"),
        type: "upload",
        etag: "6526f187112ffde1fa18f3b112006389",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519908/mapas/60a66e221b8d9e23761fcbc1.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519908/mapas/60a66e221b8d9e23761fcbc1.png",
        original_filename: "file",
      },
    },
    altText: "Gulag Showers map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66f7e634a1f23ded66ac1"),
    image: {
      id: ObjectId("60a66f7b634a1f23ded66ac0"),
      filename: "RAMMAZA.png",
      originalFilename: "RAMMAZA.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "1ea3699d7ce91d62888016dcb3b1a60e",
        public_id: "mapas/60a66f7b634a1f23ded66ac0",
        version: NumberInt("1621520252"),
        version_id: "557500da26ec6314c6de8c0ab0e0ba25",
        signature: "d4d64a3f26cc609cecc8596afc4021e3a97cf5b1",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:17:32Z",
        tags: [],
        bytes: NumberInt("647411"),
        type: "upload",
        etag: "6002e530ff39fb86524f814dfba71127",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520252/mapas/60a66f7b634a1f23ded66ac0.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520252/mapas/60a66f7b634a1f23ded66ac0.png",
        original_filename: "file",
      },
    },
    altText: "Rammaza map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66dd21b8d9e23761fcbb9"),
    altText: "Crash map image",
    __v: NumberInt("0"),
    image: {
      id: ObjectId("60a66dd81b8d9e23761fcbba"),
      filename: "CRASH.png",
      originalFilename: "CRASH.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "1154bfbdca7c3348159fb649d7fe7ab7",
        public_id: "mapas/60a66dd81b8d9e23761fcbba",
        version: NumberInt("1621519835"),
        version_id: "ce040bb8fc0bd9e824aa2b0d83a7ddd2",
        signature: "0d6241f8e868674d91a1b2f1c6cf8c5b4220971c",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:10:35Z",
        tags: [],
        bytes: NumberInt("727504"),
        type: "upload",
        etag: "d221941d06af36bc7ffecbfc1b6817b1",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519835/mapas/60a66dd81b8d9e23761fcbba.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519835/mapas/60a66dd81b8d9e23761fcbba.png",
        original_filename: "file",
      },
    },
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66f021b8d9e23761fcbda"),
    image: {
      id: ObjectId("60a66eff1b8d9e23761fcbd9"),
      filename: "MIALSTORE_TANK_FACTORY.png",
      originalFilename: "MIALSTORE_TANK_FACTORY.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "6076700107c7f7e8c0afe4b4e6a08345",
        public_id: "mapas/60a66eff1b8d9e23761fcbd9",
        version: NumberInt("1621520129"),
        version_id: "a94621bebb7dc2d996d22e95e33e3ee3",
        signature: "12291776608043c94182a39c80f4b067e8ae2c99",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:15:29Z",
        tags: [],
        bytes: NumberInt("828700"),
        type: "upload",
        etag: "194b3a555662e715670cd5e0e28dfa98",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520129/mapas/60a66eff1b8d9e23761fcbd9.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520129/mapas/60a66eff1b8d9e23761fcbd9.png",
        original_filename: "file",
      },
    },
    altText: "Mialstore Tank Factory map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66f161b8d9e23761fcbdb"),
    altText: "Petrov Oil Rig map image",
    __v: NumberInt("0"),
    image: {
      id: ObjectId("60a66f1b1b8d9e23761fcbdc"),
      filename: "PETROV_OIL_RIG.png",
      originalFilename: "PETROV_OIL_RIG.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "a2b53a8062fcdc0a5305be9fc78de5b4",
        public_id: "mapas/60a66f1b1b8d9e23761fcbdc",
        version: NumberInt("1621520157"),
        version_id: "c10b7451dd8ba050409830fbc0ebef5d",
        signature: "6567d40ceaad18fabd4d498f5e7f46b9b4202fff",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:15:57Z",
        tags: [],
        bytes: NumberInt("632073"),
        type: "upload",
        etag: "ebf1f040818f53529a8c347c7872b4ef",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520157/mapas/60a66f1b1b8d9e23761fcbdc.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520157/mapas/60a66f1b1b8d9e23761fcbdc.png",
        original_filename: "file",
      },
    },
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66f59634a1f23ded66abd"),
    image: {
      id: ObjectId("60a66f56634a1f23ded66abc"),
      filename: "PINE.png",
      originalFilename: "PINE.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "23da0f14ad79f5923d8bba132fbfd546",
        public_id: "mapas/60a66f56634a1f23ded66abc",
        version: NumberInt("1621520216"),
        version_id: "2a4b76199434173083ddf0fe7a6c4b03",
        signature: "acb7dd2753da027fe37cf4497e72469a1649d30d",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:16:56Z",
        tags: [],
        bytes: NumberInt("931355"),
        type: "upload",
        etag: "aafb9185dcc983576a35160723609277",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520216/mapas/60a66f56634a1f23ded66abc.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520216/mapas/60a66f56634a1f23ded66abc.png",
        original_filename: "file",
      },
    },
    altText: "Pine map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d2b1b8d9e23761fcba8"),
    image: {
      id: ObjectId("60a66d271b8d9e23761fcba7"),
      filename: "ARKLOV_PEAK.png",
      originalFilename: "ARKLOV_PEAK.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "36b66f8746461ca28e2a491de273716f",
        public_id: "mapas/60a66d271b8d9e23761fcba7",
        version: NumberInt("1621519657"),
        version_id: "55a84955d3991451ebff56520ccabb50",
        signature: "169c77a776d53cd14c515209e0f2c127af1ba918",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:07:37Z",
        tags: [],
        bytes: NumberInt("628275"),
        type: "upload",
        etag: "631088b95991f692101b50023a9ce7c6",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519657/mapas/60a66d271b8d9e23761fcba7.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519657/mapas/60a66d271b8d9e23761fcba7.png",
        original_filename: "file",
      },
    },
    altText: "Arklov Peak map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d721b8d9e23761fcbae"),
    image: {
      id: ObjectId("60a66d6f1b8d9e23761fcbad"),
      filename: "AZHIR_CAVE_(night).png",
      originalFilename: "AZHIR_CAVE_(night).png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "3c6c9546c496e862b65781c41ef6b482",
        public_id: "mapas/60a66d6f1b8d9e23761fcbad",
        version: NumberInt("1621519729"),
        version_id: "d056a0a9b320af60d2751d4d37303cf7",
        signature: "e45bb6679deebee397f7e863c95a854667bde597",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:08:49Z",
        tags: [],
        bytes: NumberInt("807674"),
        type: "upload",
        etag: "7b86d87e8c06a735112aaadbce794b78",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519729/mapas/60a66d6f1b8d9e23761fcbad.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519729/mapas/60a66d6f1b8d9e23761fcbad.png",
        original_filename: "file",
      },
    },
    altText: "Azhir Cave Night map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66925c6f22622be7c81eb"),
    image: {
      id: ObjectId("60a66923c6f22622be7c81ea"),
      filename: "AISLE_9.png",
      originalFilename: "AISLE_9.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "7816a35d4a5cf628f60c6942d1868f50",
        public_id: "mapas/60a66923c6f22622be7c81ea",
        version: NumberInt("1621518629"),
        version_id: "b86f87c2466f172fd820e1c16272e9d0",
        signature: "c716b66f47197fcff5d1337dfee84c8168aa0506",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T13:50:29Z",
        tags: [],
        bytes: NumberInt("543666"),
        type: "upload",
        etag: "3aca4747930e1f94a10d51e20e62d823",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621518629/mapas/60a66923c6f22622be7c81ea.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621518629/mapas/60a66923c6f22622be7c81ea.png",
        original_filename: "file",
      },
    },
    __v: NumberInt("0"),
    altText: "Aisle 9 map image",
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d5a1b8d9e23761fcbac"),
    image: {
      id: ObjectId("60a66d561b8d9e23761fcbab"),
      filename: "ATRIUM.png",
      originalFilename: "ATRIUM.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "15857347c016145250194abcf076deca",
        public_id: "mapas/60a66d561b8d9e23761fcbab",
        version: NumberInt("1621519705"),
        version_id: "14ab2311cdde95a7dc7eb2cca36cccec",
        signature: "d241888523df9d73dd8d3667761e125030f102ce",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:08:25Z",
        tags: [],
        bytes: NumberInt("903321"),
        type: "upload",
        etag: "d7714ebcb6962108c03133df9dea116d",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519705/mapas/60a66d561b8d9e23761fcbab.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519705/mapas/60a66d561b8d9e23761fcbab.png",
        original_filename: "file",
      },
    },
    altText: "Atrium map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d421b8d9e23761fcbaa"),
    image: {
      id: ObjectId("60a66d3f1b8d9e23761fcba9"),
      filename: "ATLAS_SUPERSTORE.png",
      originalFilename: "ATLAS_SUPERSTORE.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "d2925fd4e9cf6746c1c79097057026f8",
        public_id: "mapas/60a66d3f1b8d9e23761fcba9",
        version: NumberInt("1621519681"),
        version_id: "6e821b8707b90c96fc5c0656fded66f6",
        signature: "e08c8c030e4acd34452a92a2a410f5c54e5588c1",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:08:01Z",
        tags: [],
        bytes: NumberInt("608295"),
        type: "upload",
        etag: "b6202392c9d52112d9738a2f07ed61c3",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519681/mapas/60a66d3f1b8d9e23761fcba9.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519681/mapas/60a66d3f1b8d9e23761fcba9.png",
        original_filename: "file",
      },
    },
    altText: "Atlas Superstore map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66db81b8d9e23761fcbb6"),
    image: {
      id: ObjectId("60a66db11b8d9e23761fcbb5"),
      filename: "CARGO.png",
      originalFilename: "CARGO.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "8fa05414faff1d527af11f22b099524b",
        public_id: "mapas/60a66db11b8d9e23761fcbb5",
        version: NumberInt("1621519799"),
        version_id: "711c370a0bdb74bd6093af5c19c54cc0",
        signature: "bd33a75dbfe6c03bb126c4132061349ea390b19c",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:09:59Z",
        tags: [],
        bytes: NumberInt("845049"),
        type: "upload",
        etag: "ccaffec90281324d3220a498291cca3b",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519799/mapas/60a66db11b8d9e23761fcbb5.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519799/mapas/60a66db11b8d9e23761fcbb5.png",
        original_filename: "file",
      },
    },
    altText: "Cargo map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66ef11b8d9e23761fcbd8"),
    image: {
      id: ObjectId("60a66eed1b8d9e23761fcbd7"),
      filename: "LIVESTOCK.png",
      originalFilename: "LIVESTOCK.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "cf59cd6d12eb3098502813321e2f9fbb",
        public_id: "mapas/60a66eed1b8d9e23761fcbd7",
        version: NumberInt("1621520112"),
        version_id: "037369ed9347ccd6313bf4386b0be7b2",
        signature: "a3925e6a1d0794180505623b7acb8489b4434d12",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:15:12Z",
        tags: [],
        bytes: NumberInt("810188"),
        type: "upload",
        etag: "93f0b55db4711f3907ee6b48211f5a1f",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520112/mapas/60a66eed1b8d9e23761fcbd7.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520112/mapas/60a66eed1b8d9e23761fcbd7.png",
        original_filename: "file",
      },
    },
    altText: "Livestock map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a67032634a1f23ded66ad5"),
    image: {
      id: ObjectId("60a6702f634a1f23ded66ad4"),
      filename: "TALSIK_BACKLOT.png",
      originalFilename: "TALSIK_BACKLOT.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "0f8e4f1acc22184cfda7d8ed3a85b48d",
        public_id: "mapas/60a6702f634a1f23ded66ad4",
        version: NumberInt("1621520433"),
        version_id: "89ad34975222023203c1238eea31aa9e",
        signature: "19fb8bf25ff874b6ceca887d15b9b0495402c679",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:20:33Z",
        tags: [],
        bytes: NumberInt("796251"),
        type: "upload",
        etag: "24b9f7733fcbadefbf0d116173fb46c8",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520433/mapas/60a6702f634a1f23ded66ad4.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520433/mapas/60a6702f634a1f23ded66ad4.png",
        original_filename: "file",
      },
    },
    altText: "Talsik Backlot map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66da61b8d9e23761fcbb4"),
    image: {
      id: ObjectId("60a66da31b8d9e23761fcbb3"),
      filename: "BROADCAST.png",
      originalFilename: "BROADCAST.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "fe51e44a58b1d8824f19ce119c03a178",
        public_id: "mapas/60a66da31b8d9e23761fcbb3",
        version: NumberInt("1621519781"),
        version_id: "bdc1ad30b5ab11c02f2a1751ebe3df13",
        signature: "4804c75e8f45786014f8908db03406b4f4eb8065",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:09:41Z",
        tags: [],
        bytes: NumberInt("820429"),
        type: "upload",
        etag: "2bd4ac0ab95f798216bf6a9f6d54d516",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519781/mapas/60a66da31b8d9e23761fcbb3.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519781/mapas/60a66da31b8d9e23761fcbb3.png",
        original_filename: "file",
      },
    },
    altText: "Broadcast map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e941b8d9e23761fcbce"),
    image: {
      id: ObjectId("60a66e911b8d9e23761fcbcd"),
      filename: "HILL.png",
      originalFilename: "HILL.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "f094f0cea0aa803c9d7ca889a0db66e8",
        public_id: "mapas/60a66e911b8d9e23761fcbcd",
        version: NumberInt("1621520019"),
        version_id: "8327dec02a16716079bf5969ca9d5ade",
        signature: "63ce5c8ccd54abde17d8248737fcb6b83983548e",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:13:39Z",
        tags: [],
        bytes: NumberInt("930435"),
        type: "upload",
        etag: "14b8b1a546e06793cffaa56415c8d8d5",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520019/mapas/60a66e911b8d9e23761fcbcd.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520019/mapas/60a66e911b8d9e23761fcbcd.png",
        original_filename: "file",
      },
    },
    altText: "Hill map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a67023634a1f23ded66ad3"),
    image: {
      id: ObjectId("60a6701f634a1f23ded66ad2"),
      filename: "SULDAL_HARBOR.png",
      originalFilename: "SULDAL_HARBOR.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "6b46e754bae5d28c2e544f1d1bb40f04",
        public_id: "mapas/60a6701f634a1f23ded66ad2",
        version: NumberInt("1621520417"),
        version_id: "77a9454e83b6bb5a30999a2995b6c6a5",
        signature: "f6c6689fcd30f7452402b0e066c64d4c0f978968",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:20:17Z",
        tags: [],
        bytes: NumberInt("854775"),
        type: "upload",
        etag: "e9e9988b443ea3dbe7233662adf8809e",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520417/mapas/60a6701f634a1f23ded66ad2.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520417/mapas/60a6701f634a1f23ded66ad2.png",
        original_filename: "file",
      },
    },
    altText: "Suldal Harbor map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d8c1b8d9e23761fcbb1"),
    altText: "Bazaar map image",
    __v: NumberInt("0"),
    image: {
      id: ObjectId("60a66d931b8d9e23761fcbb2"),
      filename: "BAZAAR.png",
      originalFilename: "BAZAAR.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "57e73169908c53bc55bbecde079626ff",
        public_id: "mapas/60a66d931b8d9e23761fcbb2",
        version: NumberInt("1621519766"),
        version_id: "c87eccd5747c41b861cd937d81a03103",
        signature: "1eae7740544324763ab3d4b76b6bd14e771495bf",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:09:26Z",
        tags: [],
        bytes: NumberInt("731968"),
        type: "upload",
        etag: "f01eec20e484500c4a6c4e6155fd3839",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519766/mapas/60a66d931b8d9e23761fcbb2.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519766/mapas/60a66d931b8d9e23761fcbb2.png",
        original_filename: "file",
      },
    },
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e721b8d9e23761fcbca"),
    image: {
      id: ObjectId("60a66e6f1b8d9e23761fcbc9"),
      filename: "HACKNEY_YARD.png",
      originalFilename: "HACKNEY_YARD.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "93a8f4954cae10162d690c4bf7de030c",
        public_id: "mapas/60a66e6f1b8d9e23761fcbc9",
        version: NumberInt("1621519985"),
        version_id: "6572c47238830cddd618773073cb148b",
        signature: "097ff9fa7c945eeaae98e879e5dbb1669a94b775",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:13:05Z",
        tags: [],
        bytes: NumberInt("762762"),
        type: "upload",
        etag: "a1894315b10d02fbde94536defcdaa15",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519985/mapas/60a66e6f1b8d9e23761fcbc9.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519985/mapas/60a66e6f1b8d9e23761fcbc9.png",
        original_filename: "file",
      },
    },
    altText: "Hackney Yard map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66fd0634a1f23ded66acb"),
    image: {
      id: ObjectId("60a66fce634a1f23ded66aca"),
      filename: "SPEEDBALL.png",
      originalFilename: "SPEEDBALL.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "59ab2ee8681273fdae0e795e3dbfdb61",
        public_id: "mapas/60a66fce634a1f23ded66aca",
        version: NumberInt("1621520336"),
        version_id: "5358ee2f51fd0bc5753f0076af96d21f",
        signature: "0880fc9e8676c0cf5e0cb5f48e1562a52477adde",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:18:56Z",
        tags: [],
        bytes: NumberInt("823086"),
        type: "upload",
        etag: "d84a29114b0970d015c94968c129e530",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520336/mapas/60a66fce634a1f23ded66aca.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520336/mapas/60a66fce634a1f23ded66aca.png",
        original_filename: "file",
      },
    },
    altText: "Speedball map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a67046634a1f23ded66ad9"),
    image: {
      id: ObjectId("60a67044634a1f23ded66ad8"),
      filename: "TRENCH.png",
      originalFilename: "TRENCH.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "56dd7e425e99211d70e95ed41aaa8591",
        public_id: "mapas/60a67044634a1f23ded66ad8",
        version: NumberInt("1621520454"),
        version_id: "f1b09e6b890519654fbe0fad726d14e2",
        signature: "4c982fe4e5f6af560bc56d50a9a10ab35cff0941",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:20:54Z",
        tags: [],
        bytes: NumberInt("895003"),
        type: "upload",
        etag: "c89f41f7d4010a77e3427349c2efdc16",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520454/mapas/60a67044634a1f23ded66ad8.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520454/mapas/60a67044634a1f23ded66ad8.png",
        original_filename: "file",
      },
    },
    altText: "Trench map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d1a1b8d9e23761fcba6"),
    image: {
      id: ObjectId("60a66d121b8d9e23761fcba5"),
      filename: "ANIYAH_PALACE.png",
      originalFilename: "ANIYAH_PALACE.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "4162c37e6531eb676a28b30ac44aa56e",
        public_id: "mapas/60a66d121b8d9e23761fcba5",
        version: NumberInt("1621519641"),
        version_id: "225817c24f4bf15f6cc005e8a7426b59",
        signature: "aba3b858e3be3a0b369789618eb5145c5aeaab35",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:07:21Z",
        tags: [],
        bytes: NumberInt("867150"),
        type: "upload",
        etag: "d0fcf6104c3f776be73b59b376bd5f34",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519641/mapas/60a66d121b8d9e23761fcba5.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519641/mapas/60a66d121b8d9e23761fcba5.png",
        original_filename: "file",
      },
    },
    altText: "Aniyah Palace map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66dcb1b8d9e23761fcbb8"),
    image: {
      id: ObjectId("60a66dc71b8d9e23761fcbb7"),
      filename: "CHESIRE_PARK.png",
      originalFilename: "CHESIRE_PARK.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "d975abaecf27c63c2c3c63bdc459517f",
        public_id: "mapas/60a66dc71b8d9e23761fcbb7",
        version: NumberInt("1621519817"),
        version_id: "ed2bd5fdfae1dd4a38a8bf3f92d2eb42",
        signature: "e971e4608ba5e6e443146a4348f4b127e439890d",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:10:17Z",
        tags: [],
        bytes: NumberInt("801245"),
        type: "upload",
        etag: "3bb067c20150b65e875ad023db2d53f0",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519817/mapas/60a66dc71b8d9e23761fcbb7.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519817/mapas/60a66dc71b8d9e23761fcbb7.png",
        original_filename: "file",
      },
    },
    altText: "Chesire Park map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66def1b8d9e23761fcbbc"),
    image: {
      id: ObjectId("60a66deb1b8d9e23761fcbbb"),
      filename: "DOCKS.png",
      originalFilename: "DOCKS.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "76412dc1e8fe9296b281e05a7dd8b625",
        public_id: "mapas/60a66deb1b8d9e23761fcbbb",
        version: NumberInt("1621519854"),
        version_id: "f44a73a1acd396d9aed555e5a3b1c0cc",
        signature: "dc6e12c3d6a09e5ad78ecb975cda443bf684fd6f",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:10:54Z",
        tags: [],
        bytes: NumberInt("829480"),
        type: "upload",
        etag: "0cc4c4881823677e4af5b2b07fa593ec",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519854/mapas/60a66deb1b8d9e23761fcbbb.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519854/mapas/60a66deb1b8d9e23761fcbbb.png",
        original_filename: "file",
      },
    },
    altText: "Docks map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e4b1b8d9e23761fcbc6"),
    image: {
      id: ObjectId("60a66e481b8d9e23761fcbc5"),
      filename: "GUN_RUNNER.png",
      originalFilename: "GUN_RUNNER.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "308463009489f7b6e1f70c5e7f2b5e79",
        public_id: "mapas/60a66e481b8d9e23761fcbc5",
        version: NumberInt("1621519946"),
        version_id: "edddb3378bca059bc00c522b2562527c",
        signature: "07ac849c45f2f0e3f6e3008237656fa2c84b1890",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:12:26Z",
        tags: [],
        bytes: NumberInt("961613"),
        type: "upload",
        etag: "3951dcfc29a0c6a2dbcb3757721f230c",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519946/mapas/60a66e481b8d9e23761fcbc5.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519946/mapas/60a66e481b8d9e23761fcbc5.png",
        original_filename: "file",
      },
    },
    altText: "Gun Runner map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66ecd1b8d9e23761fcbd4"),
    image: {
      id: ObjectId("60a66eca1b8d9e23761fcbd3"),
      filename: "KHANDOR_HIDEOUT.png",
      originalFilename: "KHANDOR_HIDEOUT.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "64cb800da6e694fd7611ef13f731cf45",
        public_id: "mapas/60a66eca1b8d9e23761fcbd3",
        version: NumberInt("1621520076"),
        version_id: "571fdd61047380dd3c2ce9a5ae3cc9f7",
        signature: "1b505bcf9988e3a4a93cee69cb6d29ffbbbc4aed",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:14:36Z",
        tags: [],
        bytes: NumberInt("743792"),
        type: "upload",
        etag: "14510e924b739a85d987ab11d58a0fc0",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520076/mapas/60a66eca1b8d9e23761fcbd3.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520076/mapas/60a66eca1b8d9e23761fcbd3.png",
        original_filename: "file",
      },
    },
    altText: "Khandor Hideout map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66ff8634a1f23ded66acd"),
    image: {
      id: ObjectId("60a66ff4634a1f23ded66acc"),
      filename: "STACK.png",
      originalFilename: "STACK.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "83f6b7791a69d3d6dc713cffbb83f5e8",
        public_id: "mapas/60a66ff4634a1f23ded66acc",
        version: NumberInt("1621520374"),
        version_id: "e11eddc2985808eb40271d19e165803b",
        signature: "e00bbc0216a3bf97935813cb6ee3094ab72ddb65",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:19:34Z",
        tags: [],
        bytes: NumberInt("708954"),
        type: "upload",
        etag: "96b9b77272470f49299ec401e0d2771c",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520374/mapas/60a66ff4634a1f23ded66acc.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520374/mapas/60a66ff4634a1f23ded66acc.png",
        original_filename: "file",
      },
    },
    altText: "Stack map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e821b8d9e23761fcbcc"),
    image: {
      id: ObjectId("60a66e7f1b8d9e23761fcbcb"),
      filename: "HARDHAT.png",
      originalFilename: "HARDHAT.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "e09ff7e58de8a48574d98b9bf8d0f416",
        public_id: "mapas/60a66e7f1b8d9e23761fcbcb",
        version: NumberInt("1621520001"),
        version_id: "c3e661e59ced782fd9f1a22d7bfe80fd",
        signature: "39555695dd1a780bd4f360c6df69e3d122b5332a",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:13:21Z",
        tags: [],
        bytes: NumberInt("786170"),
        type: "upload",
        etag: "3af4b2d063fccec2107477f332cf3d2a",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520001/mapas/60a66e7f1b8d9e23761fcbcb.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520001/mapas/60a66e7f1b8d9e23761fcbcb.png",
        original_filename: "file",
      },
    },
    altText: "Hardhat map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a67003634a1f23ded66acf"),
    image: {
      id: ObjectId("60a67001634a1f23ded66ace"),
      filename: "STATION.png",
      originalFilename: "STATION.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "75fe214947c8386440c8bfbd9a095840",
        public_id: "mapas/60a67001634a1f23ded66ace",
        version: NumberInt("1621520387"),
        version_id: "511ba79e33fe0893bedc9db9dc0bfbec",
        signature: "bc320e3b4545aea87c50fe0d332dc0b0697c4bac",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:19:47Z",
        tags: [],
        bytes: NumberInt("670628"),
        type: "upload",
        etag: "0800f642babadd39fa7e44145e393b14",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520387/mapas/60a67001634a1f23ded66ace.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520387/mapas/60a67001634a1f23ded66ace.png",
        original_filename: "file",
      },
    },
    altText: "Station map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a67055634a1f23ded66add"),
    image: {
      id: ObjectId("60a67052634a1f23ded66adc"),
      filename: "VERDANSK_STADIUM.png",
      originalFilename: "VERDANSK_STADIUM.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "853e5d5d442aeb4f2cb725da6d613723",
        public_id: "mapas/60a67052634a1f23ded66adc",
        version: NumberInt("1621520468"),
        version_id: "78950b789716b14bb93b7c8a0acb13a4",
        signature: "49821a5ad9a7a1e6c51eae7bac70d5884f98e0f6",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:21:08Z",
        tags: [],
        bytes: NumberInt("769415"),
        type: "upload",
        etag: "01efc6418cb6dc148906f2b4ea800fb2",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520468/mapas/60a67052634a1f23ded66adc.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520468/mapas/60a67052634a1f23ded66adc.png",
        original_filename: "file",
      },
    },
    altText: "Verdansk Stadium map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e151b8d9e23761fcbc0"),
    image: {
      id: ObjectId("60a66e101b8d9e23761fcbbf"),
      filename: "GRAZNA_RAID.png",
      originalFilename: "GRAZNA_RAID.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "5a6b72533700ff71c8be46bef1639f9e",
        public_id: "mapas/60a66e101b8d9e23761fcbbf",
        version: NumberInt("1621519891"),
        version_id: "3e651db638c3837bdc58a326d3797bb0",
        signature: "f75e00a951ade7b685269a65d1b3dd78bd106af7",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:11:31Z",
        tags: [],
        bytes: NumberInt("864623"),
        type: "upload",
        etag: "45ee8da0564c9f2e4b9f07132cab383d",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519891/mapas/60a66e101b8d9e23761fcbbf.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519891/mapas/60a66e101b8d9e23761fcbbf.png",
        original_filename: "file",
      },
    },
    altText: "Grazna Raid map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66d071b8d9e23761fcba4"),
    image: {
      id: ObjectId("60a66d041b8d9e23761fcba3"),
      filename: "ANIYAH_INCURSION.png",
      originalFilename: "ANIYAH_INCURSION.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "a87816b6a15c1563a01349646999b273",
        public_id: "mapas/60a66d041b8d9e23761fcba3",
        version: NumberInt("1621519622"),
        version_id: "50d043972d36640801e6783fa7d14fcd",
        signature: "a2da80b6d5cf9c455e6e731ee58c6014f19d3bc4",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:07:02Z",
        tags: [],
        bytes: NumberInt("619571"),
        type: "upload",
        etag: "129cdf8b83887dae357e59706735b552",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519622/mapas/60a66d041b8d9e23761fcba3.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519622/mapas/60a66d041b8d9e23761fcba3.png",
        original_filename: "file",
      },
    },
    altText: "Aniyah Incursion map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66f6f634a1f23ded66abf"),
    image: {
      id: ObjectId("60a66f67634a1f23ded66abe"),
      filename: "RAMMAZA_(night).png",
      originalFilename: "RAMMAZA_(night).png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "ee58d9008f8b03e11c8e544e262f5593",
        public_id: "mapas/60a66f67634a1f23ded66abe",
        version: NumberInt("1621520238"),
        version_id: "2c4ba713be52d2ab001a764b7bdc0b21",
        signature: "0d8e5bf90ef3b13f669cf9cb87787ca8faba20c8",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:17:18Z",
        tags: [],
        bytes: NumberInt("886721"),
        type: "upload",
        etag: "77102d29f2fc689835b182ca84436219",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520238/mapas/60a66f67634a1f23ded66abe.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520238/mapas/60a66f67634a1f23ded66abe.png",
        original_filename: "file",
      },
    },
    altText: "Rammaza Night map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66f96634a1f23ded66ac3"),
    image: {
      id: ObjectId("60a66f91634a1f23ded66ac2"),
      filename: "RUST.png",
      originalFilename: "RUST.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "5b75728ea370cbb990e1b11adcfbfcd3",
        public_id: "mapas/60a66f91634a1f23ded66ac2",
        version: NumberInt("1621520277"),
        version_id: "38a24620bb2615a6d082c4f42e220672",
        signature: "89f6ab7774965fe1bdea7fad0b7dbf35f36f4cd5",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:17:57Z",
        tags: [],
        bytes: NumberInt("508958"),
        type: "upload",
        etag: "052c8871f288b941b4fd08fbb76a6b12",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520277/mapas/60a66f91634a1f23ded66ac2.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520277/mapas/60a66f91634a1f23ded66ac2.png",
        original_filename: "file",
      },
    },
    altText: "Rust map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e641b8d9e23761fcbc8"),
    image: {
      id: ObjectId("60a66e621b8d9e23761fcbc7"),
      filename: "HACKNEY_YARD_(night).png",
      originalFilename: "HACKNEY_YARD_(night).png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "12a575a33652a1bfc5f26d0c18192727",
        public_id: "mapas/60a66e621b8d9e23761fcbc7",
        version: NumberInt("1621519972"),
        version_id: "7e3af8b9c877cf33019a2064fa9df4ab",
        signature: "a5c0229355b40a851cb115ac7f0cef097633f23a",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:12:52Z",
        tags: [],
        bytes: NumberInt("782949"),
        type: "upload",
        etag: "f5d69651cda721154dd6f565f2279b5a",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519972/mapas/60a66e621b8d9e23761fcbc7.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519972/mapas/60a66e621b8d9e23761fcbc7.png",
        original_filename: "file",
      },
    },
    altText: "Hackney Yard Night map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66e3e1b8d9e23761fcbc4"),
    image: {
      id: ObjectId("60a66e3a1b8d9e23761fcbc3"),
      filename: "GUN_RUNNER_(night).png",
      originalFilename: "GUN_RUNNER_(night).png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "b891ff185dc8a6e4f05b56bef93c6943",
        public_id: "mapas/60a66e3a1b8d9e23761fcbc3",
        version: NumberInt("1621519932"),
        version_id: "7b23f8797753c3fec4c7940efe491610",
        signature: "ce927c3d355ea65769aeacf0e36ce76b93fbea48",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:12:12Z",
        tags: [],
        bytes: NumberInt("873737"),
        type: "upload",
        etag: "2817e71b8ae116bb00fa13ec50abecd6",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621519932/mapas/60a66e3a1b8d9e23761fcbc3.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621519932/mapas/60a66e3a1b8d9e23761fcbc3.png",
        original_filename: "file",
      },
    },
    altText: "Gun Runner Night map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66fa5634a1f23ded66ac5"),
    image: {
      id: ObjectId("60a66fa0634a1f23ded66ac4"),
      filename: "SCRAPYARD.png",
      originalFilename: "SCRAPYARD.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "8cf81359b0218b9f8d1d8908f7a00967",
        public_id: "mapas/60a66fa0634a1f23ded66ac4",
        version: NumberInt("1621520291"),
        version_id: "77346eb91dff96b78c39678518dd208a",
        signature: "a790969d9df4deb16bba3c010a12f1720405678a",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:18:11Z",
        tags: [],
        bytes: NumberInt("853758"),
        type: "upload",
        etag: "4b36d117d9160be16edf045b4d664aa2",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520291/mapas/60a66fa0634a1f23ded66ac4.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520291/mapas/60a66fa0634a1f23ded66ac4.png",
        original_filename: "file",
      },
    },
    altText: "Scrapyard map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66fc3634a1f23ded66ac9"),
    image: {
      id: ObjectId("60a66fc0634a1f23ded66ac8"),
      filename: "SHOOT_HOUSE.png",
      originalFilename: "SHOOT_HOUSE.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "2eb33ca5db75f1c53af44b7205868914",
        public_id: "mapas/60a66fc0634a1f23ded66ac8",
        version: NumberInt("1621520321"),
        version_id: "fee31e9f8dbe1794f75a07646e56d36e",
        signature: "49d582d8e6f761e216a63770d3c3b1b34e810e2d",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:18:41Z",
        tags: [],
        bytes: NumberInt("770303"),
        type: "upload",
        etag: "6fb3985e05fe7ff7927644a90d14af51",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520321/mapas/60a66fc0634a1f23ded66ac8.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520321/mapas/60a66fc0634a1f23ded66ac8.png",
        original_filename: "file",
      },
    },
    altText: "Shoot House map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66fb4634a1f23ded66ac7"),
    image: {
      id: ObjectId("60a66fb0634a1f23ded66ac6"),
      filename: "SHIPMENT.png",
      originalFilename: "SHIPMENT.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "9bf349c673bb7513873fcda4a50ed1ba",
        public_id: "mapas/60a66fb0634a1f23ded66ac6",
        version: NumberInt("1621520307"),
        version_id: "f9f3f500c7563d54b224aad55694814f",
        signature: "da1333bbf9bfcac88e34e129ac8a0ccbd533d556",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:18:27Z",
        tags: [],
        bytes: NumberInt("774672"),
        type: "upload",
        etag: "91f12d2f61c5df45b58c2bd3fd7c12cb",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520307/mapas/60a66fb0634a1f23ded66ac6.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520307/mapas/60a66fb0634a1f23ded66ac6.png",
        original_filename: "file",
      },
    },
    altText: "Shipment map image",
    __v: NumberInt("0"),
  },
]);
db.getCollection("codmapimages").insert([
  {
    _id: ObjectId("60a66ebd1b8d9e23761fcbd2"),
    image: {
      id: ObjectId("60a66eba1b8d9e23761fcbd1"),
      filename: "HOVEC_SAWMILL.png",
      originalFilename: "HOVEC_SAWMILL.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        asset_id: "55dd3b9b14320a91aad6cc029e89b2af",
        public_id: "mapas/60a66eba1b8d9e23761fcbd1",
        version: NumberInt("1621520060"),
        version_id: "e5df78dd837bbb53a5ec6475d5e07614",
        signature: "fdcc4bdaaab4208231dedf7d060b24992a0ef32d",
        width: NumberInt("1920"),
        height: NumberInt("1080"),
        format: "png",
        resource_type: "image",
        created_at: "2021-05-20T14:14:20Z",
        tags: [],
        bytes: NumberInt("714080"),
        type: "upload",
        etag: "1e860e0bf537602af638d1efb29f6ebf",
        placeholder: false,
        url: "http://res.cloudinary.com/do27y3gn0/image/upload/v1621520060/mapas/60a66eba1b8d9e23761fcbd1.png",
        secure_url:
          "https://res.cloudinary.com/do27y3gn0/image/upload/v1621520060/mapas/60a66eba1b8d9e23761fcbd1.png",
        original_filename: "file",
      },
    },
    altText: "Hovec Sawmill map image",
    __v: NumberInt("0"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codmaps
// ----------------------------
db.getCollection("codmaps").drop();
db.createCollection("codmaps");
db.getCollection("codmaps").createIndex(
  {
    photo: NumberInt("1"),
  },
  {
    name: "photo_1",
    background: true,
  }
);

// ----------------------------
// Documents of codmaps
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee9"),
    name: "Picadilly",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/PICADILLY_pbybgz.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143536/BPC/FULL/PICADILLY_ztxtoh.png",
    photo: ObjectId("60a66f2c1b8d9e23761fcbe0"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889edc"),
    name: "Gulag Showers",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/GULAG_SHOWERS_q5pb3y.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143531/BPC/FULL/GULAG_SHOWERS_gaxgwb.png",
    photo: ObjectId("60a66e251b8d9e23761fcbc2"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef6"),
    name: "Talsik Backlot",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143677/BPC/TINY/TALSIK_BACKLOT_x72jpf.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143543/BPC/FULL/TALSIK_BACKLOT_jg2r9v.png",
    photo: ObjectId("60a67032634a1f23ded66ad5"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ecf"),
    name: "Arklov Peak",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143673/BPC/TINY/ARKLOV_PEAK_hlubic.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143527/BPC/FULL/ARKLOV_PEAK_dovtda.png",
    photo: ObjectId("60a66d2b1b8d9e23761fcba8"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee4"),
    name: "Khandor Hideout",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/KHANDOR_HIDEOUT_t9uhue.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143534/BPC/FULL/KHANDOR_HIDEOUT_x1fief.png",
    photo: ObjectId("60a66ecd1b8d9e23761fcbd4"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889eed"),
    name: "Rust",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/RUST_retqwa.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143538/BPC/FULL/RUST_efrokm.png",
    photo: ObjectId("60a66f96634a1f23ded66ac3"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed9"),
    name: "Docks",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/DOCKS_ngk0ag.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143531/BPC/FULL/DOCKS_qumaaz.png",
    photo: ObjectId("60a66def1b8d9e23761fcbbc"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef0"),
    name: "Shoot House",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/SHOOT_HOUSE_nznq9s.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143541/BPC/FULL/SHOOT_HOUSE_fuj9z2.png",
    photo: ObjectId("60a66fc3634a1f23ded66ac9"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef3"),
    name: "Stack",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143677/BPC/TINY/STACK_bm7drz.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143540/BPC/FULL/STACK_xcgzyk.png",
    photo: ObjectId("60a66ff8634a1f23ded66acd"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef4"),
    name: "Station",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143678/BPC/TINY/STATION_oju6da.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143542/BPC/FULL/STATION_svcais.png",
    photo: ObjectId("60a67003634a1f23ded66acf"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed3"),
    name: "Azhir Cave",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/AZHIR_CAVE_lvgppv.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143527/BPC/FULL/AZHIR_CAVE_mjjvkt.png",
    photo: ObjectId("60a66d811b8d9e23761fcbb0"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889eeb"),
    name: "Rammaza (Night)",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/RAMMAZA__night_po0fem.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143539/BPC/FULL/RAMMAZA__night_bh3l12.png",
    photo: ObjectId("60a66f6f634a1f23ded66abf"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889eea"),
    name: "Pine",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/PINE_cn7adr.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143538/BPC/FULL/PINE_r1w7wk.png",
    photo: ObjectId("60a66f59634a1f23ded66abd"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed4"),
    name: "Bazaar",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/BAZAAR_wwimfy.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143528/BPC/FULL/BAZAAR_xbj92p.png",
    photo: ObjectId("60a66d8c1b8d9e23761fcbb1"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef1"),
    name: "Speedball",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/SPEEDBALL_xsqioq.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143541/BPC/FULL/SPEEDBALL_xgmqag.png",
    photo: ObjectId("60a66fd0634a1f23ded66acb"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef7"),
    name: "Trench",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143677/BPC/TINY/TRENCH_m9cj0o.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143543/BPC/FULL/TRENCH_klf5ej.png",
    photo: ObjectId("60a67046634a1f23ded66ad9"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed0"),
    name: "Atlas Superstore",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143673/BPC/TINY/ATLAS_SUPERSTORE_cc9aho.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143527/BPC/FULL/ATLAS_SUPERSTORE_pshf63.png",
    photo: ObjectId("60a66d421b8d9e23761fcbaa"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889eee"),
    name: "Scrapyard",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/SCRAPYARD_okjg2d.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143539/BPC/FULL/SCRAPYARD_rlccbl.png",
    photo: ObjectId("60a66fa5634a1f23ded66ac5"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889edb"),
    name: "Grazna Raid",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/GRAZNA_RAID_n5wyfr.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143538/BPC/FULL/GRAZNA_RAID_fandpy.png",
    photo: ObjectId("60a66e151b8d9e23761fcbc0"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee2"),
    name: "Hill",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/HILL_vyljfr.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143532/BPC/FULL/HILL_zb7fws.png",
    photo: ObjectId("60a66e941b8d9e23761fcbce"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889edd"),
    name: "Gun Runner (Night)",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/GUN_RUNNER__night_dy2uyp.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143538/BPC/FULL/GUN_RUNNER__night_wke7bx.png",
    photo: ObjectId("60a66e3e1b8d9e23761fcbc4"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ede"),
    name: "Gun Runner",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/GUN_RUNNER_hlatdy.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143531/BPC/FULL/GUN_RUNNER_tt7cfv.png",
    photo: ObjectId("60a66e4b1b8d9e23761fcbc6"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee1"),
    name: "Hardhat",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/HARDHAT_lltnrd.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143533/BPC/FULL/HARDHAT_ru5m8k.png",
    photo: ObjectId("60a66e821b8d9e23761fcbcc"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889eef"),
    name: "Shipment",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/SHIPMENT_nrywyz.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143540/BPC/FULL/SHIPMENT_l1vg4k.png",
    photo: ObjectId("60a66fb4634a1f23ded66ac7"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed1"),
    name: "Atrium",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143673/BPC/TINY/ATRIUM_xsy6ie.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143529/BPC/FULL/ATRIUM_zmo73u.png",
    photo: ObjectId("60a66d5a1b8d9e23761fcbac"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ecc"),
    name: "Aisle 9",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143673/BPC/TINY/AISLE_9_k8akzv.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143526/BPC/FULL/AISLE_9_ol5gu1.png",
    photo: ObjectId("60a66925c6f22622be7c81eb"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed5"),
    name: "Broadcast",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/BROADCAST_y31mig.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143528/BPC/FULL/BROADCAST_bbj00m.png",
    photo: ObjectId("60a66da61b8d9e23761fcbb4"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889edf"),
    name: "Hackney Yard (Night)",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/HACKNEY_YARD__night_k9uqqj.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143535/BPC/FULL/HACKNEY_YARD__night_x2wi1o.png",
    photo: ObjectId("60a66e641b8d9e23761fcbc8"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed2"),
    name: "Azhir Cave (Night)",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/AZHIR_CAVE__night_urnfnv.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143527/BPC/FULL/AZHIR_CAVE__night_btdq1i.png",
    photo: ObjectId("60a66d721b8d9e23761fcbae"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed8"),
    name: "Crash",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/CRASH_bmqrlt.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143529/BPC/FULL/CRASH_d6sjuy.png",
    photo: ObjectId("60a66dd21b8d9e23761fcbb9"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee0"),
    name: "Hackney Yard",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/HACKNEY_YARD_ftxhtn.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143532/BPC/FULL/HACKNEY_YARD_wlwr94.png",
    photo: ObjectId("60a66e721b8d9e23761fcbca"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee5"),
    name: "King",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/KING_smusd0.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143536/BPC/FULL/KING_qsr3mv.png",
    photo: ObjectId("60a66edc1b8d9e23761fcbd6"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee6"),
    name: "Livestock",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/LIVESTOCK_ktwbkf.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143534/BPC/FULL/LIVESTOCK_jd2mmm.png",
    photo: ObjectId("60a66ef11b8d9e23761fcbd8"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee7"),
    name: "Mialstore Tank Factory",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/MIALSTORE_TANK_FACTORY_btlld1.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143535/BPC/FULL/MIALSTORE_TANK_FACTORY_syq5la.png",
    photo: ObjectId("60a66f021b8d9e23761fcbda"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee8"),
    name: "Petrov Oil Rig",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/PETROV_OIL_RIG_jkly0k.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143538/BPC/FULL/PETROV_OIL_RIG_fm1ma9.png",
    photo: ObjectId("60a66f161b8d9e23761fcbdb"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889eda"),
    name: "Euphrates Bridge",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/EUPHRATES_BRIDGE_i1fdsv.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143529/BPC/FULL/EUPHRATES_BRIDGE_npvzl7.png",
    photo: ObjectId("60a66e021b8d9e23761fcbbe"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef9"),
    name: "Verdansk Stadium",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143677/BPC/TINY/VERDANSK_STADIUM_uvffql.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143541/BPC/FULL/VERDANSK_STADIUM_apafkn.png",
    photo: ObjectId("60a67055634a1f23ded66add"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ee3"),
    name: "Hovec Sawmill",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143675/BPC/TINY/HOVEC_SAWMILL_tgxwo0.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143537/BPC/FULL/HOVEC_SAWMILL_jje1yj.png",
    photo: ObjectId("60a66ebd1b8d9e23761fcbd2"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889eec"),
    name: "Rammaza",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143676/BPC/TINY/RAMMAZA_xmmhdl.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143537/BPC/FULL/RAMMAZA_jc5zdj.png",
    photo: ObjectId("60a66f7e634a1f23ded66ac1"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef2"),
    name: "St Petrograd",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143677/BPC/TINY/ST_PETROGRAD_vcjywk.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143541/BPC/FULL/ST_PETROGRAD_ebkx1n.png",
    photo: ObjectId("60a67013634a1f23ded66ad1"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef5"),
    name: "Suldal Harbor",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143677/BPC/TINY/SULDAL_HARBOR_mit18e.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143541/BPC/FULL/SULDAL_HARBOR_gplm6c.png",
    photo: ObjectId("60a67023634a1f23ded66ad3"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ecd"),
    name: "Aniyah Incursion",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143673/BPC/TINY/ANIYAH_INCURSION_ykeels.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143527/BPC/FULL/ANIYAH_INCURSION_iqthba.png",
    photo: ObjectId("60a66d071b8d9e23761fcba4"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed6"),
    name: "Cargo",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/CARGO_dd6ual.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143528/BPC/FULL/CARGO_hz5w3s.png",
    photo: ObjectId("60a66db81b8d9e23761fcbb6"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ef8"),
    name: "Vacant",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143677/BPC/TINY/VACANT_ppfjnc.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143541/BPC/FULL/VACANT_udf9ba.png",
    photo: ObjectId("60a6704e634a1f23ded66adb"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ece"),
    name: "Aniyah Palace",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143673/BPC/TINY/ANIYAH_PALACE_hfeww7.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143527/BPC/FULL/ANIYAH_PALACE_iweah1.png",
    photo: ObjectId("60a66d1a1b8d9e23761fcba6"),
  },
]);
db.getCollection("codmaps").insert([
  {
    _id: ObjectId("60a0bc1d38fed84105889ed7"),
    name: "Chesire Park",
    urlTiny:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143674/BPC/TINY/CHESIRE_PARK_zlxcr8.jpg",
    urlFull:
      "https://res.cloudinary.com/do27y3gn0/image/upload/v1621143534/BPC/FULL/CHESIRE_PARK_z5zspr.png",
    photo: ObjectId("60a66dcb1b8d9e23761fcbb8"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codscoreboards
// ----------------------------
db.getCollection("codscoreboards").drop();
db.createCollection("codscoreboards");
db.getCollection("codscoreboards").createIndex(
  {
    team: NumberInt("1"),
  },
  {
    name: "team_1",
    background: true,
    unique: true,
  }
);

// ----------------------------
// Documents of codscoreboards
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codscoreboards").insert([
  {
    _id: ObjectId("60a2475d1e9b1350ab3a67f0"),
    team: ObjectId("60a01e3003c67f3f3d07b1ef"),
    position: NumberInt("3"),
    points: NumberInt("1"),
    roundsWon: NumberInt("20"),
    roundsLost: NumberInt("29"),
    roundsWLRatio: NumberDecimal("0.68"),
    __v: NumberInt("0"),
    matchPlayed: NumberInt("2"),
  },
]);
db.getCollection("codscoreboards").insert([
  {
    _id: ObjectId("60a2479699b25f50c4afe574"),
    team: ObjectId("60a01e3503c67f3f3d07b1f0"),
    position: NumberInt("2"),
    points: NumberInt("2"),
    roundsWon: NumberInt("29"),
    roundsLost: NumberInt("20"),
    roundsWLRatio: NumberDecimal("1.45"),
    __v: NumberInt("0"),
    matchPlayed: NumberInt("2"),
  },
]);
db.getCollection("codscoreboards").insert([
  {
    _id: ObjectId("60a247ac99b25f50c4afe575"),
    team: ObjectId("60a01e3b03c67f3f3d07b1f1"),
    position: NumberInt("4"),
    points: NumberInt("3"),
    roundsWon: NumberInt("10"),
    roundsLost: NumberInt("36"),
    roundsWLRatio: NumberDecimal("0.27"),
    __v: NumberInt("0"),
    matchPlayed: NumberInt("2"),
  },
]);
db.getCollection("codscoreboards").insert([
  {
    _id: ObjectId("60a247bb99b25f50c4afe576"),
    team: ObjectId("60a01e4a03c67f3f3d07b1f3"),
    position: NumberInt("5"),
    points: NumberInt("4"),
    roundsWon: NumberInt("36"),
    roundsLost: NumberInt("1"),
    roundsWLRatio: NumberDecimal("36"),
    __v: NumberInt("0"),
    matchPlayed: NumberInt("2"),
  },
]);
db.getCollection("codscoreboards").insert([
  {
    _id: ObjectId("60a247c299b25f50c4afe577"),
    team: ObjectId("60a01e5003c67f3f3d07b1f4"),
    position: NumberInt("6"),
    points: NumberInt("0"),
    roundsWon: NumberInt("1"),
    roundsLost: NumberInt("36"),
    roundsWLRatio: NumberDecimal("0.027"),
    __v: NumberInt("0"),
    matchPlayed: NumberInt("2"),
  },
]);
db.getCollection("codscoreboards").insert([
  {
    _id: ObjectId("60a247d999b25f50c4afe578"),
    team: ObjectId("60a01e3f03c67f3f3d07b1f2"),
    position: NumberInt("1"),
    points: NumberInt("6"),
    roundsWon: NumberInt("36"),
    roundsLost: NumberInt("10"),
    roundsWLRatio: NumberDecimal("3.6"),
    __v: NumberInt("0"),
    matchPlayed: NumberInt("2"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codsizes
// ----------------------------
db.getCollection("codsizes").drop();
db.createCollection("codsizes");

// ----------------------------
// Documents of codsizes
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for codsoldiers
// ----------------------------
db.getCollection("codsoldiers").drop();
db.createCollection("codsoldiers");
db.getCollection("codsoldiers").createIndex(
  {
    faction: NumberInt("1"),
  },
  {
    name: "faction_1",
    background: true,
  }
);
db.getCollection("codsoldiers").createIndex(
  {
    clan: NumberInt("1"),
  },
  {
    name: "clan_1",
    background: true,
  }
);

// ----------------------------
// Documents of codsoldiers
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e07"),
    nick: "El Charrasqueado",
    faction: ObjectId("60a65cf67495121667535ab7"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e01"),
    nick: "IAM_B-A-T-M-A-N",
    faction: ObjectId("60a65cf67495121667535ab6"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e11"),
    nick: "PrroMax-kun",
    faction: ObjectId("60a65cf67495121667535ab9"),
    clan: ObjectId("60ab32f9b895593e6cf4303a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e05"),
    nick: "Chernobyl",
    faction: ObjectId("60a65cf67495121667535ab7"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e0c"),
    nick: "RaGnArooK",
    faction: ObjectId("60a65cf67495121667535ab8"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e0a"),
    nick: "cocolisovandame_",
    faction: ObjectId("60a65cf67495121667535ab8"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e09"),
    nick: "LexzCheBolud",
    faction: ObjectId("60a65cf67495121667535ab7"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e04"),
    nick: "AnfetaSour",
    faction: ObjectId("60a65cf67495121667535ab6"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e00"),
    nick: "MClovin",
    faction: ObjectId("60a65cf67495121667535ab6"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e0b"),
    nick: "naxouc10",
    faction: ObjectId("60a65cf67495121667535abb"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e0d"),
    nick: "Tezzeret",
    faction: ObjectId("60a65cf67495121667535ab8"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e0e"),
    nick: "jacontr",
    faction: ObjectId("60a01e3b03c67f3f3d07b1f1"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e0f"),
    nick: "R3eapeR34",
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
    faction: ObjectId("60a65cf67495121667535ab9"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e10"),
    nick: "Darth Vader",
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
    faction: ObjectId("60a65cf67495121667535ab9"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e13"),
    nick: "BOT ciiisar",
    faction: ObjectId("60a65cf67495121667535ab9"),
    clan: ObjectId("60ab32f9b895593e6cf4303a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e02"),
    nick: "JuanEnrique_94",
    faction: ObjectId("60a65cf67495121667535ab6"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e08"),
    nick: "EljefeReyes",
    faction: ObjectId("60a65cf67495121667535ab7"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e03"),
    nick: "jakesnakemgs",
    faction: ObjectId("60a65cf67495121667535ab6"),
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e06"),
    nick: "Dr Elvis Tec",
    faction: ObjectId("60a65cf67495121667535ab7"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0226038fed84105889e12"),
    nick: "Armandoki",
    faction: ObjectId("60a65cf67495121667535ab9"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0236169c7bc4029a04f3d"),
    nick: "Sh3sh369_MsK",
    clan: ObjectId("60a0235d69c7bc4029a04f3c"),
    __v: NumberInt("0"),
    faction: ObjectId("60a65cf67495121667535abb"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a023a569c7bc4029a04f3e"),
    nick: "D-Day",
    faction: ObjectId("60a01e3b03c67f3f3d07b1f1"),
    clan: ObjectId("60a01fe069c7bc4029a04f3a"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0262d0ba23d41a38d01af"),
    nick: "Tegobi_Chile",
    faction: ObjectId("60a65cf67495121667535aba"),
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a026370ba23d41a38d01b0"),
    nick: "Sr. Miranda",
    faction: ObjectId("60a01e4a03c67f3f3d07b1f3"),
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0263d0ba23d41a38d01b1"),
    nick: "deimos_81",
    faction: ObjectId("60a65cf67495121667535aba"),
    __v: NumberInt("0"),
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a026490ba23d41a38d01b2"),
    nick: "Zeke Jeager",
    faction: ObjectId("60a01e4a03c67f3f3d07b1f3"),
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a026530ba23d41a38d01b3"),
    nick: "El_contador",
    faction: ObjectId("60a65cf67495121667535aba"),
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a027050ba23d41a38d01b4"),
    nick: "CHINOTUERTO",
    faction: ObjectId("60a65cf67495121667535abb"),
    clan: null,
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a027420ba23d41a38d01b5"),
    nick: "andy",
    faction: ObjectId("60a65cf67495121667535abb"),
    clan: null,
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a0274a0ba23d41a38d01b6"),
    nick: "Wuayo",
    faction: ObjectId("60a65cf67495121667535abb"),
    clan: null,
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a027600ba23d41a38d01b7"),
    nick: "jpablo10",
    faction: ObjectId("60a65cf67495121667535abb"),
    clan: null,
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a027680ba23d41a38d01b8"),
    nick: "krlitroxs25",
    faction: ObjectId("60a65cf67495121667535abb"),
    clan: null,
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a027ae0ba23d41a38d01bb"),
    nick: "Nicopro777",
    clan: ObjectId("60a027aa0ba23d41a38d01ba"),
    __v: NumberInt("0"),
    faction: ObjectId("60a65cf67495121667535ab8"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a027e80ba23d41a38d01bc"),
    nick: "Wladimir255",
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60a165d860ac3600264c6798"),
    nick: "Crisflotalento",
    faction: ObjectId("60a65cf67495121667535aba"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60ab319ab895593e6cf43036"),
    nick: "Pancho_Aguayo",
    faction: ObjectId("60a65cf67495121667535ab8"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60ab3212b895593e6cf43037"),
    nick: "Chusmochu",
    faction: ObjectId("60a65cf67495121667535abb"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60ab3276b895593e6cf43038"),
    nick: "mleal3309475",
    faction: ObjectId("60a65cf67495121667535abb"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60ab32b4b895593e6cf43039"),
    nick: "Yorch",
    faction: ObjectId("60a65cf67495121667535aba"),
    clan: ObjectId("60a01fdb69c7bc4029a04f39"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60ab3331b895593e6cf4303b"),
    nick: "BaSty-20",
    faction: ObjectId("60a65cf67495121667535ab6"),
    __v: NumberInt("0"),
  },
]);
db.getCollection("codsoldiers").insert([
  {
    _id: ObjectId("60beed62d1926d0026361635"),
    nick: "Vicenteuc17",
    faction: ObjectId("60a65cf67495121667535ab8"),
    __v: NumberInt("0"),
  },
]);
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for scoreboards
// ----------------------------
db.getCollection("scoreboards").drop();
db.createCollection("scoreboards");

// ----------------------------
// Documents of scoreboards
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
session.commitTransaction();
session.endSession();

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex(
  {
    email: NumberInt("1"),
  },
  {
    name: "email_1",
    background: true,
    unique: true,
  }
);
db.getCollection("users").createIndex(
  {
    userName: NumberInt("1"),
  },
  {
    name: "userName_1",
    background: true,
    unique: true,
  }
);

// ----------------------------
// Documents of users
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("blog");
db.getCollection("users").insert([
  {
    _id: ObjectId("60a057f4cdffa1e1fdd31724"),
    userName: "sergio",
    email: "sergrodrig@gmail.com",
    password: "$2a$10$oPmZQFazxos14TpeHLTk/uzyaGMhNPemW5mbnWC6zPUvyuPHimg9O",
    isAdmin: true,
    __v: NumberInt("0"),
  },
]);
session.commitTransaction();
session.endSession();

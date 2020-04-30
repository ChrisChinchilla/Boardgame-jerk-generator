exports.generateLexicon = function() {
  let tracery = require("tracery-grammar");

  let mechanic = require("./mechanic.json");
  let you_are = require("./you_are.json");
  let doing = require("./doing.json");
  let with_what = require("./with_what.json");
  let in_place = require("./in.json");

  const grammar = tracery.createGrammar({
    mechanic: mechanic,
    you_are: you_are,
    doing: doing,
    with_what: with_what,
    in: in_place,
    origin: ["A #mechanic# game, where you are #you_are# #doing# #with_what# in #in#"]
  });

  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten("#origin#");
};

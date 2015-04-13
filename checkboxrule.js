/*\
title: $:/core/modules/parsers/wikiparser/rules/checkboxrule.js
type: application/javascript
module-type: wikirule
\*/
(function(){

  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  exports.name = "checkboxrule";
  exports.types = {block: true};

  exports.init = function(parser) {
    this.parser = parser;
    // Regexp to match
    this.matchRegExp = /\[[xX_ ]\]/mg;
  };

  exports.parse = function() {
    // Move past the match
    this.parser.pos = this.matchRegExp.lastIndex;
    return [{type: "raw", 
      html: "<input type=\"checkbox\" name=\"option1\" value=\"Milk\"> Milk"
    }];
  };
})();

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

  /*onchange=toggleCheckbox(this)
  exports.toggle = function toggleCheckbox(element)
  {
    element.check = !element.checked;
  }*/

  exports.parse = function() {
    // Move past the match
    this.parser.pos = this.matchRegExp.lastIndex;
    return [{type: "raw", 
      html: "<label for=\"check1\"><input type=\"checkbox\" name=\"option1\" id=\"check1\" value=\"Some Milk Please\"> Milk<\/label>"
    }];
  };
})();

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['defs.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"definition\">\n"
    + ((stack1 = container.invokePartial(partials["term.html"],depth0,{"name":"term.html","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(data && data.last),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<br>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title></title>\n        <link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = helpers.root || (depth0 != null ? depth0.root : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"root","hash":{},"data":data}) : helper)))
    + "/css/popup.css\">\n    </head>\n    <body>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.defs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </body>\n</html>\n";
},"usePartial":true,"useData":true});
templates['term.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"expression\"><ruby>"
    + alias4(((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expression","hash":{},"data":data}) : helper)))
    + "<rt>"
    + alias4(((helper = (helper = helpers.reading || (depth0 != null ? depth0.reading : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reading","hash":{},"data":data}) : helper)))
    + "</rt></ruby></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"expression\">"
    + container.escapeExpression(((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"expression","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"rules\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rules : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    &laquo;\n    "
    + container.escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"source","hash":{},"data":data}) : helper)))
    + "\n</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(data && data.last),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "&laquo;";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"tags\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(data && data.last),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    return ",";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <li><span>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.reading : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rules : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"glossary\">\n    <ol>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.glossary : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n</div>\n";
},"useData":true});
})();
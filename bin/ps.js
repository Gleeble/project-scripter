#!/usr/bin/env node

var _ = require('underscore');
var prog = require('commander');
prog.version(process.version);


var scriptName = process.argv[0] === 'node' ? process.argv[2] : process.argv[1];

var fs = require('fs');

var scripts = fs.readdirSync('./scripts');

var script = _.first(_.filter(scripts, function (currScript) {
    currScript = currScript.toLowerCase();
    return currScript === scriptName || currScript === (scriptName + ".js");
}));


if (script) {
    script = require('../scripts/' + scriptName);
    prog.description(script.description);
    configureCommands(script);
    prog.parse(Array.prototype.slice.apply(process.argv, [1]));
    script.execute(prog);
} else {
    console.log(scriptName + " is not found, make sure you've installed it properly.");
}


function configureCommands(script) {
    if (script.parameters) {
        _.each(script.parameters, function(command) {
            params = _.map(command.commands, function (arg) {
                if (arg) {
                    if (arg.length > 1) {
                        return "--" + arg;
                    } else {
                        return "-" + arg
                    }
                } else {
                    console.error("Invalid command argument" + command);
                }
            }).join(",");

            if (command.type && command.type != "BOOLEAN") {
                if (command.optional) {
                    params += " [" + command.type + "]";
                } else {
                    params += " <" + command.type + ">";
                }
            }
            prog.option(params, command.description)
        });
    }
}
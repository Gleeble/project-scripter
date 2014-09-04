exports.name = "Demo Script"

exports.usage = "[It puts the options on the commandline]"

exports.description = "This script demonstrates basic command script setup."

exports.parameters = [
    {
        commands: [
            "p", "person"
        ],
        type: "STRING",
        optional: true,
        description: "The name of a person"
    },
    {
        commands: [
            "g", "greeting"
        ],
        type: "STRING",
        description: "How would you greet someone?"
    },
    {
        commands: [
            "l", "length"
        ],
        type: "INT",
        description: "How Long?"
    }
]

exports.execute = function (command) {
    console.log((command.greeting || "Hello there") + ", It's good to see you " +
                (command.person || "Joe") + ", I haven't see you for " + (command.length || 8) +
                " years");
}
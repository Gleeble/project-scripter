project-scripter v0.0.1
================

A Node.JS Scripting framework to support reusable scripts to reduce the complexity of all the 
little project tasks

#Background
================

I often find that working on projects tends to come with a lot of little tips and tricks. 
From getting up and running to different build tasks to utilities that can be run to combinations
of all of them. To add to the confusion, these might not all run properly on everyone's 
machine due to file structure or operating system leaving people taking time to get up and 
running. What I wanted to do was to take advantage of Node.js' ability to run on different platforms 
and common language to build a basic utility that provides an easy way to script out commands and 
share them within a team. Ideally, this will evolve to allow for things like running an Express 
server to have easy access to your build logs, have capabilities in place to allow scripts to 
expect arguments or provide a necessary CLI or request input. 

As of now, you can easily perform these sorts of tasks with shell scripts and aliases, 
but I hope to be able to build out a platform that can be easily extended and distributed. And 
best of all everyone will use the same language making it easy for anyone to update and improve the
scripts.
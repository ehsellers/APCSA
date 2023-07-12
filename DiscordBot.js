const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const menu = require("./menu.json");
var breakfast = require("./breakfast.json");
var lunch = require("./lunch.json");
var dinner = require("./dinner.json");
var dessert = require("./dessert.json");
var r = ["```xml"];
var fs = require("fs");
var path = require("path");

const prefix = "!";

client.on('ready', (evt) => {
    console.log("Connected");
});

client.on("message", function(message)
{
   if(message.author.bot) return; 
   if(!message.content.startsWith(prefix)) return;
   
   recipes(message);
});

function menuList(message)
{
   var output = "```xml";
    
   output += ("\n# Menu commands ");
   for(var m = 0; m < menu.length; m++)
   {
      const id = Object.keys(menu[m])[1];
      const des = Object.keys(menu[m])[2];
      output += ("\n- <  " + prefix + menu[m][id] + "  >\t" + menu[m][des]);
   }
   output += "\n```";
   message.channel.send(output);   

}

function breakfastLinks(message)
{
   r = ("\n# Menu commands ");
   var i = parseInt(Math.random() * breakfast.length);
   const id = Object.keys(breakfast[i])[1];
   const des = Object.keys(breakfast[i])[2];
   r = ("\n- <  " + prefix + breakfast[i][id] + "  >\t" + breakfast[i][des]);
   message.channel.send(r);
}

function lunchLinks(message)
{
   r = ("\n# Menu commands ");
   var i = parseInt(Math.random() * lunch.length);
   const id = Object.keys(lunch[i])[1];
   const des = Object.keys(lunch[i])[2];
   r = ("\n- <  " + prefix + lunch[i][id] + "  >\t" + lunch[i][des]);
   message.channel.send(r);
}

function dinnerLinks(message)
{
   r = ("\n# Menu commands ");
   var i = parseInt(Math.random() * dinner.length);
   const id = Object.keys(dinner[i])[1];
   const des = Object.keys(dinner[i])[2];
   r = ("\n- <  " + prefix + dinner[i][id] + "  >\t" + dinner[i][des]);
   message.channel.send(r);
}

function dessertLinks(message)
{
   r = ("\n# Menu commands ");
   var i = parseInt(Math.random() * dessert.length);
   const id = Object.keys(dessert[i])[1];
   const des = Object.keys(dessert[i])[2];
   r = ("\n- <  " + prefix + dessert[i][id] + "  >\t" + dessert[i][des]);
   message.channel.send(r);
}

function addRecipes(message, type, name, link)
{
       if(name.length == 0 || link.length == 0) {
        message.channel.send("```diff\n- Error: Enter an name and recipe link. The link should have no spaces, the name can have spaces.```");
        return;
    }
 
   var log = "";
 
    if(type == "breakfast")
    {
       breakfast = JSON.parse(fs.readFileSync(path.join(__dirname + '/breakfast.json'), 'utf-8'));
    }
    else if(type == "lunch")
    {
       lunch = JSON.parse(fs.readFileSync(path.join(__dirname + '/lunch.json'), 'utf-8'));
    }
    else if(type == "dinner")
    {
       dinner = JSON.parse(fs.readFileSync(path.join(__dirname + '/dinner.json'), 'utf-8'));
    }
    else if(type == "dessert")
    {
       dessert = JSON.parse(fs.readFileSync(path.join(__dirname + '/dessert.json'), 'utf-8'));
    }
 
    //checks to see if game already exists (by id)
    for(var i = 0; i < log.length; i++)
    {
        const idKey = Object.keys(log[i])[0];
        if(log[i][idKey] == name)
        {
            message.channel.send("```diff\n- Error: Log already exists.```");
            return;
        }
    }
 
 
    //if game doesn't exist create a file in games.json
    if(type == "breakfast")
    {
       breakfast.push(JSON.parse("{\"" + "id" + "\":\"" + name 
                            +"\", \n\"name\": \"" + link + "\"}"));
    }
    else if(type == "lunch")
    {
       lunch.push(JSON.parse("{\"" + "id" + "\":\"" + name 
                            +"\", \n\"name\": \"" + link + "\"}"));
    }
    else if(type == "dinner")
    {
       dinner.push(JSON.parse("{\"" + "id" + "\":\"" + name 
                            +"\", \n\"name\": \"" + link + "\"}"));
    }
    else if(type == "dessert")
    {
       dessert.push(JSON.parse("{\"" + "id" + "\":\"" + name 
                            +"\", \n\"name\": \"" + link + "\"}"));
    } 
 
    //update games.json with new games array file
    fs.writeFile(path.join(__dirname + '/' + type + '.json'), JSON.stringify(log, null, 4), (err) =>
    {
        if (err)
        {
            message.channel.send("```diff\n- Internal error occurred, could not write to config file.```");
            console.log(err);
        }
        else
        {
            message.channel.send("```diff\n+ Log added (" + name + ").```");
        }
    });
}

function recipes(message)
{
   const commandBody = message.content.slice(prefix.length);
   const args = commandBody.split(' ');
   const command = args.shift().toLowerCase();
   
   switch(command)
   {
      case "menu":
         menuList(message);
         break;
      case "breakfast":
         breakfastLinks(message);
         break;
      case "lunch":
         lunchLinks(message);
         break;
      case "dinner":
         dinnerLinks(message);
         break;
      case "dessert":
         dessertLinks(message);
         break;
      case "add":
         if(args.length < 3) {
            message.channel.send("```diff\n- Invalid number of arguments.```");
            return; 
         }
         addRecipes(message, args.shift().toLowerCase(), args.shift(), args.join(" "));
         break;
   }
   
}

client.login(config.BOT_TOKEN);

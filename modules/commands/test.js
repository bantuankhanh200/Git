module.exports.config = {
name: "test",
version: "1.0.0",
hasPermissions: 0,
credits: "Khanh Shado",
description: "test",
commandCategory: "Test",
usages: "",
cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
switch (test) {
case "1": 
return api.sendMessage("Test", event. threadID);
break;
casr "2": 
return api.sendMessage("Test.", event.threadID);
}
default: 
return api.sendMessage("k cรณ trong ds", event.threadID);
   };
}

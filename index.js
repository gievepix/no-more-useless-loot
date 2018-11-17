const itemList = require('./itemlist.js');

module.exports = function NoMoreUselessLoot(mod) {
	mod.hook('S_SPAWN_DROPITEM', 6, event => {  		
		if (itemList.includes(event.item)) return false;
	});
}
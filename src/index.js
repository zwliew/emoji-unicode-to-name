const emoji = require('emojilib');

const emojiMap = {
  emojis: {}
};

for (let key in emoji.lib) {
  const char = emoji.lib[key].char;
  emojiMap.emojis[char] = key;
}

emojiMap.get = (...chars) => {
  const map = chars.map(char => emojiMap.emojis[char]);
  return map.length > 1 ? map : map[0];
}

module.exports = emojiMap;

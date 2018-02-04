# emoji-unicode-to-name

[![Greenkeeper badge](https://badges.greenkeeper.io/zwliew/emoji-unicode-to-name.svg)](https://greenkeeper.io/)

Provides a mapping of unicode emoji to name.

## Installation

```sh
npm i emoji-unicode-to-name
```

## Usage

```js
const emojiMap = require('emoji-unicode-to-name');

// Single emoji
console.log(emojiMap.get('🐵'));
// monkey_face

// Multiple emojis
console.log(emojiMap.get('😶','😰','😪','🖖'));
// [ 'no_mouth', 'cold_sweat', 'sleepy', 'vulcan_salute' ]

// List emojis
console.log(emojiMap.emojis);
// {
//  '🍇': 'grapes',
//  '🍓': 'strawberry',
//  '🍈': 'melon',
//  '🍒': 'cherries',
//  '🍑': 'peach',
//  '🍍': 'pineapple',
//  ...
// }
```

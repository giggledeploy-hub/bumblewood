import { useState, useRef } from "react";

const STORY = {
  start: {
    art: "🧙‍♀️✨🏡💫",
    story: `Meet FIZZWICK BUMBLEWAND — Fizzy to her friends! 🌟 She's Professor Wobble's apprentice, and she just knocked over his biggest, sparkliest bottle! 🫧 WHOOSH! BOING! All of Bumblewood village has shrunk to thimble-size! 😱 Mimsy the hummingbird zooms in: "Zip zip — don't worry Fizzy!" 🐦 Tobble the mouse adjusts his top hat: "Adventure awaits, friends!" 🐭🎩 They must find the un-shrinking spell before sundown! Which way?`,
    choices: [
      { text: "🍄 Climb the giant mushroom!", next: "mushroom", color: "#2e7d32", bg: "#e8f5e9", stars: 1 },
      { text: "🐜 Visit the ant kingdom", next: "ants", color: "#e65100", bg: "#fff3e0", stars: 1 },
      { text: "🦋 Follow the glowing butterfly", next: "butterfly", color: "#6a1b9a", bg: "#f3e5f5", stars: 1 },
      { text: "🍋 Sail the lemonade river", next: "lemonade", color: "#0277bd", bg: "#e1f5fe", stars: 1 },
    ],
  },

  // ===== LEVEL 2 (3 choices each) =====

  mushroom: {
    art: "🍄🔭🦜",
    story: `Mimsy zips to the top: "I see EVERYTHING from here, zip zip!" 🐦 Fizzy spots THREE friends nearby — a beehive that smells like fresh jalebis 🍯, a wise old owl reading a glowing book 🦉, and CHINTU the chatterbox parrot swinging on a leaf! 🦜 "Hello hello, who's there there?" Chintu calls!`,
    choices: [
      { text: "🐝 Race Mimsy to the honey beehive!", next: "beehive", color: "#e65100", bg: "#fff3e0", stars: 2 },
      { text: "🦉 Tobble bows to the wise owl", next: "owl", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
      { text: "🦜 Climb up to chat with Chintu!", next: "chintu", color: "#388e3c", bg: "#e8f5e9", stars: 2 },
    ],
  },

  ants: {
    art: "🐜🪖✨",
    story: `The ant army salutes! "HALT!" shouts the tiny general in a teeny helmet. 🪖 Tobble bows politely. Fizzy sees THREE options — a giant crumb the ants need help moving 🍞, a sparkly tunnel glowing behind them ✨, and a group of fireflies setting up what looks like a tiny Diwali festival! 💡🪔`,
    choices: [
      { text: "💪 Help carry the giant crumb!", next: "teamwork", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "✨ Sneak into the sparkly tunnel", next: "tunnel", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
      { text: "🪔 Join the firefly Diwali festival!", next: "firefly_fest", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },

  butterfly: {
    art: "🦋🌸🥭",
    story: `The butterfly leads them past a HUGE mango tree with tiny fruit-bats hanging upside down! 🥭🦇 They reach a clearing where Hedgehog runs a little market — maps, mango slices, acorn cookies! 🦔 Tobble's tummy rumbles. Mimsy spots something glowing behind the stall! ✨`,
    choices: [
      { text: "🗺️ Buy a treasure map (one acorn!)", next: "map_buy", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🥭 Climb up the magic mango tree!", next: "mango_tree", color: "#f57c00", bg: "#fff8e1", stars: 2 },
      { text: "🍪 Buy cookies and chat with Hedgehog", next: "cookie_chat", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },

  lemonade: {
    art: "🍋🌊🦚",
    story: `The lemonade river FIZZES! 🍋 Tobble pulls a leaf-boat from his coat. A kind otter offers a ride. 🦦 But wait — Mimsy spots PEACOCKS with golden feathers dancing on a pier! 🦚 "Zip zip — they're SHIMMERY!" she squeaks!`,
    choices: [
      { text: "🚣 Sail safely with the otter", next: "river_boat", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🌊 Take the WILD rapids — yahoo!", next: "rapids", color: "#0277bd", bg: "#e1f5fe", stars: 3 },
      { text: "🦚 Visit the dancing peacocks!", next: "peacock_pier", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
    ],
  },

  // ===== LEVEL 3 (2-3 choices each) =====

  beehive: {
    art: "🐝🍯👑",
    story: `The bees are baking MINI JALEBIS! 🍯 So sweet! Queen Bee buzzes over in a tiny crown. 👑 "Welcome, dears! To earn the spell, choose a test — Dance, Riddle, or Kitchen-Help?"`,
    choices: [
      { text: "🕺 Dance the Bee Wiggle!", next: "bee_dance", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🧠 Try the Queen's riddle", next: "bee_riddle", color: "#6a1b9a", bg: "#f3e5f5", stars: 3 },
      { text: "🍯 Help bake mini jalebis!", next: "honey_kitchen", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },

  owl: {
    art: "🦉📚🌙",
    story: `Owl opens one giant eye. "Hoo-hoo-hooo seeks me?" 🦉 Tobble bows deeply. The owl smiles: "I offer THREE things — a riddle, a moonbeam quest, or an introduction to wise Dadi Tortoise. Choose!" 🐢`,
    choices: [
      { text: "🧠 Try the owl's riddle", next: "owl_riddle", color: "#6a1b9a", bg: "#f3e5f5", stars: 3 },
      { text: "🌙 Catch a moonbeam quest!", next: "owl_quest", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🐢 Meet wise Dadi Tortoise", next: "dadi_tortoise", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },

  chintu: {
    art: "🦜🌳🗝️",
    story: `Chintu copies EVERYTHING! "Hello!" → "Hello hello hello!" 🦜 Tobble tries to ask serious questions but Chintu just sings funny songs! Then SUDDENLY Chintu drops a GOLDEN KEY from his beak! "Key key key for spell garden!"`,
    choices: [
      { text: "🗝️ Take the key and thank Chintu!", next: "chintu_key", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🎶 Sing a song WITH Chintu first", next: "chintu_song", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },

  teamwork: {
    art: "🐜💪🎉",
    story: `Heave! Ho! PUSH! 🏋️ Fizzy, Mimsy, Tobble and ALL the ants roll the crumb together! 🎉 The general bows: "True DOSTI (friendship)!" He gives Fizzy a golden scroll AND a tiny key! "Now — feast with us, or rush to the garden?"`,
    choices: [
      { text: "🍛 Stay for the ant victory feast!", next: "ant_feast", color: "#f57c00", bg: "#fff8e1", stars: 2 },
      { text: "🗝️ Rush to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
    ],
  },

  tunnel: {
    art: "✨🕳️💎",
    story: `The tunnel SPARKLES with crystals! 💎 They find a wishing pool — Tobble tosses a sunflower seed. 🌻 The pool ripples and shows a GLOWING MAP! Suddenly a tiny door opens in the wall — and Dadi Tortoise pokes her head out! 🐢 "Aap kahan ja rahe ho, bachhon? (Where are you going, children?)"`,
    choices: [
      { text: "🗺️ Follow the magical map", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🐢 Greet Dadi Tortoise politely", next: "dadi_tortoise", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },

  firefly_fest: {
    art: "🪔💡🎆",
    story: `Hundreds of fireflies are setting up a DIWALI festival! 🪔 Tiny diyas everywhere! The air smells of sweets! "Help us, and we'll guide you anywhere!" 💡 Mimsy zips around helping. Tobble carefully lights diyas with a matchstick! ✨`,
    choices: [
      { text: "🪔 Light ALL the diyas together!", next: "diya_blessing", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🍬 Sample the festival sweets first", next: "festival_sweets", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },

  map_buy: {
    art: "🗺️🌟🥭",
    story: `The map has TINY drawings of jalebis marking tasty spots! 🍪 It shows the spell garden AND a hidden mango grove! 🥭 Mimsy spots a lost firefly looking very sad. 💛`,
    choices: [
      { text: "💛 Help the lost firefly!", next: "firefly_help", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🥭 Detour to the magic mango grove!", next: "mango_grove", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },

  mango_tree: {
    art: "🥭🦇🦸",
    story: `The mango tree is GIGANTIC! Captain Mango — a brave fruit-bat in a tiny cape — swoops down! 🦇 "Welcome, brave travelers!" He hands Fizzy a magic golden mango. "Eat it and you'll have SUPER-JUMP powers, OR save it for the spell itself!" 🚀`,
    choices: [
      { text: "🥭 EAT it and super-jump!", next: "super_jump", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🎁 Save it for the spell garden", next: "spell_garden_gate", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },

  cookie_chat: {
    art: "🍪🦔🏏",
    story: `The acorn cookies are AMAZING! 🍪 Hedgehog whispers: "Psst — the garden has a hidden back gate. A shiny pebble opens it!" Suddenly BINGO the boastful cricket hops in with a bat! 🦗 "Cricket match anyone? Winner gets a magic pebble!" 🏏`,
    choices: [
      { text: "🏏 Play cricket with Bingo!", next: "cricket_match", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "✨ Skip cricket — find a pebble nearby", next: "spell_garden_secret", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },

  river_boat: {
    art: "⛵🦦🍯",
    story: `Otter rows beautifully, singing! 🎵 They float past HONEY ISLAND — a tiny island made of pure honey! 🍯 Suddenly — Mimsy gets stuck in sticky honeysuckle! "Help help, zip zip!" 🐦`,
    choices: [
      { text: "🤝 Tobble bravely rescues Mimsy!", next: "mimsy_rescue", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🍯 Stop at Honey Island for snacks!", next: "honey_island", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },

  rapids: {
    art: "🌊🎢🐟",
    story: `WHOOSH! The lemonade rapids are SO bouncy! 🎢 They zoom past minnows wearing scarves 🐟🧣! At the bottom they meet GOLDIE, a wise old goldfish in tiny spectacles! 🐟 "I can offer a secret SHORTCUT or teach you WATER MAGIC!"`,
    choices: [
      { text: "🎣 Take the secret shortcut!", next: "fish_shortcut", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "💧 Learn Goldie's water magic", next: "water_magic", color: "#0277bd", bg: "#e1f5fe", stars: 2 },
    ],
  },

  peacock_pier: {
    art: "🦚💃✨",
    story: `The peacocks SHIMMER with golden-blue-green feathers! 🦚 "Welcome, travelers! Will you dance with us Bollywood-style, OR solve our feather riddle?" They twirl gracefully! 💃`,
    choices: [
      { text: "💃 BOLLYWOOD DANCE-OFF!", next: "peacock_dance", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🧠 Try the feather riddle", next: "peacock_riddle", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
    ],
  },

  // ===== LEVEL 4 (resolutions, lead to spell garden) =====

  bee_dance: {
    art: "🐝💃🌟",
    story: `Everyone wiggles! Even Tobble's top hat wiggles! 🕺 The Queen is delighted and gives Fizzy a magic HONEYCOMB PIECE that opens any door! 🍯✨`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  bee_riddle: {
    art: "🐝🧠🥭",
    story: `Queen Bee asks: "I'm sweet, I'm gold, I grow on trees but I'm not honey!" Tobble thinks hard... "MANGO!" 🥭 "CORRECT!" The Queen gives them a MAGIC MANGO SEED! ✨`,
    choices: [{ text: "🌟 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  honey_kitchen: {
    art: "🍯👩‍🍳🥧",
    story: `Fizzy makes the BEST mini jalebis ever! Even Tobble (a serious foodie) is amazed! 🍯 The Queen declares: "You have honey-magic hands!" She gives Fizzy a golden glaze-vial for the spell. ✨`,
    choices: [{ text: "🌸 Hurry to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  owl_riddle: {
    art: "🦉🔥⭐",
    story: `Owl asks: "What grows when it eats and dies when it drinks?" Tobble shouts: "FIRE!" 🔥 "Correct!" Owl hands Fizzy the GOLDEN FLOWER. 🌼`,
    choices: [{ text: "🌟 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  owl_quest: {
    art: "🌙✨🍶",
    story: `Mimsy zips up and catches a moonbeam in a tiny bottle! 🌙✨ Owl is amazed: "Wings of wisdom, little ones!" He gives them the golden flower AND a moon-blessing. 🌼`,
    choices: [{ text: "🌸 Go to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  dadi_tortoise: {
    art: "🐢🍡💖",
    story: `Dadi is SO sweet! 🐢 "Beta, come, sit! Have a laddoo!" 🍡 "I know the spell — 'BUMBLE-WOBBLE-ZOOM-KA-ZAP'. But you must say it with LOVE and DOSTI. Now go, bachhon!" She blesses them with her wrinkled flipper. ✨`,
    choices: [{ text: "🙏 Touch Dadi's feet, then go!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  chintu_key: {
    art: "🗝️🦜⭐",
    story: `Chintu hops on Fizzy's shoulder! "Friend friend friend!" 🦜 He guides them to the spell garden, chattering NON-STOP. They laugh so hard their tummies ache! 😂`,
    choices: [{ text: "🌸 Use Chintu's key at the secret gate!", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  chintu_song: {
    art: "🎶🦜🌳",
    story: `They sing together — Chintu does the chorus 100 times! 🎶 The trees sway! A magical pathway of musical notes appears! 🎵✨`,
    choices: [{ text: "🎼 Follow the music pathway!", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  ant_feast: {
    art: "🍛🐜🎊",
    story: `The feast is INCREDIBLE — tiny rice grains, sugar-crystal sweets, leaf-curry! 🍛 Tobble has SEVEN helpings! 🐭 The ants present Fizzy with the GOLDEN GATE KEY and special blessings! 🗝️✨`,
    choices: [{ text: "🌸 Off to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  diya_blessing: {
    art: "🪔✨🌟",
    story: `Every diya is LIT! The forest glows with golden light! ✨ The fireflies bless Fizzy: "May your spell glow as bright as our flames!" 🪔 They escort her to the spell garden, lighting the path! 🌟`,
    choices: [{ text: "🌸 To the spell garden in glowing glory!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  festival_sweets: {
    art: "🍬🪔😋",
    story: `Tiny gulab jamuns! Mini laddoos! Itty-bitty barfi! 🍬 Mimsy's beak is sticky. Tobble's whiskers are sugary! 😂 A firefly chef gives Fizzy a magic strength-sweet! 💪`,
    choices: [{ text: "🌸 Continue to the spell garden!", next: "spell_garden_gate", color: "#e65100", bg: "#fff3e0", stars: 1 }],
  },

  firefly_help: {
    art: "💛✨🐛",
    story: `The lost firefly is TWINKLE! 💛 They reunite her with her family, who form a glowing escort to the spell garden! ✨🌟`,
    choices: [{ text: "🌸 Sparkle on to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  mango_grove: {
    art: "🥭🌳✨",
    story: `The magic mango grove SMELLS of dreams! 🥭 Fizzy plucks a sparkly magic mango. Captain Mango Bat appears: "Brave one! Take this for STRENGTH in your spell!" 💪✨`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  super_jump: {
    art: "🚀🦘✨",
    story: `BOING! Fizzy SUPER-JUMPS over rocks and rivers in seconds! 🚀 Tobble holds his hat tight! They land at the spell garden in record time!`,
    choices: [{ text: "🌸 Land at the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  cricket_match: {
    art: "🏏🦗🏆",
    story: `Tobble BOWLS! Mimsy FIELDS! Fizzy BATS with a twig and hits a SIX! 🏏 The bugs cheer wildly! 🎉 Bingo bows: "You play with great spirit!" He hands over the SHINY MAGIC PEBBLE! ✨`,
    choices: [{ text: "🗝️ Open the secret garden gate!", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  mimsy_rescue: {
    art: "🐭🤝🐦",
    story: `Tobble heroically scoops Mimsy from the honey! 🤝 "Are you okay, friend?" "Zip zip — yes!" 🐦 The honey is yummy too — bonus snack! 🍯 Otter rows them right to the garden!`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_river", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  honey_island: {
    art: "🍯🏝️😋",
    story: `Honey Island is YUMMY! 🍯 They eat their fill and pack some for later. Then — uh oh, time! They ROW FAST! 🚣`,
    choices: [{ text: "🌸 Rush to the spell garden!", next: "spell_garden_river", color: "#e65100", bg: "#fff3e0", stars: 1 }],
  },

  fish_shortcut: {
    art: "🐟🌊⚡",
    story: `Goldie shows them a SECRET underwater tunnel! 🐟 Hold breath... swim... POP! Right inside the spell garden! 🌸`,
    choices: [{ text: "✨ Find the spell stone!", next: "spell_garden_river", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  water_magic: {
    art: "💧🌊✨",
    story: `Goldie teaches Fizzy WATER MAGIC! 💧 Now she can make water DANCE! ✨ "Use this in your spell, brave one!" They reach the garden refreshed!`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_river", color: "#0277bd", bg: "#e1f5fe", stars: 2 }],
  },

  peacock_dance: {
    art: "🦚💃🎬",
    story: `BOLLYWOOD TIME! 💃🕺 Fizzy, Mimsy, Tobble and the peacocks DANCE! Hands up! Hips swing! SPIN SPIN SPIN! 🎵 The peacocks are SO impressed they give Fizzy a GOLDEN FEATHER — the most magical thing in all Bumblewood! 🪶✨`,
    choices: [{ text: "🌸 Dance to the grand spell garden!", next: "spell_garden_grand", color: "#2e7d32", bg: "#e8f5e9", stars: 3 }],
  },

  peacock_riddle: {
    art: "🦚🧠🪶",
    story: `The lead peacock asks: "I have eyes but cannot see, I'm bright but make no light. What am I?" Tobble bows: "A peacock feather!" 🪶 "CORRECT!" They give Fizzy a small magic feather. ✨`,
    choices: [{ text: "🌸 To the grand spell garden!", next: "spell_garden_grand", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  // ===== LEVEL 5 (Spell Garden Entrances) =====

  spell_garden_gate: {
    art: "🌸🚪✨",
    story: `The Spell Garden gate is HUGE! 🌸 A gentle moss-guard asks: "Password please?" Tobble whispers to Fizzy: "I read it in a book — was it PLEASE or NAMASTE?" 🎩`,
    choices: [
      { text: "🙏 Say 'Please!' politely", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🙏 Say 'Namaste!' with folded hands", next: "spell_cast", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },

  spell_garden_secret: {
    art: "🚪✨🌟",
    story: `The secret back gate opens silently! ✨ They tiptoe in and find the spell stone glowing in moonlight! 🌟 Mimsy quivers with excitement. Tobble straightens his hat one last time! 🎩`,
    choices: [{ text: "✨ Approach the spell stone!", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  spell_garden_river: {
    art: "🌸🌊⭐",
    story: `The river deposits them at the spell stone! 🌊 Lily pads form a magical path. Fireflies dance overhead. ✨`,
    choices: [{ text: "✨ Walk to the spell stone!", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  spell_garden_grand: {
    art: "🎆🌸🪶",
    story: `The GRAND entrance opens with a flourish! 🎆 The spell garden is decorated with peacock feathers and glowing flowers — it looks like Diwali night! 🪔✨`,
    choices: [{ text: "🌟 Stand before the spell stone!", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },

  spell_cast: {
    art: "✨🌟💫",
    story: `Fizzy holds her magical items HIGH! 🌼 Mimsy zooms in CIRCLES above! 🐦 Tobble takes her hand, hat firmly on! 🎩 "Ready, friends?" "READY!" Together they shout — "BUMBLE-WOBBLE-ZOOM-KA-ZAP!" THREE TIMES! And SPIN! ✨🌀✨`,
    choices: [{ text: "🎊 BOING! POP! ZOOM!", next: "ending_check", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },

  ending_check: { end: "check" },
};

const ENDINGS = {
  hero: {
    art: "🎉🌈🏡✨🌟",
    title: "The Legendary Hero of Bumblewood!",
    text: `BOING-POP-ZOOM!! 🎊 Bumblewood blooms back to full size! 🏡 The villagers CHEER! There's cake, balloons, and a Diwali-style fireworks display! 🎆 The village makes Fizzy, Mimsy and Tobble into honorary ROYAL WIZARDS with tiny golden crowns! 👑 Professor Wobble shakes Fizzy's hand: "Outstanding, Fizzwick. Best apprentice EVER." Dadi Tortoise sends a basket of laddoos! 🍡 Chintu shouts "Hooray hooray hooray!" 🦜 What an adventure! 🌟`,
  },
  almost: {
    art: "🤗🌸🏡💝",
    title: "The Almost-Hero Ending!",
    text: `POP! Bumblewood grows back — mostly! 🏡 A few houses wobble, the bakery is upside down, but everyone's SAFE and laughing! 😄 Mimsy and Tobble hug Fizzy tight. The villagers throw a small chai party in her honour. 🍵 Professor Wobble pats her shoulder: "Not bad, beta. We'll fix the rest tomorrow — together." 💝 What a sweet, slightly-wonky day!`,
  },
};

export default function BumbleWood() {
  const [scene, setScene] = useState("start");
  const [stars, setStars] = useState(0);
  const [step, setStep] = useState(0);
  const [muted, setMuted] = useState(false);
  const audioCtxRef = useRef(null);

  const totalSteps = 6;
  const starGoal = 10;

  function getCtx() {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtxRef.current;
  }

  function playTone(freq, duration = 0.15, type = "triangle", volume = 0.18) {
    if (muted) return;
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  function playClick() {
    playTone(660, 0.08, "sine", 0.12);
  }

  function playStar(count) {
    if (count <= 0) return;
    const notes = [880, 1175, 1568, 2093];
    for (let i = 0; i < Math.min(count, notes.length); i++) {
      setTimeout(() => playTone(notes[i], 0.18, "triangle", 0.15), 100 + i * 110);
    }
  }

  function playWin() {
    const melody = [523, 659, 784, 1047, 1319];
    melody.forEach((f, i) => {
      setTimeout(() => playTone(f, 0.3, "triangle", 0.2), i * 130);
    });
    setTimeout(() => playTone(1568, 0.5, "triangle", 0.22), melody.length * 130);
  }

  function playAlmost() {
    playTone(523, 0.25, "triangle", 0.18);
    setTimeout(() => playTone(659, 0.25, "triangle", 0.18), 200);
    setTimeout(() => playTone(784, 0.4, "triangle", 0.2), 400);
  }

  const node = STORY[scene];

  function choose(choice) {
    playClick();
    const newStars = stars + (choice.stars || 0);
    setStars(newStars);
    setStep(s => s + 1);
    if (choice.stars > 0) playStar(choice.stars);
    if (choice.next === "ending_check") {
      setTimeout(() => {
        if (newStars >= starGoal) playWin();
        else playAlmost();
      }, 600);
    }
    setScene(choice.next);
  }

  function restart() {
    playClick();
    setScene("start");
    setStars(0);
    setStep(0);
  }

  if (node.end) {
    const ending = stars >= starGoal ? ENDINGS.hero : ENDINGS.almost;
    return (
      <div style={{ fontFamily: "'Nunito', 'Comic Sans MS', cursive, sans-serif", padding: "1rem 0.5rem 2rem" }}>
        <div style={{ background: "linear-gradient(160deg, #fff9c4 0%, #e1f5fe 50%, #f8bbd0 100%)", borderRadius: 24, border: "4px solid #ffb74d", padding: "1.5rem", textAlign: "center", boxShadow: "0 8px 24px rgba(255,183,77,0.25)" }}>
          <div style={{ fontSize: 60, lineHeight: 1.2, marginBottom: 8 }}>{ending.art}</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#bf360c", marginBottom: 8 }}>{ending.title}</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#4a4a4a", lineHeight: 1.7, background: "rgba(255,255,255,0.85)", borderRadius: 14, padding: "1rem", marginBottom: 12, border: "3px dashed #ffb74d" }}>{ending.text}</div>
          <div style={{ fontSize: 20, marginBottom: 12, color: "#e65100", fontWeight: 800 }}>
            ⭐ You collected {stars} of {starGoal} stars!
          </div>
          {stars < starGoal && (
            <div style={{ fontSize: 14, fontWeight: 700, color: "#6a1b9a", marginBottom: 12, background: "#f3e5f5", padding: "0.5rem 1rem", borderRadius: 12 }}>
              💡 Try different choices to unlock the LEGENDARY HERO ending!
            </div>
          )}
          <button onClick={restart} style={{ background: "#42a5f5", border: "none", borderRadius: 20, padding: "0.85rem 2rem", fontSize: 17, fontWeight: 800, color: "#fff", cursor: "pointer", boxShadow: "0 4px 0 #1565c0" }}>
            🔄 Play Again!
          </button>
        </div>
      </div>
    );
  }

  const progress = Math.min(step / totalSteps, 1);
  const starProgress = Math.min(stars / starGoal, 1);

  return (
    <div style={{ fontFamily: "'Nunito', 'Comic Sans MS', cursive, sans-serif", padding: "1rem 0.5rem 2rem" }}>
      <div style={{ background: "linear-gradient(160deg, #fffde7 0%, #e8f5e9 100%)", borderRadius: 24, border: "3px solid #81c784", padding: "1.5rem", position: "relative", boxShadow: "0 6px 20px rgba(129,199,132,0.2)" }}>
        <button
          onClick={() => setMuted(m => !m)}
          aria-label={muted ? "Unmute sounds" : "Mute sounds"}
          style={{ position: "absolute", top: 12, right: 12, background: muted ? "#ffcdd2" : "#c8e6c9", border: "2px solid " + (muted ? "#e57373" : "#66bb6a"), borderRadius: 50, width: 38, height: 38, fontSize: 18, cursor: "pointer", fontWeight: 800 }}
        >
          {muted ? "🔇" : "🔊"}
        </button>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#2e7d32", textAlign: "center", marginBottom: 2 }}>🍄 Bumblewood Adventure</div>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#66bb6a", textAlign: "center", marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>Fizzy, Mimsy & Tobble's Big Quest!</div>

        <div style={{ marginBottom: 6 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#558b2f", marginBottom: 4 }}>📖 Journey progress</div>
          <div style={{ height: 8, background: "#c8e6c9", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.round(progress * 100)}%`, background: "linear-gradient(90deg,#66bb6a,#42a5f5)", borderRadius: 8, transition: "width 0.4s" }} />
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#f57f17", marginBottom: 4 }}>⭐ Stars: {stars} / {starGoal}</div>
          <div style={{ height: 8, background: "#ffe0b2", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.round(starProgress * 100)}%`, background: "linear-gradient(90deg,#ffd54f,#ffa726)", borderRadius: 8, transition: "width 0.4s" }} />
          </div>
        </div>

        <div style={{ fontSize: 52, textAlign: "center", lineHeight: 1, margin: "0.5rem 0 1rem" }}>{node.art}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#3e3e3e", lineHeight: 1.7, background: "rgba(255,255,255,0.85)", borderRadius: 14, padding: "1rem 1.2rem", marginBottom: 14, border: "2px dashed #a5d6a7" }}>{node.story}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {node.choices.map((c, i) => (
            <button
              key={i}
              onClick={() => choose(c)}
              style={{ background: c.bg, border: `3px solid ${c.color}`, borderRadius: 18, padding: "0.85rem 1rem", fontSize: 15, fontWeight: 800, color: c.color, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8, transition: "transform 0.12s", boxShadow: `0 3px 0 ${c.color}` }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {c.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
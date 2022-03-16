const { MODE } = require("./blendMode.js");
const description =
  "The Degentlemen's Club is a collection of 6,000 Saber-toothed Degens roaming in the Ethereum jungle. Each NFT is unique and grants each holder access to the VIP section with holders-only benefits. Every single member in the VIP section will have a say in the steps we take for the future of this project.";
const baseUri = "ipfs://QmconZbmdGXFsAMk9iFgRAMujTVKTkd37QiWdcZGQvUZL3";

const layerConfigurations = [
  {
    growEditionSizeTo: 6000,
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "FUR" },
      { name: "CLOTHING" },
      { name: "MOUTH" },
      { name: "HEADWEAR" },
      { name: "EYES" },

      // { name: "7" },
      // { name: "8" },
      // { name: "9" },
      // { name: "10" },
      // { name: "Eye" },
      // { name: "Back" },
      // { name: "Backgrounds" },
      // { name: "Caps" },
      // { name: "Chain pendant" },
      // { name: "Chains" },
      // { name: "Mouth" },
      // { name: "Clothes" },
      // { name: "Eyes" },
      // { name: "Glasses" },
      // { name: "Skins" },
      // { name: "Teeth" },
      // { name: "Pets" },
      // { name: "Mystery1" },
      // { name: "Mystery2" },
      // { name: "Mystery3" },
      // { name: "Mystery4" },
      // { name: "Mystery5" },
      // { name: "Mystery6" },
      // { name: "Mystery7" },
      // { name: "Mystery8" },
      // { name: "Mystery9" },
      // { name: "Mystery10" },
      // { name: "Mystery11" },
      // { name: "Mystery12" },
      // { name: "test2" },
      // { name: "test3" },
      // { name: "test4" },
      // { name: "test5" },
      // { name: "test6" },
      // { name: "test7" },
      // { name: "test8" },
      // { name: "test9" },
      // { name: "test10" },
    ],
  },
];

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "*";

const uniqueDnaTorrance = 1000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #151",
    "rarity": "EPIC",
    "power" : "2.5",
    "image" : "https://gateway.btfs.io/btfs/QmcgcyktpNvg8R6pGEZf51tHZHiMKnBs66xTS3fJ76rqFz"
  })
}

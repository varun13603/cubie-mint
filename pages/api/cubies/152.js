// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #152",
    "rarity": "EPIC",
    "power" : "2.5",
    "image" : "https://gateway.btfs.io/btfs/QmZtaDrGcRJJbhHugUa5pQUJFdRzJVdMwmR5ydBFrG7cPU"
  })
}

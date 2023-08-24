import mongoose from "mongoose";
const personajesSchema = new mongoose.Schema(
  [
    {
      name: { type: String },
      via: [
        "Conservación",
        "Destrucción",
        "Cacería",
        "Erudición",
        "Armonía",
        "Nihilidad",
        "Abundacia",
      ],
      type: [
        "Hielo",
        "Físico",
        "Fuego",
        "Rayo",
        "Viento",
        "Cuántico",
        "Imaginario",
      ],
      info: { type: String },
      details: { type: String },
      img: { type: String },
      faction: { type: String },
    },
  ],
  {
    timestamps: true,
    versionKey: false,
  }
);
const personajes = mongoose.model("personajes", personajesSchema);
export default personajes;

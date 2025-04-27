// models/user.schema.js
import { z } from "zod";
import { Timestamp } from "firebase-admin/firestore";

// Utilidad para aceptar tanto ISO strings como Firestore Timestamp
const dateField = z.any().transform((val) => {
  if (val instanceof Timestamp) return val.toDate();
  if (typeof val === "string" || val instanceof Date) return new Date(val);
  throw new Error("Formato de fecha inválido");
});

export const UserSchema = z.object({
  username: z.string().min(3, "El username es obligatorio"),
  sexo: z.string(1).min(1, 'El sexo es obligatorio'),
  fNacimiento: z.string().transform((str) => new Date(str)),
  email: z.string().email("Email inválido"),
  idiomaOrigen: z.string().default("Español"),
  idiomaAprender: z.string().default("Inglés"),
  eresMaestro: z.boolean().default(false),
  password:z.string().min(5, "el password debe contener minimo 5 caracteres"),
  profilePic: z.string().url("URL inválida"),
  ejercicios: z.object({
    ejerciciosPorDia: z.array(
      z.object({
        ejerciciosResueltos: z.number().min(0, "Debe ser >= 0"),
        ejerciciosErrores: z.number().min(0, "Debe ser >= 0"),
        dia: dateField,
      })
    )
  }).default({ ejerciciosPorDia: [] }) // por si llega vacío
});

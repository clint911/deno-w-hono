import AnimalSchema from "../mock/animal.schema.ts";
import PersonalDetailsSchema from "../mock/personal-details.schema.ts";
import { z } from "zod";

export type PersonalDetail = z.infer<typeof PersonalDetailsSchema>;
export type Animal = z.infer<typeof AnimalSchema>;

import z from "zod";

const RegionOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const FiltersSchema = z.object({
  term: z.string().optional(),
  region: RegionOptionSchema.optional(),
});

export type FilterForm = z.infer<typeof FiltersSchema>;

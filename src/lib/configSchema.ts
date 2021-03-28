import * as z from "zod";

const Workspaces = z.record(
  z.object({
    apiKey: z.string(),
    user: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    }),
  })
);

export const ConfigSchema = z.object({
  activeWorkspace: z.string(),
  workspaces: Workspaces,
});

export type Config = z.infer<typeof ConfigSchema>;

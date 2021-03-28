import * as z from "zod";

const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

const Workspaces = z.record(
  z.object({
    apiKey: z.string(),
    user: User,
  })
);

export const Config = z.object({
  activeWorkspace: z.string(),
  workspaces: Workspaces,
});

export type Config = z.infer<typeof Config>;
export type User = z.infer<typeof User>;

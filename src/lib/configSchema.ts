import * as z from 'zod';

const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

const Workplace = z.object({
  apiKey: z.string(),
  defaultTeam: z.string(),
  user: User,
});

const Workspaces = z.record(Workplace);

export const Config = z
  .object({
    activeWorkspace: z.string(),
    workspaces: Workspaces,
  })
  .refine((config) => Object.keys(config.workspaces).includes(config.activeWorkspace), {
    message: 'The current active workspace was not found in your config file.',
  });

export type Config = z.infer<typeof Config>;
export type User = z.infer<typeof User>;
export type Workspace = z.infer<typeof Workplace>;

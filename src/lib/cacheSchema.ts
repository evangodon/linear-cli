import * as z from 'zod';

const State = z.object({
  id: z.string(),
  name: z.string(),
});

const States = z.array(State);

const Team = z.record(States);

export const CacheSchema = z.object({
  date: z.string(),
  teams: z.record(Team),
});

export type CacheData = z.infer<typeof CacheSchema>;

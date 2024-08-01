import { z } from "zod";

// Validation Schema

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export default schema;

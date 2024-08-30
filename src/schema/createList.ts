import { z } from "zod";
import { ListMap } from "@/lib/const";

export const createListZodSchema = z.object({
  name: z.string().min(1, {
    message: "清单名称不能为空",
  }),
  color: z
    .string()
    .min(1, {
      message: "请选择一个颜色",
    })
    .refine((color) => Array.from(ListMap.keys()).includes(color)),
});

export type CreateListZodSchemaType = z.infer<typeof createListZodSchema>;

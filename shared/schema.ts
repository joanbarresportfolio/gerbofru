import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const supplierInquiries = pgTable("supplier_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  products: jsonb("products").notNull().$type<string[]>(),
  location: text("location").notNull(),
  volume: text("volume").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const buyerInquiries = pgTable("buyer_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  productsInterest: jsonb("products_interest").notNull().$type<string[]>(),
  destination: text("destination").notNull(),
  volumeNeeded: text("volume_needed").notNull(),
  frequency: text("frequency").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSupplierInquirySchema = createInsertSchema(supplierInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  products: z.array(z.string()).min(1, "Please select at least one product"),
  volume: z.string().min(1, "Volume is required"),
});

export const insertBuyerInquirySchema = createInsertSchema(buyerInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  productsInterest: z.array(z.string()).min(1, "Please select at least one product"),
  volumeNeeded: z.string().min(1, "Volume needed is required"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSupplierInquiry = z.infer<typeof insertSupplierInquirySchema>;
export type SupplierInquiry = typeof supplierInquiries.$inferSelect;
export type InsertBuyerInquiry = z.infer<typeof insertBuyerInquirySchema>;
export type BuyerInquiry = typeof buyerInquiries.$inferSelect;

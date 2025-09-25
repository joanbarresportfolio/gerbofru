import { type User, type InsertUser, type SupplierInquiry, type InsertSupplierInquiry, type BuyerInquiry, type InsertBuyerInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSupplierInquiry(inquiry: InsertSupplierInquiry): Promise<SupplierInquiry>;
  createBuyerInquiry(inquiry: InsertBuyerInquiry): Promise<BuyerInquiry>;
  getSupplierInquiries(): Promise<SupplierInquiry[]>;
  getBuyerInquiries(): Promise<BuyerInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private supplierInquiries: Map<string, SupplierInquiry>;
  private buyerInquiries: Map<string, BuyerInquiry>;

  constructor() {
    this.users = new Map();
    this.supplierInquiries = new Map();
    this.buyerInquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createSupplierInquiry(insertInquiry: InsertSupplierInquiry): Promise<SupplierInquiry> {
    const id = randomUUID();
    const inquiry: SupplierInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
      message: insertInquiry.message || null,
    };
    this.supplierInquiries.set(id, inquiry);
    return inquiry;
  }

  async createBuyerInquiry(insertInquiry: InsertBuyerInquiry): Promise<BuyerInquiry> {
    const id = randomUUID();
    const inquiry: BuyerInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
      message: insertInquiry.message || null,
    };
    this.buyerInquiries.set(id, inquiry);
    return inquiry;
  }

  async getSupplierInquiries(): Promise<SupplierInquiry[]> {
    return Array.from(this.supplierInquiries.values());
  }

  async getBuyerInquiries(): Promise<BuyerInquiry[]> {
    return Array.from(this.buyerInquiries.values());
  }
}

export const storage = new MemStorage();

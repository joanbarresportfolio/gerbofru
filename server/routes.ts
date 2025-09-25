import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSupplierInquirySchema, insertBuyerInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Supplier inquiry endpoint
  app.post("/api/supplier-inquiry", async (req, res) => {
    try {
      const validatedData = insertSupplierInquirySchema.parse(req.body);
      const inquiry = await storage.createSupplierInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Buyer inquiry endpoint
  app.post("/api/buyer-inquiry", async (req, res) => {
    try {
      const validatedData = insertBuyerInquirySchema.parse(req.body);
      const inquiry = await storage.createBuyerInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/supplier-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getSupplierInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  app.get("/api/buyer-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getBuyerInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

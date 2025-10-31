import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertSupplierInquirySchema,
  insertBuyerInquirySchema,
} from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Supplier inquiry endpoint

  app.post("/api/supplier-inquiry", async (req, res) => {
    try {
      const validatedData = insertSupplierInquirySchema.parse(req.body);
      const inquiry = await storage.createSupplierInquiry(validatedData);

      // ✅ Configurar transporte de correo
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER, // tu correo
          pass: process.env.SMTP_PASS, // contraseña o App Password
        },
      });

      // ✅ Enviar el correo
      await transporter.sendMail({
        from: `"Formulario Proveedor" <${process.env.SMTP_USER}>`,
        to: "tucorreo@ejemplo.com", // <-- correo destinatario
        subject: "Nueva solicitud de proveedor",
        html: `
          <h3>Nueva solicitud de proveedor</h3>
          <p><b>Nombre:</b> ${validatedData.name}</p>
          <p><b>Email:</b> ${validatedData.email}</p>
          <p><b>Teléfono:</b> ${validatedData.phone}</p>
          <p><b>Empresa:</b> ${validatedData.company}</p>
          <p><b>Productos:</b> ${validatedData.products.join(", ")}</p>
          <p><b>Mensaje:</b> ${validatedData.message || "(sin mensaje)"}</p>
        `,
      });

      res.json({ success: true, inquiry });
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  app.post("/api/buyer-inquiry", async (req, res) => {
    try {
      // Validar los datos recibidos
      const validatedData = insertBuyerInquirySchema.parse(req.body);

      // Guardar la solicitud en memoria (como ya hacías)
      const inquiry = await storage.createBuyerInquiry(validatedData);

      // Crear transporte SMTP (usa tu propio servidor o Gmail)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER, // tu correo
          pass: process.env.SMTP_PASS, // contraseña o App Password
        },
      });

      // Enviar el correo
      await transporter.sendMail({
        from: `"Formulario Comprador" <${process.env.SMTP_USER}>`,
        to: "tucorreo@ejemplo.com", // <-- dirección donde recibirás los mensajes
        subject: "Nueva solicitud de comprador",
        html: `
          <h2>Nueva solicitud de comprador</h2>
          <p><b>Nombre:</b> ${validatedData.name}</p>
          <p><b>Email:</b> ${validatedData.email}</p>
          <p><b>Teléfono:</b> ${validatedData.phone}</p>
          <p><b>Empresa:</b> ${validatedData.company}</p>
          <p><b>Productos de interés:</b> ${validatedData.productsInterest.join(
            ", ",
          )}</p>
          <p><b>Destino:</b> ${validatedData.destination || "No especificado"}</p>
          <p><b>Volumen necesario:</b> ${
            validatedData.volumeNeeded || "No especificado"
          }</p>
          <p><b>Frecuencia:</b> ${
            validatedData.frequency || "No especificada"
          }</p>
          <p><b>Mensaje:</b><br/>${validatedData.message || "(sin mensaje)"}</p>
          <hr/>
          <p style="font-size: 12px; color: #888;">Enviado automáticamente desde el formulario web de contacto.</p>
        `,
      });
      res.json({ success: true, inquiry });
    } catch (error) {
      console.error("Error en /api/buyer-inquiry:", error);

      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
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
        message: "Internal server error",
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
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { messageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const result = messageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      // Store message in database
      const message = await storage.createMessage(result.data);
      
      // Send successful response
      return res.status(201).json({ 
        message: "Message sent successfully",
        data: {
          id: message.id,
          name: message.name,
          email: message.email,
          subject: message.subject,
          createdAt: message.createdAt
        }
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

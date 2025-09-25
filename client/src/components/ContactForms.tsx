import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSupplierInquirySchema, insertBuyerInquirySchema, type InsertSupplierInquiry, type InsertBuyerInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Sprout, ShoppingCart, Send } from "lucide-react";

export default function ContactForms() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const supplierMutation = useMutation({
    mutationFn: async (data: InsertSupplierInquiry) => {
      const response = await apiRequest("POST", "/api/supplier-inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Formulario enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/supplier-inquiries"] });
      supplierForm.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    },
  });

  const buyerMutation = useMutation({
    mutationFn: async (data: InsertBuyerInquiry) => {
      const response = await apiRequest("POST", "/api/buyer-inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Formulario enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/buyer-inquiries"] });
      buyerForm.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    },
  });

  const supplierForm = useForm<InsertSupplierInquiry>({
    resolver: zodResolver(insertSupplierInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      products: [],
      location: "",
      volume: "",
      message: "",
    },
  });

  const buyerForm = useForm<InsertBuyerInquiry>({
    resolver: zodResolver(insertBuyerInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      productsInterest: [],
      destination: "",
      volumeNeeded: "",
      frequency: "",
      message: "",
    },
  });

  const onSupplierSubmit = (data: InsertSupplierInquiry) => {
    supplierMutation.mutate(data);
  };

  const onBuyerSubmit = (data: InsertBuyerInquiry) => {
    buyerMutation.mutate(data);
  };

  return (
    <section id="contacto" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="contact-title">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            {t("contact.description")}
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Supplier Form */}
          <motion.div 
            id="form-proveedor"
            className="bg-card p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                <Sprout className="text-xl text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold" data-testid="supplier-form-title">
                {t("contact.supplier_form.title")}
              </h3>
            </div>
            
            <Form {...supplierForm}>
              <form onSubmit={supplierForm.handleSubmit(onSupplierSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={supplierForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="supplier-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={supplierForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="supplier-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={supplierForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.phone")}</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} data-testid="supplier-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={supplierForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.supplier_form.company")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="supplier-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={supplierForm.control}
                  name="products"
                  render={() => (
                    <FormItem>
                      <FormLabel>{t("contact.supplier_form.products")}</FormLabel>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={supplierForm.control}
                          name="products"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("strawberries")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "strawberries"])
                                      : field.onChange(field.value?.filter((value) => value !== "strawberries"));
                                  }}
                                  data-testid="supplier-strawberries"
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {t("products.strawberries.title")}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={supplierForm.control}
                          name="products"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("blueberries")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "blueberries"])
                                      : field.onChange(field.value?.filter((value) => value !== "blueberries"));
                                  }}
                                  data-testid="supplier-blueberries"
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {t("products.blueberries.title")}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={supplierForm.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.supplier_form.location")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="supplier-location" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={supplierForm.control}
                    name="volume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.supplier_form.volume")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="supplier-volume" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={supplierForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} value={field.value || ""} data-testid="supplier-message" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift"
                  disabled={supplierMutation.isPending}
                  data-testid="supplier-submit"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {supplierMutation.isPending ? "Enviando..." : t("contact.form.submit_supplier")}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Buyer Form */}
          <motion.div 
            id="form-comprador"
            className="bg-card p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-blueberry rounded-lg flex items-center justify-center mr-4">
                <ShoppingCart className="text-xl text-white" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold" data-testid="buyer-form-title">
                {t("contact.buyer_form.title")}
              </h3>
            </div>
            
            <Form {...buyerForm}>
              <form onSubmit={buyerForm.handleSubmit(onBuyerSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={buyerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="buyer-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={buyerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="buyer-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={buyerForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.phone")}</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} data-testid="buyer-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={buyerForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.buyer_form.company")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="buyer-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={buyerForm.control}
                  name="productsInterest"
                  render={() => (
                    <FormItem>
                      <FormLabel>{t("contact.buyer_form.products_interest")}</FormLabel>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={buyerForm.control}
                          name="productsInterest"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("strawberries")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "strawberries"])
                                      : field.onChange(field.value?.filter((value) => value !== "strawberries"));
                                  }}
                                  data-testid="buyer-strawberries"
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {t("products.strawberries.title")}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={buyerForm.control}
                          name="productsInterest"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("blueberries")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "blueberries"])
                                      : field.onChange(field.value?.filter((value) => value !== "blueberries"));
                                  }}
                                  data-testid="buyer-blueberries"
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {t("products.blueberries.title")}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={buyerForm.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.buyer_form.destination")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="buyer-destination" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={buyerForm.control}
                    name="volumeNeeded"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.buyer_form.volume_needed")}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="buyer-volume" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={buyerForm.control}
                  name="frequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.buyer_form.frequency")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="buyer-frequency">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="weekly">{t("contact.buyer_form.frequency_weekly")}</SelectItem>
                          <SelectItem value="monthly">{t("contact.buyer_form.frequency_monthly")}</SelectItem>
                          <SelectItem value="seasonal">{t("contact.buyer_form.frequency_seasonal")}</SelectItem>
                          <SelectItem value="occasional">{t("contact.buyer_form.frequency_occasional")}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={buyerForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} value={field.value || ""} data-testid="buyer-message" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-blueberry hover:bg-blueberry/90 text-white font-semibold hover-lift"
                  disabled={buyerMutation.isPending}
                  data-testid="buyer-submit"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {buyerMutation.isPending ? "Enviando..." : t("contact.form.submit_buyer")}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

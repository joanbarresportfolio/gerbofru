import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  insertSupplierInquirySchema,
  insertBuyerInquirySchema,
  type InsertSupplierInquiry,
  type InsertBuyerInquiry,
} from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Sprout, ShoppingCart, Send } from "lucide-react";

export default function ContactForms() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const productOptions = [
    { value: "orange", label: t("products.citrus.orange") },
    { value: "mandarin", label: t("products.citrus.mandarin") },
    { value: "lemon", label: t("products.citrus.lemon") },
    { value: "grapefruit", label: t("products.citrus.grapefruit") },
    { value: "watermelon", label: t("products.other_fruits.watermelon") },
    { value: "melon", label: t("products.other_fruits.melon") },
    { value: "pear", label: t("products.other_fruits.pear") },
    { value: "apple", label: t("products.other_fruits.apple") },
    { value: "persimmon", label: t("products.other_fruits.persimmon") },
    { value: "peach", label: t("products.stone_fruits.peach") },
    { value: "nectarine", label: t("products.stone_fruits.nectarine") },
    { value: "plum", label: t("products.stone_fruits.plum") },
    { value: "flat_peach", label: t("products.stone_fruits.flat_peach") },
    { value: "apricot", label: t("products.stone_fruits.apricot") },
    { value: "pomegranate", label: t("products.tropical_fruits.pomegranate") },
    { value: "avocado", label: t("products.tropical_fruits.avocado") },
    { value: "mango", label: t("products.tropical_fruits.mango") },
    { value: "pineapple", label: t("products.tropical_fruits.pineapple") },
    { value: "loquat", label: t("products.tropical_fruits.loquat") },
    { value: "peppers", label: t("products.vegetables.peppers") },
    { value: "eggplant", label: t("products.vegetables.eggplant") },
    { value: "cucumber", label: t("products.vegetables.cucumber") },
    { value: "zucchini", label: t("products.vegetables.zucchini") },
    { value: "celery", label: t("products.vegetables.celery") },
    { value: "iceberg", label: t("products.vegetables.iceberg") },
    { value: "romaine", label: t("products.vegetables.romaine") },
    { value: "little_gem", label: t("products.vegetables.little_gem") },
    { value: "broccoli", label: t("products.vegetables.broccoli") },
    { value: "cauliflower", label: t("products.vegetables.cauliflower") },
    { value: "onion", label: t("products.vegetables.onion") },
    { value: "carrot", label: t("products.vegetables.carrot") },
    { value: "garlic", label: t("products.vegetables.garlic") },
    { value: "strawberry", label: t("products.berries.strawberry") },
    { value: "blueberry", label: t("products.berries.blueberry") },
    { value: "raspberry", label: t("products.berries.raspberry") },
    { value: "blackberry", label: t("products.berries.blackberry") },
  ];

  const supplierMutation = useMutation({
    mutationFn: async (data: InsertSupplierInquiry) => {
      const response = await apiRequest("POST", "/api/supplier-inquiry", data);
      const contentType = response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        try {
          return await response.json();
        } catch {
          return { success: true };
        }
      }
      return { success: true };
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
        description:
          "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    },
  });

  const buyerMutation = useMutation({
    mutationFn: async (data: InsertBuyerInquiry) => {
      const response = await apiRequest("POST", "/api/buyer-inquiry", data);
      const contentType = response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        try {
          return await response.json();
        } catch {
          return { success: true };
        }
      }
      return { success: true };
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
        description:
          "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
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
          <h2
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            data-testid="contact-title"
          >
            {t("contact.title")}
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="contact-description"
          >
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
              <h3
                className="text-2xl font-display font-bold"
                data-testid="supplier-form-title"
              >
                {t("contact.supplier_form.title")}
              </h3>
            </div>

            <Form {...supplierForm}>
              <form
                onSubmit={supplierForm.handleSubmit(onSupplierSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={supplierForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="supplier-name">
                        {t("contact.form.name")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="supplier-name"
                          {...field}
                          data-testid="supplier-name"
                        />
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
                      <FormLabel htmlFor="supplier-company">
                        {t("contact.supplier_form.company")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="supplier-company"
                          {...field}
                          data-testid="supplier-company"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={supplierForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="supplier-email">
                          {t("contact.form.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="supplier-email"
                            type="email"
                            {...field}
                            data-testid="supplier-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={supplierForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="supplier-phone">
                          {t("contact.form.phone")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="supplier-phone"
                            type="tel"
                            {...field}
                            data-testid="supplier-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={supplierForm.control}
                  name="products"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t("contact.supplier_form.products")}
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          const current = field.value || [];
                          if (!current.includes(value)) {
                            field.onChange([...current, value]);
                          }
                        }}
                      >
                        <FormControl>
                          <SelectTrigger data-testid="supplier-products">
                            <SelectValue placeholder="Selecciona un producto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {productOptions.map((product) => (
                            <SelectItem
                              key={product.value}
                              value={product.value}
                            >
                              {product.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {field.value && field.value.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value.map((product: string) => {
                            const productLabel =
                              productOptions.find((p) => p.value === product)
                                ?.label || product;
                            return (
                              <span
                                key={product}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                                data-testid={`supplier-selected-${product}`}
                              >
                                {productLabel}
                                <button
                                  type="button"
                                  onClick={() => {
                                    field.onChange(
                                      field.value?.filter(
                                        (p: string) => p !== product,
                                      ),
                                    );
                                  }}
                                  className="hover:text-destructive"
                                  aria-label="Eliminar"
                                >
                                  ×
                                </button>
                              </span>
                            );
                          })}
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={supplierForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          {...field}
                          value={field.value || ""}
                          data-testid="supplier-message"
                        />
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
                  {supplierMutation.isPending
                    ? "Enviando..."
                    : t("contact.form.submit_supplier")}
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
              <h3
                className="text-2xl font-display font-bold"
                data-testid="buyer-form-title"
              >
                {t("contact.buyer_form.title")}
              </h3>
            </div>

            <Form {...buyerForm}>
              <form
                onSubmit={buyerForm.handleSubmit(onBuyerSubmit)}
                className="space-y-6"
              >
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

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={buyerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            data-testid="buyer-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={buyerForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.phone")}</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            {...field}
                            data-testid="buyer-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={buyerForm.control}
                  name="productsInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t("contact.buyer_form.products_interest")}
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          const current = field.value || [];
                          if (!current.includes(value)) {
                            field.onChange([...current, value]);
                          }
                        }}
                      >
                        <FormControl>
                          <SelectTrigger data-testid="buyer-products">
                            <SelectValue placeholder="Selecciona un producto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {productOptions.map((product) => (
                            <SelectItem
                              key={product.value}
                              value={product.value}
                            >
                              {product.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {field.value && field.value.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value.map((product: string) => {
                            const productLabel =
                              productOptions.find((p) => p.value === product)
                                ?.label || product;
                            return (
                              <span
                                key={product}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                                data-testid={`buyer-selected-${product}`}
                              >
                                {productLabel}
                                <button
                                  type="button"
                                  onClick={() => {
                                    field.onChange(
                                      field.value?.filter(
                                        (p: string) => p !== product,
                                      ),
                                    );
                                  }}
                                  className="hover:text-destructive"
                                  aria-label="Eliminar"
                                >
                                  ×
                                </button>
                              </span>
                            );
                          })}
                        </div>
                      )}
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
                        <Textarea
                          rows={4}
                          {...field}
                          value={field.value || ""}
                          data-testid="buyer-message"
                        />
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
                  {buyerMutation.isPending
                    ? "Enviando..."
                    : t("contact.form.submit_buyer")}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

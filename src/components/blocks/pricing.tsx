"use client";

import { useState } from "react";

import { Check, Send, QrCode, FileText, Clock, Users } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";

const C = COPY.cta;
const F = COPY.cta.form.fields;
const submitLabel = COPY.cta.form.submit;

export const Pricing = ({ className }: { className?: string }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="cta" className={cn("py-28 lg:py-32 scroll-mt-20", className)}>
        <div className="container max-w-5xl">
          <Card className="p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4"
            >
              <Check className="h-6 w-6 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">提交成功</h3>
            <p className="text-muted-foreground">
              {C.successMessage}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" />
              <span>响应时间：工作日 24 小时内</span>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className={cn("py-28 lg:py-32 scroll-mt-20", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {C.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            {C.desc}
          </p>

          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              {C.urgencyBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="size-3.5" />
              {C.spotsRemaining}
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Left: Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{F.name.label}</Label>
                    <Input
                      id="name"
                      placeholder={F.name.placeholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org">{F.org.label}</Label>
                    <Input
                      id="org"
                      placeholder={F.org.placeholder}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">{F.role.label}</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder={F.role.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {F.role.options.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">{F.contact.label}</Label>
                  <Input
                    id="contact"
                    placeholder={F.contact.placeholder}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-[340px] mt-2"
                >
                  <Send className="size-4 mr-2" />
                  {submitLabel}
                </Button>

                {/* Trust indicator */}
                <p className="text-xs text-muted-foreground/60 text-center mt-4">
                  已服务多家头部物流企业 · 数据安全有保障
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Right: QR Aside */}
          <Card className="flex flex-col items-center text-center p-6">
            <div
              className="relative flex h-[140px] w-[140px] items-center justify-center rounded-xl mb-4"
              style={{
                background: "hsl(var(--muted))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <QrCode className="h-12 w-12 text-muted-foreground opacity-30" />
              <span className="absolute bottom-2 text-[10px] tracking-widest text-muted-foreground opacity-50 uppercase">
                企微
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-muted-foreground opacity-60" />
              <span className="text-base font-semibold">{C.aside.label}</span>
            </div>

            {/* badge - primary color */}
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold border tracking-wide"
              style={{
                color: "hsl(var(--primary))",
                borderColor: "hsla(var(--primary), 0.25)",
                background: "hsla(var(--primary), 0.08)",
              }}
            >
              {C.aside.badge}
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { Check, Send } from "lucide-react";

export function FormField({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export function FloatingInput({ label, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        className="peer w-full rounded-xl border border-input bg-background px-4 pt-6 pb-2 text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
      <label className="pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </label>
    </div>
  );
}

interface TextProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
export function FloatingTextarea({ label, ...props }: TextProps) {
  return (
    <div className="relative">
      <textarea
        {...props}
        rows={5}
        placeholder=" "
        className="peer w-full rounded-xl border border-input bg-background px-4 pt-6 pb-2 text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
      />
      <label className="pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </label>
    </div>
  );
}

export function SubmitButton({ sent, children }: { sent: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={sent}
      className="group relative w-full overflow-hidden rounded-full bg-primary text-primary-foreground py-4 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-elegant disabled:opacity-90"
    >
      <span className={`flex items-center justify-center gap-2 transition-all ${sent ? "opacity-0" : "opacity-100"}`}>
        {children} <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
      {sent && (
        <span className="absolute inset-0 flex items-center justify-center gap-2">
          <Check className="h-5 w-5" /> Thank you -we'll be in touch
        </span>
      )}
    </button>
  );
}

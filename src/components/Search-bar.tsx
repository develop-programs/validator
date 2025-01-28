import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useId } from "react";

export default function Searchbar() {
  const id = useId();
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Certificate Verification
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Enter a certificate ID or recipient name to verify its authenticity
        </p>
      </div>

      <div className="relative w-full max-w-2xl mx-auto group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:opacity-80 opacity-60" />
        <div className="relative">
          <Input
            id={id}
            className="peer h-16 w-full text-lg bg-background/80 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 pl-14 pr-6
            hover:bg-background/90 focus-visible:ring-slate-300"
            placeholder="Search by certificate ID or recipient name..."
            type="search"
          />
          <Search
            size={24}
            strokeWidth={2}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/80 transition-colors duration-300 group-hover:text-primary"
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-muted-foreground/70">
        Press Enter to search
      </div>
    </div>
  );
}

/* LoadingSpinner
 * Small visual spinner used during loading states. Accepts an optional
 * `className` to customize size/color when necessary.
 */
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const LoadingSpinner = ({ className }) => {
  return (
    <div className="flex justify-center items-center w-full py-12">
      <Loader2
        className={cn("h-10 w-10 animate-spin text-orange-500", className)}
      />
    </div>
  );
};

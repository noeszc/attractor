import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@attractor/utils";

const TabsRoot = TabsPrimitive.Root;

export type { TabsProps as TabsRootProps } from "@radix-ui/react-tabs";

type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex flex-row relative isolate min-h-10 border-b border-slate-200",
        className,
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
>;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "outline-none min-w-10 h-10 flex items-center font-medium relative cursor-pointer gap-2 px-4 py-2 text-sm font-medium text-muted-foreground focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-colorPalette.focusRing disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:bottom-0 data-[state=active]:before:start-0 data-[state=active]:before:end-0 data-[state=active]:before:h-0.5 data-[state=active]:before:bg-primary",
        className,
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("", className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsRoot, TabsList, TabsTrigger, TabsContent };
export type { TabsListProps, TabsTriggerProps, TabsContentProps };

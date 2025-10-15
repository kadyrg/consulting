import { cn } from "@/shared/lib/css";

function Heading1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl lg:text-5xl max-w-xl mx-auto font-extrabold tracking-tight text-balance",
        className,
      )}
      {...props}
    />
  );
}

function Heading2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-center border-b pb-2 text-3xl lg:text-4xl font-bold tracking-tight first:mt-6",
        className,
      )}
      {...props}
    />
  );
}

function Heading3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl sm:text-3xl lg:text-4xl max-w-xl font-semibold tracking-tight mt-4",
        className,
      )}
      {...props}
    />
  );
}

function Heading4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl sm:text-2xl lg:text-3xl lg:mt-2 font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function Paragraph({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm sm:text-base lg:text-lg max-w-2xl text-accent-foreground leading-6 sm:leading-7 [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    />
  );
}

export { Heading1, Heading2, Heading3, Heading4, Paragraph };

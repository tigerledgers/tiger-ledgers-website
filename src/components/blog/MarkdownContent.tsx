import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  children: string;
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <div className="prose-tigerledgers">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1
              className="mt-10 font-display text-3xl font-semibold text-navy sm:text-4xl"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="mt-10 font-display text-2xl font-semibold text-navy sm:text-3xl"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="mt-8 font-display text-xl font-semibold text-navy sm:text-2xl"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p className="mt-5 text-base leading-relaxed text-foreground/85" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="mt-5 list-disc space-y-2 pl-6 text-foreground/85" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mt-5 list-decimal space-y-2 pl-6 text-foreground/85" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="mt-6 border-l-4 border-gold bg-secondary/40 px-5 py-3 italic text-navy"
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a className="text-gold underline-offset-4 hover:underline" {...props} />
          ),
          code: ({ ...props }) => (
            <code
              className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-navy"
              {...props}
            />
          ),
          hr: () => <hr className="my-10 border-border" />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

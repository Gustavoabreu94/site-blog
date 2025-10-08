import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkownProps = {
  content: string;
};
export const MarkDown = ({ content }: MarkownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        p: ({ children }) => (
          <p className="mb-6 text-gray-200 leading-relaxed text-body-xs md:text-body-sm">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-100">{children}</strong>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-blue-200 hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

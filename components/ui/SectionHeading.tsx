interface SectionHeadingProps {
  count: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ count, title }) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="text-primary font-mono">{count}.</span> {title}
      </h2>
      <div className="flex-1 h-px bg-border max-w-xs" />
    </div>
  );
};

export default SectionHeading;

import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic';

export interface InfoCardProps {
  title: string;
  description: string;
  iconName: keyof typeof dynamicIconImports;
}

const InfoCard = ({ title, description, iconName }: InfoCardProps) => {
  return (
    <div className="glass glass-hover rounded-xl p-6 group flex mb-4 lg:mb-3">
      <div className="flex items-start gap-4">
        <div className="p-3 mr-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <DynamicIcon name={iconName} size={24} />
        </div>
        <div className="">
          <h2 className="font-semibold mb-1">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

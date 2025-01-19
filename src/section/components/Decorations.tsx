interface DecorationsProps {
  className?: string;
}

export const Decorations: React.FC<DecorationsProps> = ({ className }) => {
  return (
    <div className={`absolute -top-48 h-full w-full pointer-events-none right-[-45%] ${className}`}>
      <img 
        src="/assets/decoration-red.png" 
        alt="" 
        className="absolute right-32 h-full w-auto object-contain rotate-90 scale-y-[30%] scale-x-[70%] rounded-full"
      />
      <img 
        src="/assets/decotation-green.png" 
        alt="" 
        className="absolute right-0 h-full w-auto object-contain rotate-90 scale-y-[30%] scale-x-[55%] translate-y-[30%] rounded-full"
      />
    </div>
  );
}; 
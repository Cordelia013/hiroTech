

interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="fixed right-8 top-[30%] -translate-y-[50%] z-50  border-2 border-white">
      <div className="bg-[#AACC26] rounded-[20px] py-16 px-4 flex flex-col gap-8">
        <button 
          className="hover:opacity-70 transition-opacity"
          aria-label="FAQ"
        >
          <img src="./assets/message-circle-question.svg" alt="" width={30} height={30} />
        </button>

        <button 
          className="hover:opacity-70 transition-opacity"
          aria-label="Instagram"
        >
          <img src="./assets/instagram.svg" alt="" width={30} height={30} />
        </button>

        <button 
          className="hover:opacity-70 transition-opacity"
          aria-label="Shop"
        >
          <img src="./assets/shopping-basket.svg" alt="" width={30} height={30} />
        </button>

        <button 
          className="hover:opacity-70 transition-opacity"
          aria-label="Contact"
        >
          <img src="./assets/mails.svg" alt="" width={30} height={30} />
        </button>
      </div>
    </nav>
  );
}; 
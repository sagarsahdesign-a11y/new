import { useState } from 'react';

const links = ['Home', 'Projects', 'Experience', 'Life', 'About'] as const;
const sectionIds: Record<string, string> = {
    Home: 'hero',
    Projects: 'projects',
    Experience: 'experience',
    Life: 'life',
    About: 'about',
};

export default function Nav() {
    const [open, setOpen] = useState(false);

    const scrollTo = (name: string) => {
        const el = document.getElementById(sectionIds[name] ?? '');
        el?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <nav
            className="fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-6"
            style={{
                height: 56,
                background: 'rgba(247,247,247,0.9)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
            }}
        >
            {/* Logo */}
            <button onClick={() => scrollTo('Home')} className="flex flex-col leading-[1.15] cursor-pointer bg-transparent border-none p-0">
                <span className="text-[13px] font-semibold tracking-[-0.03em] text-primary">sagar</span>
                <span className="text-[13px] font-semibold tracking-[-0.03em] text-primary">/ shah</span>
            </button>

            {/* Center Links — desktop */}
            <ul className="hidden min-[481px]:flex items-center gap-6 list-none m-0 p-0">
                {links.map((l) => (
                    <li key={l}>
                        <button
                            onClick={() => scrollTo(l)}
                            className="text-[14px] text-gray-muted hover:text-primary transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                        >
                            {l}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Right side buttons — desktop */}
            <div className="hidden min-[481px]:flex items-center gap-3">
                {/* Figma icon */}
                <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                </svg>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center h-[34px] px-4 rounded-full text-[13px] font-medium text-primary bg-white border border-[rgb(208,208,208)] hover:bg-gray-100 transition-colors duration-200 no-underline"
                    style={{ borderWidth: '1.4px' }}
                >
                    Resume
                </a>
                <a
                    href="mailto:sagar.sah.design@gmail.com"
                    className="inline-flex items-center h-[34px] px-4 rounded-full text-[13px] font-medium text-white bg-orange hover:opacity-90 transition-opacity duration-200 no-underline"
                >
                    Let's Talk!
                </a>
            </div>

            {/* Hamburger — mobile */}
            <button
                onClick={() => setOpen(!open)}
                className="flex min-[481px]:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
                aria-label="Menu"
            >
                <span className={`block w-5 h-[2px] bg-primary transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-5 h-[2px] bg-primary transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-[2px] bg-primary transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute top-[56px] left-0 w-full bg-bg/95 backdrop-blur-lg flex flex-col items-center gap-4 py-6 min-[481px]:hidden border-b border-border">
                    {links.map((l) => (
                        <button
                            key={l}
                            onClick={() => scrollTo(l)}
                            className="text-[15px] text-primary bg-transparent border-none cursor-pointer"
                        >
                            {l}
                        </button>
                    ))}
                    <div className="flex gap-3 mt-2">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center h-[34px] px-4 rounded-full text-[13px] font-medium text-primary bg-white border border-[rgb(208,208,208)] no-underline"
                            style={{ borderWidth: '1.4px' }}
                        >
                            Resume
                        </a>
                        <a
                            href="mailto:sagar.sah.design@gmail.com"
                            className="inline-flex items-center h-[34px] px-4 rounded-full text-[13px] font-medium text-white bg-orange no-underline"
                        >
                            Let's Talk!
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

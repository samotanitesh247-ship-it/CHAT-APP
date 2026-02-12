import { useThemeStore } from "../store/useThemeStore";

const themes = [
  "light","dark","cupcake","bumblebee","emerald","corporate","synthwave",
  "retro","cyberpunk","valentine","halloween","garden","forest","aqua",
  "lofi","pastel","fantasy","wireframe","black","luxury","dracula",
  "cmyk","autumn","business","acid","lemonade","night","coffee","winter"
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen pt-20 px-6 bg-base-100 text-base-content">

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Theme Settings</h1>
        <p className="opacity-60 mb-8">Choose your favorite theme</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`p-4 rounded-xl border transition-all bg-base-200 hover:scale-105
              ${theme === t ? "border-primary ring-2 ring-primary" : "border-base-300"}`}
            >
              {/* theme name */}
              <div className="font-semibold capitalize mb-3">{t}</div>

              {/* preview colors */}
              <div className="flex gap-2 justify-center">
                <div className="w-5 h-5 rounded bg-primary"></div>
                <div className="w-5 h-5 rounded bg-secondary"></div>
                <div className="w-5 h-5 rounded bg-accent"></div>
                <div className="w-5 h-5 rounded bg-base-300"></div>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SettingsPage;

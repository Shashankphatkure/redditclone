export default function GetAppPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Get the RedditClone App</h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark">
          The best way to enjoy RedditClone on your phone
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="text-6xl mb-4">📱</div>
          <h2 className="text-xl font-bold mb-2">Mobile App</h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
            Available for iOS and Android
          </p>
          <div className="space-y-2">
            <button className="w-full button-primary py-3">
              Download for iOS
            </button>
            <button className="w-full button-primary py-3">
              Download for Android
            </button>
          </div>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="text-6xl mb-4">💻</div>
          <h2 className="text-xl font-bold mb-2">Desktop App</h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
            Enhanced desktop experience
          </p>
          <button className="w-full button-primary py-3">
            Download for Desktop
          </button>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-gray-200">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="mb-4 text-gray-400">
        We’d love to hear from you! Whether you have questions, feedback, or want to report an issue, feel free to reach out using any of the channels below.
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Email</h2>
          <p>
            Send us a message at <a href="mailto:support@imagination.com" className="text-blue-400 hover:underline">support@imagination.com</a> and we’ll get back to you within 24 hours.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">Community</h2>
          <p>
            Join our community on <a href="https://discord.gg/example" target="_blank" rel="noopener" className="text-blue-400 hover:underline">Discord</a> to share your creations and get help.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">Social</h2>
          <p>
            Follow us on <a href="https://twitter.com/imaginationai" target="_blank" rel="noopener" className="text-blue-400 hover:underline">Twitter</a> for updates and tips.
          </p>
        </div>
      </div>
    </div>
  );
}

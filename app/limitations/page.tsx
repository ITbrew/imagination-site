export const metadata = {
  title: 'Limitations'
};

export default function LimitationsPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-gray-200">
      <h1 className="text-4xl font-bold mb-6">Limitations</h1>
      <p className="mb-4 text-gray-400">
        We strive to deliver the best AI powered image generation experience, but it’s important to understand the current limitations of our technology.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Generation may take between 3–10 seconds per image depending on server load.</li>
        <li>Prompts that include explicit violence, sexual content, personal data or copyrighted content will be rejected.</li>
        <li>We do not support generating deepfakes or impersonating real individuals.</li>
        <li>Generated images may contain minor artifacts, distortions or unexpected results.</li>
        <li>Our service is currently limited to JPG output at a fixed resolution.</li>
      </ul>
      <p className="mt-6 text-gray-400">
        We are continuously working to improve our models and remove these limitations.
      </p>
    </div>
  );
}

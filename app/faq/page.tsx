export const metadata = {
  title: 'FAQ | Imagination',
  description: 'Frequently asked questions about Imagination'
};

const faqs = [
  {
    question: 'What is Imagination?',
    answer: 'Imagination is an AI\u2011powered tool that helps you craft personalised storybooks with beautiful illustrations. You pick a style, describe your character, and guide the adventure.'
  },
  {
    question: 'Do I need to know how to draw or write?',
    answer: 'Not at all! Just choose a style, describe what the story should be about, and our AI does the rest. You can add your own ideas after each scene to guide the tale.'
  },
  {
    question: 'Are the stories unique?',
    answer: 'Every story is generated on the fly based on your prompts. Even if you choose the same settings twice, the AI will craft a different adventure each time.'
  },
  {
    question: 'Can I download and share my stories?',
    answer: 'Yes. Once your storybook is complete, you can download it as a PDF or a set of images and share it with friends and family.'
  },
  {
    question: 'Is there any content that Imagination won\u2019t generate?',
    answer: 'Imagination refuses requests that are offensive, violent, or otherwise inappropriate for kids. Please keep prompts friendly and family\u2011safe.'
  },
];

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <summary className="cursor-pointer text-lg font-medium">{faq.question}</summary>
            <p className="mt-2 text-gray-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </main>
  );
}

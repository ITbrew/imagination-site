export const metadata = {
  title: 'Pricing | Imagination',
  description: 'Choose the plan that suits your storytelling needs.'
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Get started for free',
    features: [
      '5 story credits per month',
      'Access to basic art styles',
      'Download PDF or images',
    ],
  },
  {
    name: 'Creator',
    price: '$9',
    tagline: 'For budding storytellers',
    features: [
      '100 story credits per month',
      'Unlock additional art styles',
      'Export and share stories',
      'Priority support',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    tagline: 'Unlimited creativity',
    features: [
      'Unlimited story credits',
      'Early access to new styles & features',
      'Collaborative storyboards',
      'Premium support',
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12">Pricing</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-extrabold mb-2">
              {plan.price}
              <span className="text-xl font-normal">/mo</span>
            </p>
            <p className="text-gray-400 mb-6">{plan.tagline}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">\u2713</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

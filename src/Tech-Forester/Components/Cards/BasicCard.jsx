// src/components/BasicCard.jsx

export default function BasicCard() {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Basic Card</h3>
          <p className="text-gray-600">
            A simple, elegant card component with hover effect and subtle animation.
          </p>
        </div>
        <div className="bg-amber-50 px-6 py-4">
          <code className="text-amber-700 text-sm">&lt;Card&gt;...&lt;/Card&gt;</code>
        </div>
      </div>
    );
  }
  
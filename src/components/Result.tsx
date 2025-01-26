import { CheckCircle, XCircle } from "lucide-react";

async function verifyCertificate(id: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // For demo purposes, let's consider certificates with even IDs as valid
  return id.length > 0 && Number.parseInt(id) % 2 === 0;
}

export default async function VerificationResult({ id }: { id: string }) {
  const isValid = await verifyCertificate(id);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Verification Result
      </h2>
      <div className="flex items-center justify-center mb-4">
        {isValid ? (
          <CheckCircle className="text-green-500 w-16 h-16" />
        ) : (
          <XCircle className="text-red-500 w-16 h-16" />
        )}
      </div>
      <p className="text-center text-lg font-medium">Certificate ID: {id}</p>
      <p className="text-center text-xl mt-2">
        {isValid ? (
          <span className="text-green-600">Valid Certificate</span>
        ) : (
          <span className="text-red-600">Invalid Certificate</span>
        )}
      </p>
      <div className="mt-6 text-center">
        <a
          href="/verify"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Verify Another Certificate
        </a>
      </div>
    </div>
  );
}

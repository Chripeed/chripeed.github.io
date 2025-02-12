import React, { useState } from "react";
import tekst from "../assets/tekst.json";

const ContactForm: React.FC = () => {
  // State for showing a message after submission.
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Check if the form is valid
    if (!form.checkValidity()) {
      // Optionally, you can trigger HTML5 validation UI
      form.reportValidity();
      return;
    }

    // Create form data object
    const formData = new FormData(form);
    // Convert form data to JSON format
    const data = Object.fromEntries(formData.entries());
    const json = JSON.stringify(data);

    setIsLoading(true);
    setResultMessage(null);
    setIsError(false);

    try {
      // Post the form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (response.ok) {
        // If successful, show a green success message.
        setResultMessage("Email edukalt saadetud!");
        setIsError(false);
      } else {
        // If the API returns an error, show a red error message.
        console.error(result);
        setResultMessage("Miskit läks valesti!");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Miskit läks valesti!");
      setIsError(true);
    } finally {
      // End the loading state regardless of the result.
      setIsLoading(false);
    }

    // Reset the form
    form.reset();

    // Optionally hide the message after 5 seconds
    setTimeout(() => {
      setResultMessage(null);
    }, 5000);
  };

  return (
    <div className="bg-medium-white p-8 shadow rounded-lg">
      <h2 className="text-2xl font-bold text-center py-4">
        {tekst.Kontakt_vormi_pealkiri}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Hidden fields required by Web3Forms */}
        <input
          type="hidden"
          name="access_key"
          value="5826976a-a197-4c39-85ee-8c5c579b6793"
        />

        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-onyx-black"
          >
            {tekst.Nimi_tekst}
            <span>
              <strong className="text-error">*</strong>
            </span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-onyx-black rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-onyx-black"
          >
            {tekst.Telefon_tekst}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-onyx-black rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-onyx-black"
          >
            {tekst.Emaili_tekst}
            <span>
              <strong className="text-error">*</strong>
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-onyx-black rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-onyx-black"
          >
            {tekst.Teema_tekst}
            <span>
              <strong className="text-error">*</strong>
            </span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="mt-1 block w-full px-3 py-2 border border-onyx-black rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-onyx-black"
          >
            {tekst.Teade_tekst}
            <span>
              <strong className="text-error">*</strong>
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-onyx-black rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>

        {/* Show result message if available */}
        {resultMessage && (
          <div
            className={`m-4 p-2 text-center font-bold ${
              isError ? "text-error" : "text-success"
            }`}
          >
            {resultMessage}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center w-full px-4 py-2 text-pure-white bg-charcoal-gray rounded-md hover:bg-onyx-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {/* If loading, display a spinner SVG instead of the usual text */}
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              tekst.Saada_tekst
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

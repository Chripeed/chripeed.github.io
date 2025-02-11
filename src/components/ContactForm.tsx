import React, { useState } from "react";

const ContactForm: React.FC = () => {
  // State for showing a message after submission.
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

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

    // Optionally display a "Sending..." message
    setResultMessage("Sending...");
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
        setResultMessage(result.message);
        setIsError(false);
      } else {
        console.error(result);
        setResultMessage(result.message);
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Something went wrong!");
      setIsError(true);
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
        Võta meiega ühendust
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Hidden fields required by Web3Forms */}
        <input
          type="hidden"
          name="access_key"
          value="1d842936-4485-4139-aab4-31f92ed39222"
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
            Nimi
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
            Telefon
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
            E-posti aadress
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
            Teema
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
            Teade
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-onyx-black rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>

        {/* Show result message */}
        {resultMessage && (
          <div
            className={`m-4 p-2 text-center font-bold ${
              isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {resultMessage}
          </div>
        )}

        <div>
          <button
            type="submit"
            className="inline-flex justify-center w-full px-4 py-2 text-pure-white bg-charcoal-gray rounded-md hover:bg-onyx-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Saada
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

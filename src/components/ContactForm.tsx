import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setIsSuccess(false); // Hide success message before new submission

  //   // Convert form to FormData
  //   const form = event.currentTarget;
  //   const formData = new FormData(form);

  //   try {
  //     const response = await fetch("/api/actions/send-email", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error("Server responded with an error");
  //     }

  //     // If successful, show success message & reset the form
  //     setIsSuccess(true);
  //     form.reset();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("Vabandust, midagi läks valesti. Proovi hiljem uuesti.");
  //   }
  // }

  return (
    <div className="bg-medium-white p-8 shadow rounded-lg">
      <h2 className="text-2xl font-bold text-center py-4">
        Võta meiega ühendust
      </h2>

      <form className="space-y-4">
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

        <div>
          {isSuccess && (
            <div className="m-4 p-2 text-success font-bold text-center">
              E-post saadetud edukalt!
            </div>
          )}
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

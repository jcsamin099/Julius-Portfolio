import { useEffect, useState } from "react";

const EmailModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && status !== "sending") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, status]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setStatus("sending");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError(
        "The contact form is not configured yet. Please try again later."
      );
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Portfolio Message - Julius Ceasar Samin",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,

          // Spam protection
          botcheck: "",

          // Redirect is intentionally not used because
          // we handle success inside the modal.
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setError(
          result.message ||
            "Something went wrong while sending your message."
        );

        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        "Unable to send your message right now. Please try again later."
      );

      setStatus("error");
    }
  };

  const handleBackdropClick = () => {
    if (status !== "sending") {
      onClose();
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-[200]
        flex items-center justify-center
        bg-black/70
        p-4
        backdrop-blur-sm
      "
      onClick={handleBackdropClick}
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full max-w-lg
          overflow-y-auto
          rounded-2xl
          border border-zinc-200
          bg-white
          shadow-2xl
          dark:border-zinc-800
          dark:bg-zinc-900
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        {status !== "sending" && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
            className="
              absolute right-4 top-4 z-10
              flex h-9 w-9
              items-center justify-center
              rounded-full
              text-xl
              text-zinc-500
              transition-colors
              hover:bg-zinc-100
              hover:text-zinc-900
              dark:hover:bg-zinc-800
              dark:hover:text-white
            "
          >
            ×
          </button>
        )}

        {/* Success State */}
        {status === "success" ? (
          <div className="px-6 py-12 text-center sm:px-8">
            <div
              className="
                mx-auto flex h-16 w-16
                items-center justify-center
                rounded-full
                bg-emerald-50
                text-2xl
                text-emerald-600
                dark:bg-emerald-950
                dark:text-emerald-400
              "
            >
              ✓
            </div>

            <h2
              className="
                mt-6
                text-2xl font-bold
                text-zinc-900
                dark:text-white
              "
            >
              Message sent!
            </h2>

            <p
              className="
                mx-auto mt-3
                max-w-sm
                text-sm leading-6
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Thank you for reaching out. Your message has been sent
              successfully.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="
                mt-8
                rounded-xl
                bg-cyan-500
                px-6 py-3
                text-sm font-semibold
                text-white
                transition
                hover:bg-cyan-600
              "
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-6 pb-2 pt-8 sm:px-8">
              <p
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.2em]
                  text-cyan-500
                "
              >
                Get in touch
              </p>

              <h2
                className="
                  mt-2
                  text-2xl font-bold
                  text-zinc-900
                  dark:text-white
                "
              >
                Send me a message
              </h2>

              <p
                className="
                  mt-3
                  text-sm leading-6
                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                Have an opportunity, project idea, or question? Send me a
                message directly through this form.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 px-6 pb-8 pt-6 sm:px-8"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="
                    block text-sm font-medium
                    text-zinc-900
                    dark:text-zinc-200
                  "
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  disabled={status === "sending"}
                  className="
                    mt-2 w-full
                    rounded-xl
                    border border-zinc-300
                    bg-white
                    px-4 py-3
                    text-sm text-zinc-900
                    outline-none
                    transition
                    placeholder:text-zinc-400
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-500/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-zinc-700
                    dark:bg-zinc-950
                    dark:text-white
                    dark:placeholder:text-zinc-600
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="
                    block text-sm font-medium
                    text-zinc-900
                    dark:text-zinc-200
                  "
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  disabled={status === "sending"}
                  className="
                    mt-2 w-full
                    rounded-xl
                    border border-zinc-300
                    bg-white
                    px-4 py-3
                    text-sm text-zinc-900
                    outline-none
                    transition
                    placeholder:text-zinc-400
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-500/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-zinc-700
                    dark:bg-zinc-950
                    dark:text-white
                    dark:placeholder:text-zinc-600
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    block text-sm font-medium
                    text-zinc-900
                    dark:text-zinc-200
                  "
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  disabled={status === "sending"}
                  className="
                    mt-2 w-full
                    resize-none
                    rounded-xl
                    border border-zinc-300
                    bg-white
                    px-4 py-3
                    text-sm text-zinc-900
                    outline-none
                    transition
                    placeholder:text-zinc-400
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-500/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-zinc-700
                    dark:bg-zinc-950
                    dark:text-white
                    dark:placeholder:text-zinc-600
                  "
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div
                  className="
                    rounded-xl
                    border border-red-200
                    bg-red-50
                    px-4 py-3
                    text-sm
                    text-red-600
                    dark:border-red-900
                    dark:bg-red-950/40
                    dark:text-red-400
                  "
                >
                  {error}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={status === "sending"}
                  className="
                    rounded-xl
                    border border-zinc-300
                    px-5 py-3
                    text-sm font-semibold
                    text-zinc-700
                    transition
                    hover:bg-zinc-100
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    dark:border-zinc-700
                    dark:text-zinc-300
                    dark:hover:bg-zinc-800
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-cyan-500
                    px-5 py-3
                    text-sm font-semibold
                    text-white
                    transition-all
                    hover:bg-cyan-600
                    hover:shadow-lg
                    hover:shadow-cyan-500/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {status === "sending" ? (
                    <>
                      <span
                        className="
                          h-4 w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailModal;

import React, { useState, useEffect, useRef } from 'react';

interface ContactFormModalProps {
  /** Whether the modal is currently open. */
  isOpen: boolean;
  /** Function to call when the modal should be closed. */
  onClose: () => void;
}

/**
 * A modal dialog component containing a contact form for lead generation.
 * It has been refactored to be more robust by using the dialog's native API
 * for closing, and syncing with React state.
 *
 * @param {ContactFormModalProps} props - The props for the component.
 */
const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Effect to synchronize the `isOpen` prop with the dialog's visible state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    } else {
      if (dialog.open) {
        dialog.close(); // This will trigger the onClose event handler below
      }
    }
  }, [isOpen]);

  // This handler is fired by the dialog's native `close` event.
  // This happens when ESC is pressed or `dialog.close()` is called.
  const handleNativeClose = () => {
    document.body.style.overflow = ''; // Restore background scrolling
    onClose(); // Inform the parent component that the dialog has closed.
    
    // Reset form status after a short delay to allow the close animation to finish.
    // We check if the dialog is still closed, in case it was reopened quickly.
    setTimeout(() => {
      if (!dialogRef.current?.open) {
        setStatus('idle');
      }
    }, 300);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // IMPORTANT: The `action` URL in the <form> tag below must be replaced
      // with your actual Formspree endpoint.
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleNativeClose}
      onClick={(e) => {
        // Close if the backdrop (the dialog element itself) is clicked
        if (e.target === dialogRef.current) {
          dialogRef.current?.close();
        }
      }}
      className="p-0 m-0 w-full h-full max-w-none max-h-none bg-transparent backdrop:bg-background/80 backdrop:backdrop-blur-sm"
    >
        <div className="bg-primary border border-text-secondary/20 rounded-2xl w-full max-w-2xl shadow-2xl shadow-accent/10 relative m-auto">
            {/* Close Button */}
            <button
              onClick={() => dialogRef.current?.close()}
              className="absolute top-4 right-4 text-text-secondary hover:text-accent transition-colors rounded-full p-2 z-10"
              aria-label="Close form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-12">
              {status === 'success' ? (
                <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  <h2 className="font-heading text-3xl font-bold text-text-heading mb-4">Thank You!</h2>
                  <p className="text-text-secondary text-lg mb-8">Your assessment request has been sent. We'll be in touch within one business day.</p>
                  <button
                    onClick={() => dialogRef.current?.close()}
                    className="bg-accent hover:bg-opacity-80 text-background font-bold py-3 px-8 rounded-md text-base transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-3xl font-bold text-text-heading mb-2">Request a Free Assessment</h2>
                  <p className="text-text-secondary mb-8">Tell us a bit about your needs, and we'll schedule a no-obligation consultation.</p>

                  <form 
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/YOUR_UNIQUE_ID" // <-- IMPORTANT: REPLACE WITH YOUR FORMPSREE URL
                    method="POST" 
                    className="space-y-6"
                   >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
                        <input type="text" name="name" id="name" required className="w-full bg-background border border-text-secondary/20 rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-accent focus:outline-none transition" />
                      </div>
                       <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">Company Name</label>
                        <input type="text" name="company" id="company" className="w-full bg-background border border-text-secondary/20 rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-accent focus:outline-none transition" />
                      </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Work Email</label>
                        <input type="email" name="email" id="email" required className="w-full bg-background border border-text-secondary/20 rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-accent focus:outline-none transition" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">What are you looking to solve?</label>
                        <textarea name="message" id="message" rows={4} required className="w-full bg-background border border-text-secondary/20 rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-accent focus:outline-none transition" placeholder="e.g., migrate servers to the cloud, automate our invoicing, improve remote work security..."></textarea>
                    </div>

                    {status === 'error' && (
                        <p className="text-red-400 text-sm">Oops! Something went wrong. Please try again.</p>
                    )}

                    <div>
                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className="w-full bg-accent hover:bg-opacity-80 text-background font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 disabled:bg-accent/50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {status === 'submitting' ? 'Submitting...' : 'Send Request'}
                        </button>
                    </div>
                  </form>
                </>
              )}
            </div>
        </div>
    </dialog>
  );
};

export default ContactFormModal;
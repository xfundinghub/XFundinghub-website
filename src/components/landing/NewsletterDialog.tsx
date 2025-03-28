import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";

export default function NewsletterDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle authentication on component mount
  useEffect(() => {
    const authenticateUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        try {
          const { data, error } = await supabase.auth.signUp({
            email: "jonathan10dass@gmail.com",
            password: "0805@Johnny", // Change this for real users
          });

          if (error) {
            console.error("Signup error:", error);
            setSubmitError("Authentication failed. Please try again later.");
          } else {
            console.log("User successfully authenticated");
            setIsAuthenticated(true);
          }
        } catch (authError) {
          console.error("Authentication error:", authError);
          setSubmitError("Authentication failed. Please try again later.");
        }
      } else {
        console.log("User already authenticated");
        setIsAuthenticated(true);
      }
    };

    authenticateUser();
  }, []);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Function to submit the form data
  const submitFormData = async (
    name: string,
    email: string,
  ): Promise<boolean> => {
    if (!isAuthenticated) {
      console.error("Cannot submit data: User not authenticated");
      return false;
    }

    try {
      // Log the submission attempt
      console.log("Submitting newsletter subscription to Supabase:", {
        name,
        email,
      });

      // Insert the data into the 'subscribers' table in Supabase
      const { data, error } = await supabase
        .from("subscribers")
        .insert([{ name, email }])
        .select();

      // Check if there was an error with the Supabase operation
      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message);
      }

      console.log("Successfully added subscriber to database:", data);
      return true;
    } catch (error) {
      console.error("Error submitting newsletter form:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setSubmitError("");

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Check authentication before submission
    if (!isAuthenticated) {
      setSubmitError("System is preparing. Please try again in a moment.");
      return;
    }

    // Submit form
    setIsSubmitting(true);

    try {
      const success = await submitFormData(name, email);
      if (success) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Failed to submit. Please try again later.");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setEmailError("");
    setSubmitError("");
    setIsSubmitted(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="text-[#1a365d] hover:bg-[#ffed4a] hover:text-[#1a365d] text-lg px-8 bg-[#c4a708]"
        >
          Subscribe to our newsletter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#1a365d]">
                Subscribe to our newsletter
              </DialogTitle>
              <DialogDescription className="text-gray-600 mt-2">
                Stay updated with the latest news, product updates, and insights
                about cross-border lending opportunities.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                  {submitError}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#1a365d] font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="border-gray-300 focus:border-[#0c2d5b] focus:ring-[#0c2d5b]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1a365d] font-medium">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="Enter your email address"
                  className={`border-gray-300 focus:border-[#0c2d5b] focus:ring-[#0c2d5b] ${emailError ? "border-red-500" : ""}`}
                  required
                  disabled={isSubmitting}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="text-xs text-gray-500">
                By subscribing, you agree to receive marketing communications
                from XFundingHub. You can unsubscribe at any time.
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0c2d5b] hover:bg-[#1a365d] text-white"
                disabled={isSubmitting || !isAuthenticated}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="text-5xl mb-4">🎉</div>
            <DialogTitle className="text-2xl font-bold text-[#1a365d]">
              Thank you for subscribing!
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              You've been added to our newsletter. We'll keep you updated with
              the latest news and opportunities.
            </DialogDescription>
            <Button
              onClick={resetForm}
              className="mt-6 bg-[#0c2d5b] hover:bg-[#1a365d] text-white"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

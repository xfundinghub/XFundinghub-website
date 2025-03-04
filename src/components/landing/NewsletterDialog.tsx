import { useState } from "react";
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

export default function NewsletterDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ name, email });
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="border-gray-300 focus:border-[#0c2d5b] focus:ring-[#0c2d5b]"
                  required
                />
              </div>
              <div className="text-xs text-gray-500">
                By subscribing, you agree to receive marketing communications
                from XFundingHub. You can unsubscribe at any time.
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0c2d5b] hover:bg-[#1a365d] text-white"
              >
                Subscribe
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

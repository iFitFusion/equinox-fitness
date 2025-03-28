import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import Layout from "@/components/layout";

export default function Memberships() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div className="relative h-[50vh] w-full bg-neutral-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://ext.same-assets.com/3114580362/1986547758.jpeg"
              alt="Membership benefits"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              MEMBERSHIP WITH BENEFITS
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              FitnessHub is available however, whenever, and wherever you want it with seamlessly integrated physical and digital offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Membership Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect membership that fits your fitness goals and lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan) => (
            <Card key={plan.id} className={`h-full flex flex-col relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-base font-normal text-muted-foreground">/month</span></div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {plan.limitations && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">Limitations:</h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex">
                          <X className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                          <span className="text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link href={`/checkout/${plan.id}`}>Select Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Membership Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enjoy exclusive perks and features with your FitnessHub membership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Seamless Booking with Calendly Integration</h2>
            <p className="text-muted-foreground mb-6">
              Book classes, personal training sessions, and other services effortlessly through our Calendly-powered scheduling system.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Easy Scheduling</h4>
                  <p className="text-muted-foreground text-sm">Book any class or session with just a few clicks</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Calendar Sync</h4>
                  <p className="text-muted-foreground text-sm">Automatically syncs with your personal calendar</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Reminders</h4>
                  <p className="text-muted-foreground text-sm">Receive notifications and never miss a session</p>
                </div>
              </li>
            </ul>
            <Button asChild>
              <Link href="/classes">View Class Schedule</Link>
            </Button>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/images/calendly-booking.png"
              alt="Calendly booking system"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Stripe Payment Section */}
      <section className="py-20 bg-muted">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto">
              <Image
                src="/images/stripe-payment.png"
                alt="Stripe secure payment"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Secure Payments with Stripe</h2>
              <p className="text-muted-foreground mb-6">
                Manage your membership payments through our secure and reliable Stripe integration.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Secure Transactions</h4>
                    <p className="text-muted-foreground text-sm">All payments are encrypted and secure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Automated Billing</h4>
                    <p className="text-muted-foreground text-sm">Worry-free recurring payments for your membership</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Flexible Payment Options</h4>
                    <p className="text-muted-foreground text-sm">Pay with credit card, debit card, or other payment methods</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/faq">Payment FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our memberships.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <div className="relative h-full w-full bg-neutral-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://ext.same-assets.com/267238972/1200875651.webp"
              alt="Person exercising"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8 py-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join FitnessHub today and experience the perfect blend of luxury fitness and digital training.
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const membershipPlans = [
  {
    id: "basic",
    name: "Basic Membership",
    price: 99,
    description: "Essential fitness access for individuals looking to start their fitness journey",
    benefits: [
      "Access to gym equipment",
      "Limited group classes (4 per month)",
      "Basic app features",
      "Fitness assessment",
      "Access to one location",
    ],
    limitations: [
      "No personal training sessions",
      "Limited class access",
      "No multi-location access",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Membership",
    price: 159,
    description: "Enhanced fitness experience with additional benefits and training options",
    benefits: [
      "Unlimited access to gym equipment",
      "Unlimited group classes",
      "Full app access with training programs",
      "Quarterly fitness assessments",
      "Multi-location access",
      "2 personal training sessions monthly",
      "Priority class booking",
    ],
    popular: true,
  },
  {
    id: "elite",
    name: "Elite Membership",
    price: 249,
    description: "All-inclusive luxury fitness experience with personalized coaching",
    benefits: [
      "Premium access to all facilities",
      "Priority booking for all classes",
      "Unlimited group classes",
      "4 personal training sessions monthly",
      "Customized fitness program",
      "Nutrition coaching",
      "Premium app features",
      "Global access to all locations",
      "Exclusive wellness events",
    ],
    popular: false,
  },
];

const benefits = [
  {
    title: "Unlimited Classes",
    description: "Access to a wide variety of group fitness classes to keep your workout routine fresh and challenging.",
    icon: CheckCircle,
  },
  {
    title: "Expert Training",
    description: "Work with certified personal trainers who create customized workout plans tailored to your goals.",
    icon: CheckCircle,
  },
  {
    title: "Digital Access",
    description: "Access workouts, track progress, and connect with trainers from anywhere with our mobile app.",
    icon: CheckCircle,
  },
  {
    title: "Luxury Facilities",
    description: "Enjoy high-end equipment, luxurious locker rooms, and spa-like amenities at all locations.",
    icon: CheckCircle,
  },
  {
    title: "Nutrition Guidance",
    description: "Receive personalized nutrition advice and meal plans to complement your fitness routine.",
    icon: CheckCircle,
  },
  {
    title: "Community Support",
    description: "Join a community of like-minded individuals committed to health and wellness goals.",
    icon: CheckCircle,
  },
];

const faqs = [
  {
    question: "Can I cancel my membership at any time?",
    answer: "Yes, you can cancel your membership at any time. Cancellations will be effective at the end of your current billing cycle.",
  },
  {
    question: "How do I schedule a class or session?",
    answer: "You can schedule classes and sessions through our app or website using our Calendly integration for easy booking.",
  },
  {
    question: "Is there a joining fee?",
    answer: "Yes, there is a one-time initiation fee, but we frequently run promotions where you can earn this back through regular attendance.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, members can freeze their membership for up to 3 months per year for valid reasons like travel, illness, or injury.",
  },
  {
    question: "How does the payment system work?",
    answer: "We use Stripe for secure monthly billing. Your membership fee will be automatically charged to your payment method on file.",
  },
  {
    question: "Can I upgrade my membership?",
    answer: "Yes, you can upgrade your membership at any time. The new rate will be prorated for the remainder of your billing cycle.",
  },
];

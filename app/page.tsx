import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout";
import { ArrowRight, CheckCircle, Dumbbell, Calendar, Users, BarChartBig } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div className="relative h-[85vh] w-full bg-neutral-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://ext.same-assets.com/267238972/1200875651.webp"
              alt="Hero image of fitness"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              COMMIT TO <br className="hidden md:block" /> SOMETHING
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-xl">
              Join today and earn back your initiation. Experience a revolutionary fitness platform that combines the best of Equinox, Trainerize, and Glofox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Join Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link href="/locations">Find a Location</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">One Membership. Limitless Potential.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlimited Signature Classes, precision-backed Personal Training, and exclusive amenities to recover and regenerate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships.map((membership) => (
            <Card key={membership.title} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{membership.title}</CardTitle>
                <CardDescription>{membership.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold mb-4">${membership.price}<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                <ul className="space-y-2">
                  {membership.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/memberships">Select Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Features That Elevate Your Fitness Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining the best of luxury fitness clubs with cutting-edge digital training and management tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-background p-8 rounded-lg shadow-sm">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="group flex items-center text-sm font-medium text-primary"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Unlimited Signature Classes</h2>
            <p className="text-muted-foreground mb-8">
              Science-backed classes developed by the industry's best minds to maximize transformation. Choose from hundreds of options including strength training, HIIT, yoga, pilates, and more.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Expert Instruction</h4>
                  <p className="text-muted-foreground text-sm">Classes led by certified fitness professionals</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Variety of Formats</h4>
                  <p className="text-muted-foreground text-sm">From high-intensity to recovery-focused sessions</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Convenient Scheduling</h4>
                  <p className="text-muted-foreground text-sm">Book classes in advance or on the go</p>
                </div>
              </li>
            </ul>
            <Button asChild>
              <Link href="/classes">Explore Classes</Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="https://ext.same-assets.com/1769306012/707420371.webp"
              alt="Group fitness class"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-muted">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://ext.same-assets.com/2121174760/2292476193.webp"
                alt="Personal training session"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Expert Coaching</h2>
              <p className="text-muted-foreground mb-8">
                One-on-One training backed by our Health Advisory Board with data-driven and expert-led path to unlocking your absolute best and achieving extraordinary results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Personalized Programs</h4>
                    <p className="text-muted-foreground text-sm">Custom workouts tailored to your goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Progress Tracking</h4>
                    <p className="text-muted-foreground text-sm">Data-driven insights to monitor your improvement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Certified Trainers</h4>
                    <p className="text-muted-foreground text-sm">Work with industry-leading fitness professionals</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/training">Meet Our Trainers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">FitnessHub+ App</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get exclusive access to 1,000+ hours of live and on-demand classes. Wherever you are. Whenever you're ready.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 bg-muted p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">On-Demand Workouts</h3>
                  <p className="text-muted-foreground">Access premium workout content anytime, anywhere with expert trainers guiding you every step of the way.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                  <p className="text-muted-foreground">Monitor your fitness journey with detailed analytics, achievements, and personalized insights.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nutrition Guidance</h3>
                  <p className="text-muted-foreground">Receive customized meal plans and nutrition advice to complement your fitness goals.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Class Booking</h3>
                  <p className="text-muted-foreground">Easily book in-person classes and appointments with your favorite trainers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Challenges</h3>
                  <p className="text-muted-foreground">Join motivating fitness challenges and compete with friends and other members.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Virtual Training</h3>
                  <p className="text-muted-foreground">Connect with trainers remotely for live feedback and personalized coaching.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/app">Explore the App</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative mx-auto" style={{ maxWidth: '280px', height: '560px' }}>
            <div className="absolute inset-0 bg-neutral-100 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/920740722/315296583.webp"
                alt="FitnessHub mobile app"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
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
              EARN BACK YOUR INITIATION
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Commit to Something. Start your fitness journey with FitnessHub today. Limited time offer.
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const memberships = [
  {
    title: "Basic Membership",
    price: 99,
    description: "Essential fitness access for individuals looking to start their fitness journey",
    features: [
      "Access to gym equipment",
      "Limited group classes (4 per month)",
      "Basic app features",
      "Fitness assessment",
      "Access to one location",
    ],
  },
  {
    title: "Premium Membership",
    price: 159,
    description: "Enhanced fitness experience with additional benefits and training options",
    features: [
      "Unlimited access to gym equipment",
      "Unlimited group classes",
      "Full app access with training programs",
      "Quarterly fitness assessments",
      "Multi-location access",
      "2 personal training sessions monthly",
    ],
  },
  {
    title: "Elite Membership",
    price: 249,
    description: "All-inclusive luxury fitness experience with personalized coaching",
    features: [
      "Premium access to all facilities",
      "Priority booking for all classes",
      "Unlimited group classes",
      "4 personal training sessions monthly",
      "Customized fitness program",
      "Nutrition coaching",
      "Premium app features",
      "Global access to all locations",
    ],
  },
];

const features = [
  {
    title: "Personal Training",
    description: "Work one-on-one with expert trainers who create personalized programs to help you reach your goals faster.",
    icon: Dumbbell,
    link: "/training/personal",
  },
  {
    title: "Class Booking",
    description: "Seamlessly book classes through our integrated Calendly system and manage your fitness schedule.",
    icon: Calendar,
    link: "/classes",
  },
  {
    title: "Member Community",
    description: "Connect with fellow fitness enthusiasts, share achievements, and participate in challenges.",
    icon: Users,
    link: "/community",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your fitness journey with detailed metrics, workouts, and achievements in real-time.",
    icon: BarChartBig,
    link: "/dashboard",
  },
  {
    title: "Nutrition Guidance",
    description: "Receive custom meal plans and nutritional advice to complement your fitness routine.",
    icon: CheckCircle,
    link: "/nutrition",
  },
  {
    title: "Seamless Payments",
    description: "Manage your membership, book sessions, and handle payments easily with Stripe integration.",
    icon: ArrowRight,
    link: "/membership",
  },
];

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import Layout from "@/components/layout";
import { Dumbbell, Users, Clock, CalendarCheck } from "lucide-react";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState("personal-training");
  const [selectedTime, setSelectedTime] = useState("");

  // Mock available time slots
  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Session</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Schedule a class, personal training session, or wellness consultation with our expert team.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="personal-training" onValueChange={setSelectedService}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
              <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <TabsTrigger value="personal-training" className="py-3 h-auto flex flex-col items-center gap-2">
                  <Dumbbell className="h-5 w-5" />
                  <span>Personal Training</span>
                </TabsTrigger>
                <TabsTrigger value="group-classes" className="py-3 h-auto flex flex-col items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Group Classes</span>
                </TabsTrigger>
                <TabsTrigger value="consultation" className="py-3 h-auto flex flex-col items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Fitness Consultation</span>
                </TabsTrigger>
                <TabsTrigger value="wellness" className="py-3 h-auto flex flex-col items-center gap-2">
                  <CalendarCheck className="h-5 w-5" />
                  <span>Wellness Services</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="personal-training">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Training Session</CardTitle>
                  <CardDescription>
                    One-on-one training with a certified fitness professional tailored to your goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Choose a Date</h3>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Available Times</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {availableTimes.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="justify-center"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Trainer</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="h-16 w-16 relative overflow-hidden rounded-full bg-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                              <Users className="h-8 w-8" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold">Alex Johnson</h4>
                            <p className="text-sm text-muted-foreground">Strength & Conditioning Specialist</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="h-16 w-16 relative overflow-hidden rounded-full bg-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                              <Users className="h-8 w-8" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold">Sarah Miller</h4>
                            <p className="text-sm text-muted-foreground">Functional Training Expert</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button disabled={!date || !selectedTime}>Book Now</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="group-classes">
              <Card>
                <CardHeader>
                  <CardTitle>Group Classes</CardTitle>
                  <CardDescription>
                    Join our energetic group fitness classes led by expert instructors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="calendly-container" style={{ minHeight: '650px' }}>
                      {/* Calendly inline widget will be embedded here */}
                      <div className="flex items-center justify-center h-full border rounded-md p-8 text-center">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold mb-2">Calendly Integration</h3>
                          <p className="text-muted-foreground mb-4">
                            Our class booking system is powered by Calendly to provide you with a seamless scheduling experience.
                          </p>
                          <div className="border rounded-lg overflow-hidden max-w-xl mx-auto">
                            <img
                              src="/images/calendly-booking.png"
                              alt="Calendly booking interface"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Note: This is a demonstration of Calendly integration. In a production environment,
                      you would see a live Calendly booking widget embedded here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consultation">
              <Card>
                <CardHeader>
                  <CardTitle>Fitness Consultation</CardTitle>
                  <CardDescription>
                    Meet with our fitness experts to discuss your goals and create a personalized plan.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="calendly-container" style={{ minHeight: '650px' }}>
                      {/* Calendly inline widget will be embedded here */}
                      <div className="flex items-center justify-center h-full border rounded-md p-8 text-center">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold mb-2">Calendly Integration</h3>
                          <p className="text-muted-foreground mb-4">
                            Our consultation booking system is powered by Calendly to provide you with a seamless scheduling experience.
                          </p>
                          <div className="border rounded-lg overflow-hidden max-w-xl mx-auto">
                            <img
                              src="/images/calendly-booking.png"
                              alt="Calendly booking interface"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Note: This is a demonstration of Calendly integration. In a production environment,
                      you would see a live Calendly booking widget embedded here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wellness">
              <Card>
                <CardHeader>
                  <CardTitle>Wellness Services</CardTitle>
                  <CardDescription>
                    Book nutrition counseling, recovery sessions, and other wellness services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="calendly-container" style={{ minHeight: '650px' }}>
                      {/* Calendly inline widget will be embedded here */}
                      <div className="flex items-center justify-center h-full border rounded-md p-8 text-center">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold mb-2">Calendly Integration</h3>
                          <p className="text-muted-foreground mb-4">
                            Our wellness services booking system is powered by Calendly to provide you with a seamless scheduling experience.
                          </p>
                          <div className="border rounded-lg overflow-hidden max-w-xl mx-auto">
                            <img
                              src="/images/calendly-booking.png"
                              alt="Calendly booking interface"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Note: This is a demonstration of Calendly integration. In a production environment,
                      you would see a live Calendly booking widget embedded here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integration Info */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Booking Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our booking system integrates Calendly for scheduling and Stripe for secure payments, providing you with a hassle-free experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Calendly Integration</h3>
              <p className="text-muted-foreground">
                Our integration with Calendly provides a seamless scheduling experience, allowing you to book appointments based on real-time availability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Real-time availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Automatic time zone detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Calendar sync with Google, Outlook, and Apple Calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Email and SMS reminders</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Stripe Payments</h3>
              <p className="text-muted-foreground">
                We use Stripe to process all payments securely, allowing you to pay for classes, sessions, and memberships with confidence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Multiple payment methods accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Seamless checkout experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Automatic receipts and confirmations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help Booking?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team is ready to assist you with any questions or issues you might have with the booking process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak with our customer service team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground mt-2">Available Monday-Friday, 8am-8pm</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Call Now</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Get help via email</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">support@fitnesshub.com</p>
                <p className="text-sm text-muted-foreground mt-2">We typically respond within 24 hours</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Email Us</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Chat with a booking specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Chat Now</p>
                <p className="text-sm text-muted-foreground mt-2">Available 24/7 for immediate assistance</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Start Chat</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
